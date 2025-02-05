import { View, TextInput, Image, StyleSheet } from 'react-native'
import Row from './Row'
import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <Row style={styles.wrapper} gap={8}>
      <Image source={require("../../assets/images/search.png")} style={styles.icon} />
      <TextInput 
        style={styles.input} 
        onChangeText={onChange} 
        value={value} 
        placeholder="Search..."
        placeholderTextColor="#999"
      />
    </Row>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center", // Alignement correct
    borderRadius: 16,
    height: 40, // Augmenté pour une meilleure interaction
    paddingHorizontal: 12,
    backgroundColor: "#F5F5F5", // Ajout d'un background pour le voir
  }, 
  icon: {
    width: 20, // Ajout de taille pour l'image
    height: 20, // Pour changer la couleur de l'icône si besoin
  },
  input: {
    flex: 1,
    height: 40, // Même hauteur que le wrapper
    fontSize: 14, // Taille de texte plus lisible
    color: "#333",
  }
})
