import {Image, Platform, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import PlayerProps from './player.component.props'
import YoutubeIframe from 'react-native-youtube-iframe'

const Player: React.FC<PlayerProps> = (props: PlayerProps) => {
  const {playing, video} = props

  if (!video) {
    return <></>
  }

  return (
    <View style={styles.container}>
      <YoutubeIframe
        webViewProps={{
          androidLayerType:
            Platform.OS === 'android' && Platform.Version <= 22
              ? 'hardware'
              : 'none',
        }}
        height={230}
        play={playing}
        videoId={video.getVideoId()}
        initialPlayerParams={{
          controls: true,
          modestbranding: true,
          showClosedCaptions: false,
          preventFullScreen: true,
          autoplay: 1,
          iv_load_policy: 3,
          // @ts-ignore
          rel: 0,
          showinfo: 0,
          autohide: 2,
        }}
      />
      <View style={styles.descriptionBox}>
        <Image
          style={styles.image}
          source={
            video.getChannelLogo()
              ? {uri: video.getChannelLogo()}
              : require('../../assets/logo.png')
          }
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{video.getTitle()}</Text>
          <Text style={styles.channelName}>{video.getChannelName()}</Text>
        </View>
      </View>

      <Text style={styles.next}>Up Next</Text>
    </View>
  )
}

export default Player

const styles = StyleSheet.create({
  container: {paddingVertical: 8, paddingHorizontal: 12},
  descriptionBox: {flexDirection: 'row'},
  image: {height: 40, width: 40, borderRadius: 20},
  textContainer: {marginLeft: 12},
  title: {fontSize: 18, color: '#DBDBDB'},
  channelName: {color: '#C2C2C2'},
  next: {fontSize: 18, fontWeight: '500', marginTop: 12, color: '#F5F5F5'},
})
