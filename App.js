import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [goals, setGoals] = useState([]);

  const handleInputChange = (enteredText) => setInput(enteredText);
  const handlePress = () => console.log(input);
  const handleAddGoal = () => setGoals(currentGoals => [...currentGoals, input]);

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
          onPress={handleAddGoal}
        />
      </View>
      <View style={styles.goals}>
        {goals.map(goal => (<Text>{goal}</Text>))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 70,
    paddingRight: 50,
    paddingLeft: 10
  },

  input: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  
  button: {
    width: 5
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  goals: {
    marginTop: 25
  }
});
