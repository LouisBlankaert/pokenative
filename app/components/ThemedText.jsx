import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../hook/useThemeColors'

export default function ThemedText({variant = "body3", color, style, ...rest}) {
  const colors = useThemeColors();
  return (
    <Text style={[styles[variant], {color: colors[color ?? "grayDark"]}, style]} {...rest}>
      {rest.children}
    </Text>
  )
}

const styles = StyleSheet.create({
    body3: {
        fontSize: 10,
        lineHeight: 16
    },
    headline: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'bold'
    },
    caption: {
      fontSize: 8,
      lineHeight: 12
    },
    subtitle1: {
      fontSize: 14,
      lineHeight: 16,
      fontWeight: 'bold'
    },
    subtitle2: {
      fontSize: 12,
      lineHeight: 16
    },
    subtitle3: {
      fontSize: 10,
      lineHeight: 16
    }
  })

