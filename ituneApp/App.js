import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('artist');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>iTunes Search</Text>
      
      <TextInput
        style={styles.input}
        placeholder={`Search by ${searchType}...`}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.button,
            searchType === 'artist' && styles.buttonActive
          ]}
          onPress={() => setSearchType('artist')}
        >
          <Text style={styles.buttonText}>Artist</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.button,
            searchType === 'track' && styles.buttonActive
          ]}
          onPress={() => setSearchType('track')}
        >
          <Text style={styles.buttonText}>Track</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => console.log('Search:', searchTerm, searchType)}
      >
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;