import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style/components/styles';

import { SearchHeader } from './components/SearchHeader';
import { SearchInput } from './components/SearchInput';
import { TypeToggle } from './components/TypeToggle';
import { ResultsList } from './components/ResultsList';
import { LibraryScreen } from './components/LibraryScreen';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('artist');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [library, setLibrary] = useState([]);
  const [showLibrary, setShowLibrary] = useState(false);

  const searchITunes = async () => {
    if (!searchTerm.trim()) return;
    setShowLibrary(false);
    setIsLoading(true);
    try {
      const entityType = searchType === 'artist' ? 'musicArtist' : 'song';
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=${entityType}&limit=10`
      );
      const data = await response.json();
      
      const mergedResults = (data.results || []).map(item => {
        const existingLibraryItem = library.find(
          libItem => (item.trackId && libItem.trackId === item.trackId) || 
                    (item.artistId && libItem.artistId === item.artistId)
        );
          if (existingLibraryItem && existingLibraryItem.rating) {
          return { ...item, rating: existingLibraryItem.rating };
        }
        
        return item;
      });
      
      setResults(mergedResults);
    } catch (error) {
      console.error('Search error:', error);
      alert('Oops! Une erreur est survenue. Réessayez 🎵');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToLibrary = (item) => {
    const exists = library.some(
      (entry) =>
        (entry.trackId && entry.trackId === item.trackId) || 
        (entry.artistId && entry.artistId === item.artistId)
    );
    
    if (!exists) {
      setLibrary((prev) => [...prev, item]);
    } else {
      setLibrary(prevLibrary => 
        prevLibrary.map(entry => 
          (entry.trackId === item.trackId || entry.artistId === item.artistId) 
            ? { ...entry, ...item } 
            : entry
        )
      );
    }
  };

  const handleItemPress = (item) => {
    console.log('Selected item:', item);
  };

  const handleRateSearchItem = (item, rating) => {
    console.log('Rating search item:', item, rating);
    setResults(prevResults => 
      prevResults.map(result => 
        (result.trackId === item.trackId || result.artistId === item.artistId)
          ? { ...result, rating: rating }
          : result
      )
    );
    const inLibrary = library.some(
      entry => (entry.trackId === item.trackId || entry.artistId === item.artistId)
    );
    
    if (inLibrary) {
      setLibrary(prevLibrary => 
        prevLibrary.map(entry => 
          (entry.trackId === item.trackId || entry.artistId === item.artistId)
            ? { ...entry, rating: rating }
            : entry
        )
      );
    }
  };
  if (showLibrary) {
    return (
      <View style={{ flex: 1 }}>
        <LibraryScreen library={library} setLibrary={setLibrary} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setShowLibrary(false)}
        >
          <Text style={styles.backButtonText}>Retour à la recherche</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.libraryButtonContainer}>
        <TouchableOpacity
          style={styles.libraryAccessButton}
          onPress={() => setShowLibrary(true)}
        >
          <Text style={styles.libraryAccessButtonText}>Voir la Bibliothèque</Text>
        </TouchableOpacity>
      </View>

      <SearchHeader />
      <SearchInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        searchType={searchType}
      />
      <TypeToggle
        searchType={searchType}
        setSearchType={setSearchType}
      />

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
        onAddToLibrary={handleAddToLibrary}
        onRateItem={handleRateSearchItem}
      />
    </View>
  );
};

export default App;