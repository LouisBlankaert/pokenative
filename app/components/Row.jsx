import { View, ViewStyle } from 'react-native'

export default function Row({ style, gap, ...rest }) {
  return (
    <View style={[rowStyle, style, gap ? { marginHorizontal: gap / 2 } : null]}>
      {rest.children}
    </View>
  )
}

const rowStyle = {
  flex: 0,
  flexDirection: "row",
  alignItems: "center",
}
