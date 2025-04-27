
export const addToLibrary = (library, item) => {
    const exists = library.some(savedItem => savedItem.trackId === item.trackId || savedItem.artistId === item.artistId);
    if (exists) return library;
    
    return [...library, item];
  };
  
  export const removeFromLibrary = (library, itemId) => {
    return library.filter(savedItem => savedItem.trackId !== itemId && savedItem.artistId !== itemId);
  };
  