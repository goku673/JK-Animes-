import React, { useState } from 'react'
import { Character } from '@/reducer/services/api'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface SayanCardProps {
  character: Character
}

const { width } = Dimensions.get('window')
const cardWidth = width * 0.9

const SayanCard = ({ character }: SayanCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const powerLevel = Math.random() * 100

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    // Here you would typically also update this in your backend or local storage
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF6B6B', '#4ECDC4']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
            <Icon 
              name={isFavorite ? "heart" : "heart-outline"} 
              size={24} 
              color={isFavorite ? "#FF6B6B" : "#FFFFFF"} 
            />
          </TouchableOpacity>
          <Image source={{ uri: character.image }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{character.name}</Text>
            <View style={styles.powerLevel}>
              <Text style={styles.powerText}>Power Level</Text>
              <View style={styles.powerBar}>
                <View style={[styles.powerFill, { width: `${powerLevel}%` }]} />
              </View>
              <Text style={styles.powerValue}>{Math.round(powerLevel * 1000)}</Text>
            </View>
            <View style={styles.traits}>
              <View style={styles.trait}>
                <Icon name="sword" size={20} color="#FFD700" />
                <Text style={styles.traitText}>Warrior</Text>
              </View>
              <View style={styles.trait}>
                <Icon name="flash" size={20} color="#00FFFF" />
                <Text style={styles.traitText}>Super Saiyan</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.glowEffect} />
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    height: 220,
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  gradient: {
    flex: 1,
    padding: 3,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 18,
    overflow: 'hidden',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  image: {
    width: '45%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  powerLevel: {
    marginTop: 10,
  },
  powerText: {
    color: '#bbb',
    fontSize: 16,
    marginBottom: 5,
  },
  powerBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  powerFill: {
    height: '100%',
    backgroundColor: '#FF6B6B',
  },
  powerValue: {
    color: '#FF6B6B',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'right',
  },
  traits: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  trait: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  traitText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 14,
  },
  glowEffect: {
    position: 'absolute',
    top: -20,
    left: -20,
    right: -20,
    bottom: -20,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
})

export default SayanCard