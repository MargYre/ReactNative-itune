// components/LibraryScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../styles';
import { getLibraryItems } from '../utils/storage';
import { ResultCard } from './ResultCard';

export const LibraryScreen = () => {
  const [libraryItems, setLibraryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLibraryItems();
  }, []);

  const loadLibraryItems = async () => {
    setLoading(true);
    const items = await getLibraryItems();
    setLibraryItems(items);
    setLoading(false);
  };

  const handleItemPress = (item) => {
    console.log('Item sélectionné dans la bibliothèque:', item);
    // Implémentation future pour afficher les détails
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#7e57c2" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ma Bibliothèque</Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {libraryItems.length === 0 ? (
          <Text style={styles.noResults}>
            Votre bibliothèque est vide. Ajoutez des éléments depuis la recherche.
          </Text>
        ) : (
          libraryItems.map(item => (
            <ResultCard
              key={item.trackId || item.artistId}
              item={item}
              onPress={() => handleItemPress(item)}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};