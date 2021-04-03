/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import UserCard from './components/UserCard/UserCard';

const userList = [
  {
    id: 0,
    name: 'Ezran Bayantemur',
    tag: 'barbatus',
    content:
      'Ut deserunt proident ad occaecat ut Lorem. Culpa dolor labore tempor dolor aliqua mollit sunt do amet. Laborum irure esse labore',
  },
  {
    id: 1,
    name: 'Mert Erim',
    tag: 'Mochte',
    content:
      'Mollit consequat ex aliqua est excepteur eiusmod cupidatat officia incididunt pariatur ad consequat incididunt. Proident non officia aliqua dolore consectetur ipsum labore. Eiusmod est dolore labore incididunt consectetur exercitation do minim ex nostrud tempor.',
  },
  {
    id: 2,
    name: 'Didem Gülşen Damlapınar',
    tag: 'ddamlapinar',
    content:
      'Ea dolore mollit et duis in culpa cupidatat cupidatat consectetur ad dolore amet cillum. Eiusmod ullamco labore est commodo occaecat minim voluptate anim do fugiat laborum exercitation ea fugiat. Sit aliqua duis deserunt excepteur ipsum ea officia. Veniam excepteur esse ex nisi nisi.',
  },
];

function App() {
  function handleSelectUser(username) {
    console.log('SELECTED USER: ' + username);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>USERS</Text>

      {userList.map(user => {
        return (
          <UserCard
            key={user.id}
            username={user.name}
            usertag={user.tag}
            content={user.content}
            onSelect={() => handleSelectUser(user.tag)}
          />
        );
      })}
    </SafeAreaView>
  );
}

export default App;
