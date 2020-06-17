import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [goals, setGoals] = useState([]);

  const handleInputChange = (enteredText) => setInput(enteredText);
  const handlePress = () => console.log(input);
  const handleAddGoal = () => setGoals([...goals]);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput 
          placeholder="Goals"
          style={styles.input}
          onChangeText={handleInputChange}
          value={input}
        />
        <Button 
          title="ADD" 
          styles={styles.button}
          onPress={handlePress}
        />
      </View>
      <View>

      </View>
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
    color: 'red'
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
