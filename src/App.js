/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import UserCard from './components/UserCard/UserCard';

const userList = [
  {
    user_id: 0,
    name: 'Ezran Bayantemur',
    tag: 'barbatus',
    content:
      'Ut deserunt proident ad occaecat ut Lorem. Culpa dolor labore tempor dolor aliqua mollit sunt do amet. Laborum irure esse labore',
  },
  {
    user_id: 1,
    name: 'Mert Erim',
    tag: 'Mochte',
    content:
      'Mollit consequat ex aliqua est excepteur eiusmod cupidatat officia incididunt pariatur ad consequat incididunt. Proident non officia aliqua dolore consectetur ipsum labore. Eiusmod est dolore labore incididunt consectetur exercitation do minim ex nostrud tempor.',
  },
  {
    user_id: 2,
    name: 'Didem Gülşen Damlapınar',
    tag: 'ddamlapinar',
    content:
      'Ea dolore mollit et duis in culpa cupidatat cupidatat consectetur ad dolore amet cillum. Eiusmod ullamco labore est commodo occaecat minim voluptate anim do fugiat laborum exercitation ea fugiat. Sit aliqua duis deserunt excepteur ipsum ea officia. Veniam excepteur esse ex nisi nisi.',
  },
  {
    user_id: 3,
    name: 'Didem Gülşen Damlapınar',
    tag: 'ddamlapinar',
    content:
      'Ea dolore mollit et duis in culpa cupidatat cupidatat consectetur ad dolore amet cillum. Eiusmod ullamco labore est commodo occaecat minim voluptate anim do fugiat laborum exercitation ea fugiat. Sit aliqua duis deserunt excepteur ipsum ea officia. Veniam excepteur esse ex nisi nisi.',
  },
  {
    user_id: 4,
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
      <FlatList
        keyExtractor={item => item.user_id.toString()}
        data={userList}
        renderItem={({item}) => {
          return (
            <UserCard
              username={item.name}
              usertag={item.tag}
              content={item.content}
              onSelect={() => handleSelectUser(item.tag)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

export default App;
