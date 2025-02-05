import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';

export default function SortButton({ value, onChange }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Pressable onPress={() => onChange("asc")}>
        <Image source={require("../../assets/images/tag.png")} style={{ width: 12, height: 12 }} />
      </Pressable>
      <Pressable onPress={() => onChange("desc")}>
        <Image source={require("../../assets/images/text_format.png")} style={{ width: 12, height: 12 }} />
      </Pressable>
    </View>
  );
}
