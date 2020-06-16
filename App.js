import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{
      padding: 100
    }}>
      <View style={{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <TextInput 
          placeholder="Goals"
          style={{
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
            width: 80%
          }}
        />
        <Button 
          title="ADD"
        />
      </View>
      <View>

      </View>
      <Text>Words Go Now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
