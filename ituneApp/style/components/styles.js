import { StyleSheet } from 'react-native';
import { COLORS, SPACING, SHADOW } from './theme';

export default StyleSheet.create({
  // Global
  container: {
    flex: 1,
    padding: SPACING.MEDIUM,
    backgroundColor: COLORS.BACKGROUND,
    marginTop: SPACING.LARGE,
  },

  // SearchHeader
  header: { 
    alignItems: 'center', 
    marginBottom: SPACING.LARGE 
  },
  title: { 
    fontSize: 28, 
    color: COLORS.PRIMARY, 
    marginBottom: SPACING.SMALL 
  },

  // Buttons
  button: {
    ...SHADOW,
    ...BUTTON_BASE,
    backgroundColor: COLORS.SECONDARY,
  },
});