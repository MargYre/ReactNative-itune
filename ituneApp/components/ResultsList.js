import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from '../styles';
import { ResultCard } from './ResultCard';

export const ResultsList = ({ 
  results, 
  isLoading, 
  onItemPress, 
  onAddToLibrary,
  onRateItem
}) => {
  
  const handleRating = (item, rating) => {
    console.log(`Note pour ${item.trackName || item.artistName}: ${rating}`);
    if (onRateItem) {
      onRateItem(item, rating);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Recherche en cours...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {results.length === 0 ? (
        <Text style={styles.noResults}>
          Aucun résultat à afficher. Essayez une nouvelle recherche!
        </Text>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.trackId?.toString() || item.artistId?.toString() || Math.random().toString()}
          renderItem={({ item }) => (
            <ResultCard
              item={item}
              onPress={() => onItemPress && onItemPress(item)}
              onAdd={() => onAddToLibrary && onAddToLibrary(item)}
              onRate={handleRating}
              showAddButton={true}
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}
    </View>
  );
};