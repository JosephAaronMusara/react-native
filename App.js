import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Janeczka",
    },
    {
      id: 2,
      name: "Daveen",
    },
    {
      id: 3,
      name: "Romain",
    },
    {
      id: 4,
      name: "Ozzy",
    },
    {
      id: 5,
      name: "Rafferty",
    },
    {
      id: 6,
      name: "Elisabetta",
    },
    {
      id: 7,
      name: "Yvor",
    },
    {
      id: 8,
      name: "Sonya",
    },
    {
      id: 9,
      name: "Brittaney",
    },
    {
      id: 10,
      name: "Todd",
    },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        //It automatically extracts the key. But in case we have a different field name for key, e.g id, we use:
        // numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {person.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "aqua",
    fontSize: 24,
  },
});
