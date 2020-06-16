import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <TextInput 
          placeholder="Goals"
          style={styles.input} />
        <Button title="ADD" styles={styles.button} />
      </View>
      <View>

      </View>
      <Text>Testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  
  button: {
    backgroundColor: 'red'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
