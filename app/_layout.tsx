import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Layout() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BuffBros</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f1e9', // cream
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#222',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});