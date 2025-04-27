import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

export const ResultCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.resultCard} onPress={onPress}>
    <Image
      source={{ uri: item.artworkUrl100 || 'https://via.placeholder.com/100' }}
      style={styles.artwork}
    />
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
    </View>
  </TouchableOpacity>
);