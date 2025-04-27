import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToLibrary = async (item) => {
  const key = item.trackId ? 'userTracks' : 'userArtists';
  const existing = JSON.parse(await AsyncStorage.getItem(key) || '[]');
  
  // Vérifie si l'élément existe déjà
  if (!existing.some(existingItem => existingItem.id === (item.trackId || item.artistId))) {
    await AsyncStorage.setItem(key, 
      JSON.stringify([...existing, {
        id: item.trackId || item.artistId,
        name: item.trackName || item.artistName,
        artwork: item.artworkUrl100,
        addedAt: new Date().toISOString(),
        metadata: item
      }])
    );
    return true;
  }
  return false;
};