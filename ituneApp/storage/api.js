export const addToLibrary = async (type, item) => {
    // type = 'artist' ou 'track'
    const key = type === 'artist' ? 'artists' : 'tracks';
    
    const existingData = await AsyncStorage.getItem(key);
    const newEntry = {
      id: item.artistId || item.trackId,
      ...(type === 'artist' ? {
        name: item.artistName,
        genre: item.primaryGenreName
      } : {
        title: item.trackName,
        album: item.collectionName
      })
    };
  
    await AsyncStorage.setItem(key, 
      JSON.stringify([...existingData, newEntry])
    );
  };export const addToLibrary = async (type, item) => {
  // type = 'artist' ou 'track'
  const key = type === 'artist' ? 'artists' : 'tracks';
  
  const existingData = await AsyncStorage.getItem(key);
  const newEntry = {
    id: item.artistId || item.trackId,
    ...(type === 'artist' ? {
      name: item.artistName,
      genre: item.primaryGenreName
    } : {
      title: item.trackName,
      album: item.collectionName
    })
  };

  await AsyncStorage.setItem(key, 
    JSON.stringify([...existingData, newEntry])
  );
};