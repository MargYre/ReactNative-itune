import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from '../styles';
import { ResultCard } from './ResultCard';

export const ResultsList = ({ results, isLoading, onItemPress }) => {
  if (isLoading) {
    return <ActivityIndicator size="large" color="#7e57c2" style={{ marginTop: 30 }} />;
  }

  return (
    <View style={styles.resultsContainer}>
      {results.length > 0 ? (
        results.map((item) => (
          <ResultCard 
            key={item.trackId || item.artistId} 
            item={item} 
            onPress={() => onItemPress(item)}
          />
        ))
      ) : (
        <Text style={styles.noResults}>
          Aucun résultat trouvé... Essayez un autre terme ✨
        </Text>
      )}
    </View>
  );
};