import {
  Image,
  ImageStore,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import CardProps from './card.component.props'
import {Images} from '../../utils'

const Card: React.FC<CardProps> = (props: CardProps) => {
  const {item, setCurrentIndex} = props

  const getThumnailUrl = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/0.jpg`
  }

  if (!item) {
    return <></>
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setCurrentIndex(item.getId() - 1)}>
      <Image
        style={styles.image}
        source={{uri: getThumnailUrl(item.getVideoId())}}
      />
      <View style={styles.detailsContainer}>
        <Image
          style={styles.detailsImage}
          source={
            item.getChannelLogo()
              ? {uri: item.getChannelLogo()}
              : Images.defaultChannelLogo
          }
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.getTitle()}</Text>
          <Text style={styles.channelName}>{item.getChannelName()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {marginVertical: 8, marginHorizontal: 12},
  image: {height: 200, width: 'auto'},
  detailsContainer: {flexDirection: 'row', marginVertical: 14},
  detailsImage: {height: 40, width: 40, borderRadius: 20},
  textContainer: {marginLeft: 12, flexShrink: 1},
  title: {fontSize: 18, color: '#DBDBDB'},
  channelName: {color: '#C2C2C2'},
})
