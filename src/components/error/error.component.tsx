import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ErrorProps from './error.component.props'
import {DefaultTexts} from '../../utils'

const Error: React.FC<ErrorProps> = (props: ErrorProps) => {
  const {message} = props

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message && message}</Text>
      <Text style={styles.message}>
        {!message && DefaultTexts.SOMETHING_WENT_WRONG}
      </Text>
    </View>
  )
}

export default Error

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  message: {fontSize: 22, fontWeight: '500', color: '#DBDBDB'},
})
