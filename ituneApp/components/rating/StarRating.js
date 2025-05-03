import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './StarRating.styles';

export const StarRating = ({ rating = 0, onRate }) => {
  const currentRating = typeof rating === 'number' ? rating : 0;
  
  const handlePress = (newRating) => {
    if (newRating === currentRating && onRate) {
      onRate(0);
      return;
    }
    if (onRate) {
      onRate(newRating);
    }
  };

  const renderStars = () => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity 
          key={i} 
          onPress={() => handlePress(i)}
          style={styles.starButton}
          activeOpacity={0.7}
        >
          <Text style={{ 
            fontSize: 24, 
            color: i <= currentRating ? '#FFD700' : '#ccc',
          }}>
            ★
          </Text>
        </TouchableOpacity>
      );
    }
    
    return stars;
  };

  return (
    <View style={styles.container}>
      {renderStars()}
      {currentRating > 0 && (
        <Text style={styles.ratingText}>{currentRating}/5</Text>
      )}
    </View>
  );
};