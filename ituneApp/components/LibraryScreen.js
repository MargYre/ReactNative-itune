import { FlatList } from 'react-native';
import { getLibrary } from '../storage/libraryUtils';

export default function LibraryScreen() {
  const [library, setLibrary] = useState({ artists: [], tracks: [] });

  useEffect(() => {
    const loadLibrary = async () => {
      setLibrary(await getLibrary());
    };
    loadLibrary();
  }, []);

  return (
    <FlatList
      data={[...library.artists, ...library.tracks]}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text>{item.name} (ajouté le {new Date(item.addedAt).toLocaleDateString()})</Text>
      )}
    />
  );
}