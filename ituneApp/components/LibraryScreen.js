import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../style/components/styles';
import { ResultCard } from './ResultCard';

export const LibraryScreen = ({ library, setLibrary }) => {
  const handleRatingChange = (item, newRating) => {
    const updatedLibrary = library.map((entry) =>
      (entry.trackId === item.trackId || entry.artistId === item.artistId)
        ? { ...entry, rating: newRating }
        : entry
    );
    setLibrary(updatedLibrary);
  };

  const handleItemPress = (item) => {
    console.log('Item sélectionné dans la bibliothèque:', item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ma Bibliothèque</Text>
      </View>

      {library.length === 0 ? (
        <Text style={styles.noResults}>
          Votre bibliothèque est vide. Ajoutez des éléments depuis la recherche.
        </Text>
      ) : (
        <FlatList
          data={library}
          keyExtractor={(item) => item.trackId?.toString() || item.artistId?.toString()}
          renderItem={({ item }) => (
            <ResultCard
              item={item}
              onPress={() => handleItemPress(item)}
              showAddButton={false}
              onRate={handleRatingChange}
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}
    </View>
  );
};
