import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { saveToLibrary } from '../storage/libraryUtils';
import { COLORS } from '../styles';

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToLibrary = async () => {
    try {
      await saveToLibrary(item);
      setIsAdded(true);
      Alert.alert(
        'Ajout réussi',
        item.trackName 
          ? 'Le titre a été ajouté à votre base' 
          : 'L\'artiste a été ajouté à votre base',
        [{ text: 'OK', onPress: () => navigation.goBack() }]
      );
    } catch (error) {
      Alert.alert('Erreur', 'L\'ajout a échoué');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.artworkUrl100?.replace('100x100', '600x600') || 'https://via.placeholder.com/600' }}
        style={styles.artwork}
      />
      
      <Text style={styles.title}>{item.trackName || item.artistName}</Text>
      <Text style={styles.subtitle}>{item.artistName}</Text>

      {item.collectionName && (
        <Text style={styles.detail}>Album : {item.collectionName}</Text>
      )}

      <TouchableOpacity
        style={[styles.button, isAdded && styles.disabledButton]}
        onPress={handleAddToLibrary}
        disabled={isAdded}
      >
        <Text style={styles.buttonText}>
          {isAdded 
            ? '✓ Déjà dans votre base' 
            : item.trackName 
              ? '+ Ajouter ce titre' 
              : '+ Ajouter cet artiste'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.BACKGROUND,
  },
  artwork: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.TEXT_DARK,
    marginBottom: 15,
  },
  detail: {
    fontSize: 16,
    color: COLORS.TEXT_LIGHT,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: COLORS.SECONDARY,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});