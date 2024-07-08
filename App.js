import { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    {
      "id": 1,
      "name": "Janeczka"
    }, {
      "id": 2,
      "name": "Daveen"
    }, {
      "id": 3,
      "name": "Romain"
    }, {
      "id": 4,
      "name": "Ozzy"
    }, {
      "id": 5,
      "name": "Rafferty"
    }, {
      "id": 6,
      "name": "Elisabetta"
    }, {
      "id": 7,
      "name": "Yvor"
    }, {
      "id": 8,
      "name": "Sonya"
    }, {
      "id": 9,
      "name": "Brittaney"
    }, {
      "id": 10,
      "name": "Todd"
    }, {
      "id": 11,
      "name": "Kenneth"
    }, {
      "id": 12,
      "name": "Liza"
    }, {
      "id": 13,
      "name": "Mirella"
    }, {
      "id": 14,
      "name": "Karl"
    }, {
      "id": 15,
      "name": "Wyatan"
    }, {
      "id": 16,
      "name": "Martha"
    }, {
      "id": 17,
      "name": "Danyette"
    }, {
      "id": 18,
      "name": "Anni"
    }, {
      "id": 19,
      "name": "Liva"
    }, {
      "id": 20,
      "name": "Scotti"
    }, {
      "id": 21,
      "name": "Doralynn"
    }, {
      "id": 22,
      "name": "Corine"
    }, {
      "id": 23,
      "name": "Ignace"
    }, {
      "id": 24,
      "name": "Valentin"
    }, {
      "id": 25,
      "name": "Yorker"
    }, {
      "id": 26,
      "name": "Alethea"
    }, {
      "id": 27,
      "name": "Aarika"
    }, {
      "id": 28,
      "name": "Miof mela"
    }, {
      "id": 29,
      "name": "Sebastian"
    }, {
      "id": 30,
      "name": "Maribel"
    }, {
      "id": 31,
      "name": "Erena"
    }, {
      "id": 32,
      "name": "Barb"
    }, {
      "id": 33,
      "name": "Roshelle"
    }, {
      "id": 34,
      "name": "Paten"
    }, {
      "id": 35,
      "name": "Delcina"
    }, {
      "id": 36,
      "name": "Dill"
    }, {
      "id": 37,
      "name": "Tabbatha"
    }, {
      "id": 38,
      "name": "Ynez"
    }, {
      "id": 39,
      "name": "Fredrick"
    }, {
      "id": 40,
      "name": "Barbe"
    }, {
      "id": 41,
      "name": "Kinny"
    }, {
      "id": 42,
      "name": "Collen"
    }, {
      "id": 43,
      "name": "Garland"
    }, {
      "id": 44,
      "name": "Ariel"
    }, {
      "id": 45,
      "name": "Wilmer"
    }, {
      "id": 46,
      "name": "Olimpia"
    }, {
      "id": 47,
      "name": "Terence"
    }, {
      "id": 48,
      "name": "Anastasia"
    }, {
      "id": 49,
      "name": "Dorry"
    }, {
      "id": 50,
      "name": "Paloma"
    }, {
      "id": 51,
      "name": "Rayna"
    }, {
      "id": 52,
      "name": "Carly"
    }, {
      "id": 53,
      "name": "Nicky"
    }, {
      "id": 54,
      "name": "Hobey"
    }, {
      "id": 55,
      "name": "Lincoln"
    }, {
      "id": 56,
      "name": "Petr"
    }, {
      "id": 57,
      "name": "Marietta"
    }, {
      "id": 58,
      "name": "Modesta"
    }, {
      "id": 59,
      "name": "Louisa"
    }, {
      "id": 60,
      "name": "Kari"
    }, {
      "id": 61,
      "name": "Hugues"
    }, {
      "id": 62,
      "name": "Crichton"
    }, {
      "id": 63,
      "name": "Tobe"
    }, {
      "id": 64,
      "name": "Archy"
    }, {
      "id": 65,
      "name": "Stanfield"
    }, {
      "id": 66,
      "name": "Charita"
    }, {
      "id": 67,
      "name": "Belicia"
    }, {
      "id": 68,
      "name": "Kyle"
    }, {
      "id": 69,
      "name": "Etan"
    }, {
      "id": 70,
      "name": "Verena"
    }, {
      "id": 71,
      "name": "Staffard"
    }, {
      "id": 72,
      "name": "Robinett"
    }, {
      "id": 73,
      "name": "Leilah"
    }, {
      "id": 74,
      "name": "Kaila"
    }, {
      "id": 75,
      "name": "Durant"
    }, {
      "id": 76,
      "name": "Deborah"
    }, {
      "id": 77,
      "name": "Caron"
    }, {
      "id": 78,
      "name": "Rhett"
    }, {
      "id": 79,
      "name": "Efren"
    }, {
      "id": 80,
      "name": "Britt"
    }, {
      "id": 81,
      "name": "Hercule"
    }, {
      "id": 82,
      "name": "Beale"
    }, {
      "id": 83,
      "name": "Shaughn"
    }, {
      "id": 84,
      "name": "Dareen"
    }, {
      "id": 85,
      "name": "Cleopatra"
    }, {
      "id": 86,
      "name": "Wittie"
    }, {
      "id": 87,
      "name": "Keen"
    }, {
      "id": 88,
      "name": "Chariot"
    }, {
      "id": 89,
      "name": "Cari"
    }, {
      "id": 90,
      "name": "Georgeta"
    }, {
      "id": 91,
      "name": "Rutger"
    }, {
      "id": 92,
      "name": "Ede"
    }, {
      "id": 93,
      "name": "Jocelyne"
    }, {
      "id": 94,
      "name": "Kimberley"
    }, {
      "id": 95,
      "name": "Myrah"
    }, {
      "id": 96,
      "name": "Sebastian"
    }, {
      "id": 97,
      "name": "Madeline"
    }, {
      "id": 98,
      "name": "Cam"
    }, {
      "id": 99,
      "name": "Quentin"
    }, {
      "id": 100,
      "name": "Anita"
    }
  ]);

  const pressHandler = (id) =>{
    console.log(id);
  }

  return (
    <View style={styles.container}>

      <FlatList
      //It automatically extracts the key. But in case we have a different field name for key, e.g id, we use:
     // numColumns={2}
      keyExtractor={(item)=>(item.id)}
      data = {people}
      renderItem={({item}) => (
      <TouchableOpacity onPress={() =>pressHandler(item.id)}>
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
