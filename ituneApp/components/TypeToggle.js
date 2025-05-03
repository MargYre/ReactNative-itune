import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../style/components/styles';

export const TypeToggle = ({ searchType, setSearchType }) => (
  <View style={styles.buttonGroup}>
    <TouchableOpacity
      style={[styles.button, searchType === 'artist' && styles.buttonActive]}
      onPress={() => setSearchType('artist')}
    >
      <Text style={[styles.buttonText, searchType === 'artist' && styles.buttonActiveText]}>
        Artistes
      </Text>
    </TouchableOpacity>
    
    <TouchableOpacity
      style={[styles.button, searchType === 'track' && styles.buttonActive]}
      onPress={() => setSearchType('track')}
    >
      <Text style={[styles.buttonText, searchType === 'track' && styles.buttonActiveText]}>
        Titres
      </Text>
    </TouchableOpacity>
  </View>
);