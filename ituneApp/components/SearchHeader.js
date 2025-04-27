import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export const SearchHeader = () => (
  <View style={styles.header}>
    <Text style={styles.title}>iTunes Explorer</Text>
    <Text style={styles.subtitle}>Découvrez votre musique préférée</Text>
  </View>
);