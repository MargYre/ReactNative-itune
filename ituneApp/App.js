import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

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
        <Button 
          title="Artist" 
          onPress={() => setSearchType('artist')} 
          color={searchType === 'artist' ? 'blue' : 'gray'}
        />
        <Button 
          title="Track" 
          onPress={() => setSearchType('track')} 
          color={searchType === 'track' ? 'blue' : 'gray'}
        />
      </View>
      
      <Button title="Search" onPress={() => console.log('Search:', searchTerm, searchType)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default App;