import React from 'react';
import { FlatList } from 'react-native';
import { ResultCard } from './ResultCard';

export const ResultsList = ({ results, isLoading, onItemPress, onAddToLibrary }) => {
  return (
    <FlatList
      data={results}
      keyExtractor={(item) => item.trackId?.toString() || item.artistId?.toString()}
      renderItem={({ item }) => (
        <ResultCard
          item={item}
          onPress={() => onItemPress(item)}
          onAdd={onAddToLibrary}
          showAddButton={true}
        />
      )}
      contentContainerStyle={{ paddingBottom: 100 }}
    />
  );
};
