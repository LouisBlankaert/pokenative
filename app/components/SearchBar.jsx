import { View, TextInput } from 'react-native'
import React from 'react'

export default function SearchBar({value, onChange}) {
  return (
    <View>
      <TextInput onChangeText={onChange} value={value}></TextInput>
    </View>
  )
}