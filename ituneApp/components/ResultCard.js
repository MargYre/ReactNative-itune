import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../style/components/styles';
import { saveToLibrary } from '../utils/storage';
import { StarRating } from './rating/StarRating';

export const ResultCard = ({ item, onPress, onAdd, onRate, showAddButton }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [rating, setRating] = useState(item.rating || 0);

  const handleAddToLibrary = async () => {
    setIsSaving(true);
    try {
      if (onAdd) {
        onAdd(item);
      }
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
    } catch (error) {
      console.error("Erreur lors de l'ajout à la bibliothèque:", error);
      setIsSaving(false);
    }
  };

  const handleRate = (newRating) => {
    console.log("Rated:", newRating);
    setRating(newRating);
    if (onRate) {
      onRate(item, newRating);
    }
  };

  return (
    <View style={styles.resultCardContainer}>
      <TouchableOpacity style={styles.resultCard} onPress={() => onPress && onPress(item)}>
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
          <StarRating rating={rating} onRate={handleRate} />
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