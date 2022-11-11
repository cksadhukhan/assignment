import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import FooterProps from './footer.component.props'

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const {
    isFetching
  } = props

  return isFetching ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  ) : <></>
}

export default Footer

const styles = StyleSheet.create({
  container: { marginTop: 10, alignItems: "center" }
})
