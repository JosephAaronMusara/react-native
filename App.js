import { useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('Joseph Aaron');
  const [age, setAge] = useState(21);

  const clickHandler = () => {
    setName('Tariroyashe Aaron');
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>Enter Name : </Text>
        <TextInput multiline style={styles.input} placeholder='e.g Tariroyashe' onChangeText={(val)=>setName(val)}/>
        <Text>Enter Age : </Text>
        <TextInput keyboardType='numeric' style={styles.input} placeholder='e.g 17' onChangeText={(val)=>setAge(val)}/>
      </View>

      <View>
        <Text>Name: {name} -- Age : {age}</Text>
        <Text></Text>
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
  input:{
    borderWidth:1,
    borderColor: '#777',
    padding: 8,
    margin:10,
    width:200,
  },
});
