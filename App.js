import { useState } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

export default function App() {

  const [person, setPerson] = useState([
    {name:'Joseph', key :1},
    {name:'Aaron', key :2},
    {name:'Tariroyashe', key :3},
    {name:'Anthony', key :4},
    {name:'Tawanda', key :5},
    {name:'Munyaradzi', key :6},
    {name:'Mukudzei', key :7},
    {name:'Travin', key :8},
  ]);
 
  return (
    <View style={styles.container}>

      <ScrollView>

      {person.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      )}

      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'aqua',
    fontSize : 24,
  }
});
