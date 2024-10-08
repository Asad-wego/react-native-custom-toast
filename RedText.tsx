import React from 'react';
import {Text, StyleSheet} from 'react-native';

const RedText = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 16,
  },
});

export default RedText;
