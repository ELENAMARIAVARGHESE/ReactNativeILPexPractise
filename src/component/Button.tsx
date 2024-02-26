import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#8518FF',
    borderRadius: 10,
    width: 201,
    height: 48,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    alignItems: 'center',
    fontWeight: '400',
    color: '#ffffff',
    fontSize: 20,
  },
});

export default ButtonComponent;
