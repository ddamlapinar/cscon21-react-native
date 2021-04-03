/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

function App() {
  // FLEXBOX
  // https://reactnative.dev/docs/flexbox
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 3, backgroundColor: 'red'}}>
        <Text>VIEW 1</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Text>VIEW 2</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'green'}}>
        <Text>VIEW 3</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
