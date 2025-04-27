// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LIBRARY_STORAGE_KEY = 'itunes_user_library';

export const saveToLibrary = async (item) => {
  try {
    // Récupérer la bibliothèque existante
    const existingData = await AsyncStorage.getItem(LIBRARY_STORAGE_KEY);
    const libraryItems = existingData ? JSON.parse(existingData) : [];
    
    // Vérifier si l'élément existe déjà
    const itemId = item.trackId || item.artistId;
    const exists = libraryItems.some(i => 
      (i.trackId === itemId || i.artistId === itemId)
    );
    
    // Si l'élément n'existe pas, l'ajouter
    if (!exists) {
      libraryItems.push(item);
      await AsyncStorage.setItem(LIBRARY_STORAGE_KEY, JSON.stringify(libraryItems));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error);
    return false;
  }
};

export const getLibraryItems = async () => {
  try {
    const data = await AsyncStorage.getItem(LIBRARY_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Erreur lors de la récupération de la bibliothèque:', error);
    return [];
  }
};