import React from 'react';
import {SafeAreaView, Button, Text, Alert} from 'react-native';

function App() {
  // VARIABLES
  const number = 5;
  const result = number * 2;
  const user = {id: 1, name: 'Ezran', age: 27};

  // LOGGING
  console.log('Selam! ', result);

  // REGULAR (NAMED) FUNCTION
  // function handlePress() {
  //   const displayName = user.name.toUpperCase();
  //   Alert.alert('Merhaba ' + displayName);
  // }

  // ARROW FUNCTION
  const handlePress = () => {
    const displayName = user.name.toUpperCase();
    Alert.alert('Merhaba ' + displayName);
  };

  return (
    <SafeAreaView>
      {/* COMPONENT PROP */}
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>Selamlar!!</Text>
      <Text>Sonuç: {result + 1}</Text>
      <Button title="Gönder" onPress={handlePress} />
    </SafeAreaView>
  );
}

export default App;
