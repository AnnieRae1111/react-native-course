import React from 'react'
//react library = all about how components work together
//react native: take info from components and show it on native device
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const greeting2 = 'My name is AnnieRae'

  return (
    <View>
      <Text style={styles.textStyle2}>Getting Started with React Native</Text>
      <Text style={styles.textStyle}>{greeting2}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  textStyle2: {
    fontSize: 45,
  },
})

export default ComponentsScreen
