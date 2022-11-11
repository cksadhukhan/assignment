import React, {useEffect, useState} from 'react'
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Share from 'react-native-share'
import HomeScreenProps from './home.screen.props'
import {Card, Error, Footer, Header, Player, Seperator} from '../../components'
import {Video} from '../../models'
import {DefaultTexts} from '../../utils'
import {API} from '../../services'

const HomeScreen: React.FC<HomeScreenProps> = (props: HomeScreenProps) => {
  const [playing, setPlaying] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const [videos, setVideos] = useState<Array<Video>>([])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setPlaying(true)
  }, [currentIndex])

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await API.fetchInitialData()
      if (response.data.next) setHasNextPage(true)
      else setHasNextPage(false)

      let newVideos: Array<Video> = []
      if (response.data.results) {
        response.data.results.map((video: any) => {
          newVideos.push(new Video(video))
        })
        setVideos(newVideos)
      }
      setIsLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  const fetchMoreData = async () => {
    try {
      if (hasNextPage) {
        setIsFetching(true)
        setCurrentPage(currentPage + 1)
        const response = await API.fetchMoreData(currentPage)
        if (!response.data.next) setHasNextPage(false)
        if (response.data.results) {
          let newVideos: Array<Video> = [...videos]
          response.data.results.map((video: any) => {
            newVideos.push(new Video(video))
          })
          setVideos(newVideos)
        }
        setIsFetching(false)
      } else {
        Alert.alert(DefaultTexts.NO_MORE_DATA)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const renderFooter = () => {
    return <Footer isFetching={isFetching} />
  }

  const renderSeperator = () => {
    return <Seperator />
  }

  const onShare = () => {
    const shareOptions = {
      title: DefaultTexts.SHARE_TITLE,
      message: DefaultTexts.SHARE_MESSAGE,
      url: videos[currentIndex]?.getResourceLink(),
    }

    Share.open(shareOptions)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  if (videos.length === 0) {
    return isLoading ? (
      <Error message={DefaultTexts.FETCHING_VIDEOS} />
    ) : (
      <Error message={DefaultTexts.NO_VIDEO} />
    )
  }

  return (
    <View style={styles.container}>
      <Header onShare={onShare} />
      <Player playing={playing} video={videos[currentIndex]} />
      <FlatList
        overScrollMode="never"
        data={videos.slice(currentIndex + 1, videos.length)}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={fetchMoreData}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={renderSeperator}
        renderItem={({item, index}) => {
          return <Card item={item} setCurrentIndex={setCurrentIndex} />
        }}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000000'},
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
})
