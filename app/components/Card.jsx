import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Shadows } from '../../constants/Shadows';
import { useThemeColors } from '../../hook/useThemeColors';

export default function Card({ style, ...rest }) {
  const colors = useThemeColors();

  return (
    <View
      style={[styles.card, style, { backgroundColor: colors.grayWhite }]}
      {...rest}
    >
      {rest.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    ...Shadows.dp2, // Assure-toi que Shadows.dp2 est bien défini dans Shadows
  },
});
