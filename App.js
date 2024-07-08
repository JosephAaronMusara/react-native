import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('Joseph Aaron');
  const [person, setPerson] = useState({name: 'Tariroyashe Aaron',age : 17});

  const clickHandler = () => {
    setName('Tariroyashe Aaron');
    setPerson({name: 'Joseph Aaron', age : 21});
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>My name is {name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text>Im in love with {person.name} , who is {person.age} years old.</Text>
        <Text></Text>
          <Button title='Update state' onPress={clickHandler}/>
       </View>
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
  buttonContainer:{
    marginTop:20,
  },
});
