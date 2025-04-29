import AsyncStorage from '@react-native-async-storage/async-storage';

const LIBRARY_KEY = 'itunes_library';

export const getLibrary = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(LIBRARY_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading library:', e);
    return [];
  }
};

export const saveToLibrary = async (item) => {
  try {
    const library = await getLibrary();
    
    const exists = library.some(
      (entry) => 
        (entry.trackId && entry.trackId === item.trackId) || 
        (entry.artistId && entry.artistId === item.artistId)
    );
    
    if (!exists) {
      library.push(item);
      await AsyncStorage.setItem(LIBRARY_KEY, JSON.stringify(library));
      return true;
    } else {
      const updatedLibrary = library.map(entry => 
        (entry.trackId === item.trackId || entry.artistId === item.artistId)
          ? { ...entry, ...item }
          : entry
      );
      await AsyncStorage.setItem(LIBRARY_KEY, JSON.stringify(updatedLibrary));
      return false;
    }
  } catch (e) {
    console.error('Error saving to library:', e);
    return false;
  }
};

export const updateLibraryItem = async (item, updates) => {
  try {
    const library = await getLibrary();
    
    const updatedLibrary = library.map(entry => 
      (entry.trackId === item.trackId || entry.artistId === item.artistId)
        ? { ...entry, ...updates }
        : entry
    );
    
    await AsyncStorage.setItem(LIBRARY_KEY, JSON.stringify(updatedLibrary));
    return true;
  } catch (e) {
    console.error('Error updating library item:', e);
    return false;
  }
};

export const removeFromLibrary = async (item) => {
  try {
    const library = await getLibrary();
    const filteredLibrary = library.filter(
      (entry) => 
        !(entry.trackId === item.trackId || entry.artistId === item.artistId)
    );
    
    await AsyncStorage.setItem(LIBRARY_KEY, JSON.stringify(filteredLibrary));
    return true;
  } catch (e) {
    console.error('Error removing from library:', e);
    return false;
  }
};

export const saveRating = async (item, rating) => {
  try {
    const library = await getLibrary();
    const itemExists = library.some(
      (entry) => 
        (entry.trackId === item.trackId || entry.artistId === item.artistId)
    );
    
    if (itemExists) {
      return await updateLibraryItem(item, { rating });
    } else {
      return await saveToLibrary({ ...item, rating });
    }
  } catch (e) {
    console.error('Error saving rating:', e);
    return false;
  }
};