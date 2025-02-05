import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, Link } from 'expo-router'
import { StyleSheet } from 'react-native'
import Row from '../components/Row';

export default function pokemon() {
    const params = useLocalSearchParams()
  return (
    <Row>
      <Text>pokemon {params.id}</Text>
    </Row>
  )
}

const styles = StyleSheet.create({
    
})