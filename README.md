# iTunes Search App

A React Native mobile application that allows you to search for artists and music tracks through the iTunes Search API, view them in detail, add them to your favorites, and give them a personalized rating.

## 📱 Features

- **Advanced Search**
  - Search by artist name
  - Search by track title
  - Intuitive interface with quick filters

- **Results Display**
  - Clear and organized list
  - Preview with artwork, title, artist, and album
  - Smooth navigation to details

- **Detailed View**
  - Complete information about the selected item
  - Large format artwork
  - Metadata (duration, release date, genre)
  - Sharing options

- **Favorites System**
  - Add/remove items to favorites
  - Dedicated section to find all your favorites
  - Data persistence between sessions

- **Custom Rating**
  - Star rating system (1 to 5)
  - Modify ratings at any time
  - Display ratings in the favorites list

## 🛠️ Technologies Used

- **React Native** - Mobile development framework
- **Expo** - Simplified platform for React Native
- **React Navigation** - Navigation between screens
  - Stack Navigator for detailed views
  - Tab Navigator for main navigation
- **AsyncStorage** - Data persistence
- **iTunes Search API** - Apple's public API for content search

## 📋 Prerequisites

- Node.js (version 12 or higher)
- npm or yarn
- Expo CLI
- An iOS/Android emulator or physical device for testing

## 🚀 Installation

1. Clone this repository
   ```bash
   git clone https://github.com/your-username/itunes-search-app.git
   cd itunes-search-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Install specific dependencies
   ```bash
   npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-async-storage/async-storage @expo/vector-icons
   # or
   yarn add @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-async-storage/async-storage @expo/vector-icons
   ```

4. Launch the application
   ```bash
   expo start
   # or
   npm start
   # or
   yarn start
   ```

## 🔍 Using the iTunes API

The application uses Apple's public iTunes Search API:
```javascript
https://itunes.apple.com/search?term=SEARCH&media=music&entity=TYPE&limit=25
```

where:
- `SEARCH` is the term to search for
- `TYPE` can be "musicArtist,album" for artist search or "song" for track search

Complete documentation: [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/)

## 📱 Screenshots

*[Insert screenshots of your application here]*

## 🧪 Testing

```bash
npm test
# or
yarn test
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Apple](https://developer.apple.com/) for providing the iTunes Search API
- [React Native](https://reactnative.dev/) for the mobile development framework
- [Expo](https://expo.dev/) for simplified development tools
