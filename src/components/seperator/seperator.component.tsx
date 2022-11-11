import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SeperatorProps from './seperator.component.props'

const Seperator: React.FC<SeperatorProps> = (props: SeperatorProps) => {
  return (
    <View style={styles.seperator}></View>
  )
}

export default Seperator

const styles = StyleSheet.create({
    seperator: {height: 0.5, marginVertical: 8, backgroundColor: '#6B6B6B'}
})