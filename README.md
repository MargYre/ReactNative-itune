# iTunes Search App

Music search application developed with React Native and Expo

## 🛠 Technical Configuration

### Key Versions
- **Expo SDK**: 52.0.0
- **React Native**: 0.71.3
- **Node**: 18.x

### Installation
```bash
git clone git@github.com:MargYre/ReactNative-itune.git
cd ReactNative-itune/ituneApp
npm install
```

## Expo Go Troubleshooting Solution
Due to compatibility issues with newer Expo Go versions, follow these steps:
  1. Uninstall current Expo Go version
  2. Manual installation
      Download specific APK for SDK 52:
    
      ```bash
      https://expo.dev/go?sdkVersion=52&platform=android&device=true
      
      ```
3. Install specific dependencies
   ```bash
   npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-async-storage/async-storage @expo/vector-icons
   # or
   yarn add @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-async-storage/async-storage @expo/vector-icons
   ```
4. Launch the application
   ```bash
   npx expo start
   ```
