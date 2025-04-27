import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../styles';

export const SearchInput = ({ value, onChangeText, searchType }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder={`Rechercher par ${searchType === 'artist' ? 'artiste... 🎤' : 'titre... 🎵'}`}
      placeholderTextColor="#b39ddb"
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);