import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('artist');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchITunes = async () => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    try {
      const entityType = searchType === 'artist' ? 'musicArtist' : 'song';
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=${entityType}&limit=10`
      );
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error('Search error:', error);
      alert('Oops! Une erreur est survenue. Réessayez 🎵');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>iTunes Explorer</Text>
        <Text style={styles.subtitle}>Découvrez votre musique préférée</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={`Rechercher par ${searchType === 'artist' ? 'artiste... 🎤' : 'titre... 🎵'}`}
          placeholderTextColor="#b39ddb"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.button,
            searchType === 'artist' && styles.buttonActive
          ]}
          onPress={() => setSearchType('artist')}
        >
          <Text style={[
            styles.buttonText,
            searchType === 'artist' && styles.buttonActiveText
          ]}>
            Artistes
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.button,
            searchType === 'track' && styles.buttonActive
          ]}
          onPress={() => setSearchType('track')}
        >
          <Text style={[
            styles.buttonText,
            searchType === 'track' && styles.buttonActiveText
          ]}>
            Titres
          </Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity
        style={styles.searchButton}
        onPress={searchITunes}
      >
        <Text style={styles.searchButtonText}>Rechercher</Text>
      </TouchableOpacity>

      {isLoading ? (
        <ActivityIndicator size="large" color="#7e57c2" style={{ marginTop: 30 }} />
      ) : (
        results.length > 0 && (
          <Text style={styles.loadingText}>
            {results.length} résultats trouvés! 🎉
          </Text>
        )
      )}
    </View>
  );
};

export default App;