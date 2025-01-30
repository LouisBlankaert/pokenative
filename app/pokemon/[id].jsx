import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, Link } from 'expo-router'

export default function pokemon() {
    const params = useLocalSearchParams()
  return (
    <View>
      <Text>pokemon {params.id}</Text>
    </View>
  )
}