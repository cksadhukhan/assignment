import {SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import React from 'react'
import {HomeScreen} from './screens'

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.style}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <HomeScreen />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  style: {
    flex: 1,
  },
})
