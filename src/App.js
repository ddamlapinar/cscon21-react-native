/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  View,
  Button,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

// Ezran Bayantemur @barbatus
// Ut deserunt proident ad occaecat ut Lorem. Culpa dolor labore tempor dolor aliqua mollit sunt do amet. Laborum irure esse labore reprehenderit aliquip. Anim ea pariatur irure aute mollit ad cupidatat tempor mollit qui esse. Aliquip pariatur et id ipsum quis. Esse cillum ullamco in voluptate exercitation ullamco dolor duis nisi excepteur labore non nulla ex. Do culpa duis ex cillum.
// [Takip Et]

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={card_style.container}>
        <View style={card_style.name_container}>
          <Text style={card_style.username}>Ezran Bayantemur</Text>
          <Text style={card_style.usertag}>@barbatus</Text>
        </View>
        <Text>
          Ut deserunt proident ad occaecat ut Lorem. Culpa dolor labore tempor
          dolor aliqua mollit sunt do amet. Laborum irure esse labore
        </Text>
        <Button
          title="Takip Et"
          onPress={() => Alert.alert('CSCON21', 'Hi, @barbatus')}
        />
      </View>

      <View style={card_style.container}>
        <View style={card_style.name_container}>
          <Text style={card_style.username}>Mert Erim</Text>
          <Text style={card_style.usertag}>@Mochte</Text>
        </View>
        <Text>
          Mollit consequat ex aliqua est excepteur eiusmod cupidatat officia
          incididunt pariatur ad consequat incididunt. Proident non officia
          aliqua dolore consectetur ipsum labore. Eiusmod est dolore labore
          incididunt consectetur exercitation do minim ex nostrud tempor.
        </Text>
        <Button
          title="Takip Et"
          onPress={() => Alert.alert('CSCON21', 'Hi, @Mochte')}
        />
      </View>

      <View style={card_style.container}>
        <View style={card_style.name_container}>
          <Text style={card_style.username}>Didem Gülşen Damlapınar</Text>
          <Text style={card_style.usertag}>@ddamlapinar</Text>
        </View>
        <Text>
          Ea dolore mollit et duis in culpa cupidatat cupidatat consectetur ad
          dolore amet cillum. Eiusmod ullamco labore est commodo occaecat minim
          voluptate anim do fugiat laborum exercitation ea fugiat. Sit aliqua
          duis deserunt excepteur ipsum ea officia. Veniam excepteur esse ex
          nisi nisi.
        </Text>
        <Button
          title="Takip Et"
          onPress={() => Alert.alert('CSCON21', 'Hi, @ddamlapinar')}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const card_style = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  name_container: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  usertag: {
    fontStyle: 'italic',
    color: 'gray',
    marginLeft: 10,
  },
});
