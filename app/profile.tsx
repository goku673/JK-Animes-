import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, RefreshControl, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux'
import { useGetSayansQuery } from '@/reducer/services/api'
import SayanCard from '@/components/sayanCard'
import { RootState } from '@/reducer/store'
import { Character } from '@/reducer/services/api'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

 const HomePage =() =>{
  const [refreshing, setRefreshing] = useState(false)
  const { data, error, isLoading, refetch } = useGetSayansQuery()
  const { user } = useSelector((state: RootState) => state.users)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    refetch().then(() => setRefreshing(false))
  }, [refetch])

  if (isLoading) {
    return (
      <LinearGradient colors={['#FF6B6B', '#4ECDC4']} style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFFFFF" />
        <Text style={styles.loadingText}>Summoning Dragon Ball characters...</Text>
      </LinearGradient>
    )
  }

  if (error) {
    return (
      <LinearGradient colors={['#FF6B6B', '#4ECDC4']} style={styles.errorContainer}>
        <Icon name="alert-circle-outline" size={64} color="#FFFFFF" />
        <Text style={styles.errorText}>Error: Unable to load characters</Text>
        <Text style={styles.errorSubText}>Please check your connection and try again</Text>
      </LinearGradient>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: 'https://example.com/dragon-ball-background.jpg' }}
        style={styles.backgroundImage}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <LinearGradient
            colors={['rgba(255, 107, 107, 0.8)', 'rgba(78, 205, 196, 0.8)']}
            style={styles.header}
          >
            <Icon name="account-circle" size={64} color="#FFFFFF" style={styles.userIcon} />
            <Text style={styles.welcomeText}>Welcome, {user?.username}!</Text>
            <Text style={styles.emailText}>{user?.email}</Text>
          </LinearGradient>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Dragon Ball Characters</Text>
          </View>
          <View style={styles.cardContainer}>
            {data?.items.map((character: Character) => (
              <SayanCard key={character.id} character={character} />
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  errorSubText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  userIcon: {
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  emailText: {
    fontSize: 16,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginLeft: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
})

export default HomePage;