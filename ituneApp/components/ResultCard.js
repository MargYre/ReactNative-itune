
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
import { saveToLibrary } from '../utils/storage';

export const ResultCard = ({ item, onPress, onAdd, showAddButton }) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleAddToLibrary = async () => {
    setIsSaving(true);
    const added = await saveToLibrary(item);
    setIsSaving(false);
    
    if (added) {
      Alert.alert(
        "Ajouté!",
        "L'élément a été ajouté à votre bibliothèque.",
        [{ text: "OK" }]
      );
    } else {
      Alert.alert(
        "Déjà dans la bibliothèque",
        "Cet élément est déjà dans votre bibliothèque.",
        [{ text: "OK" }]
      );
    }
  };

  return (
    <View style={styles.resultCardContainer}>
      <TouchableOpacity style={styles.resultCard} onPress={onPress}>
        <Image
          source={{ uri: item.artworkUrl100 || 'https://via.placeholder.com/100' }}
          style={styles.artwork}
        />
        <View style={styles.resultInfo}>
          <Text style={styles.resultTitle} numberOfLines={1}>
            {item.trackName || item.artistName}
          </Text>
          <Text style={styles.resultSubtitle} numberOfLines={1}>
            {item.artistName}
          </Text>
          <View style={styles.resultTypeBadge}>
            <Text style={styles.resultTypeText}>
              {item.kind === 'song' ? '🎵 Musique' : '🎤 Artiste'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
     {showAddButton && (
      <TouchableOpacity 
        style={styles.addToLibraryButton}
        onPress={handleAddToLibrary}
        disabled={isSaving}
      >
        <Text style={styles.addToLibraryButtonText}>
          {isSaving ? "..." : "+"}
        </Text>
      </TouchableOpacity>
    )}
    </View>
  );
};