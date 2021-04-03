/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

function App() {
  // FLEXBOX
  // https://reactnative.dev/docs/flexbox
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'aqua',
          alignItems: 'center',
          justifyContent: 'space-between',
          // flexDirection: 'row',
        }}>
        <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
      </View>
    </SafeAreaView>
  );
}

export default App;
