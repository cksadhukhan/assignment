import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import HeaderProps from './header.component.props'
import {Images} from '../../utils'

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {onShare} = props

  return (
    <View style={{marginHorizontal: 12, marginTop: 8, alignItems: 'flex-end'}}>
      <TouchableOpacity
        onPress={() => onShare()}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 90,
          borderWidth: 1,
          borderRadius: 3,
          borderColor: '#fff',
          paddingVertical: 4,
          paddingHorizontal: 12,
        }}>
        <Image source={Images.whatsapp} style={{height: 20, width: 20}} />
        <Text style={{marginLeft: 6, color: '#fff'}}>Share</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
