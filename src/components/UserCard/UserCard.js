import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import styles from './UserCard.style';

const UserCard = ({username, usertag, content}) => {
  return (
    <View style={styles.container}>
      <View style={styles.name_container}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.usertag}>@{usertag}</Text>
      </View>
      <Text>{content}</Text>
      <Button
        title="Takip Et"
        onPress={() => Alert.alert('CSCON21', `Hi, @${usertag}`)}
      />
    </View>
  );
};

export default UserCard;
