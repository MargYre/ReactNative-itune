import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { SearchHeader } from './components/SearchHeader';
import { SearchInput } from './components/SearchInput';
import { TypeToggle } from './components/TypeToggle';
import { ResultsList } from './components/ResultsList';

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

  const handleItemPress = (item) => {
    console.log('Selected item:', item);
    // Nous implémenterons la navigation plus tard
  };

  return (
    <View style={styles.container}>
      <SearchHeader />
      <SearchInput 
        value={searchTerm} 
        onChangeText={setSearchTerm} 
        searchType={searchType} 
      />
      <TypeToggle searchType={searchType} setSearchType={setSearchType} />
      
      <TouchableOpacity
        style={styles.searchButton}
        onPress={searchITunes}
      >
        <Text style={styles.searchButtonText}>Rechercher</Text>
      </TouchableOpacity>

      <ResultsList 
        results={results} 
        isLoading={isLoading} 
        onItemPress={handleItemPress} 
      />
    </View>
  );
};

export default App;