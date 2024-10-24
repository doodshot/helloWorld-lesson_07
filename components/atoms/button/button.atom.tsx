import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { styles } from '@/components/atoms/button/button.styles';

interface ButtonProps {
  title: String;
  disabled?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  activeOpacity?: number;
  onPress: () => void;
}
export const ButtonComponent = ({
  title = "",
  disabled = false,
  style,
  titleStyle,
  activeOpacity = 0.7,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.container, style]}
      disabled={disabled}
      onPress={onPress}>
    </TouchableOpacity>
  );
};
export const ButtonAdd = ({
  title,
  disabled = false,
  style,
  activeOpacity = 0.7,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      style={[styles.addBtn, style]}
      onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
