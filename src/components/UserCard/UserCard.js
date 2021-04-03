import React from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import styles from './UserCard.style';

const UserCard = ({username, usertag, content, onSelect}) => {
  return (
    <View style={styles.container}>
      <View style={styles.name_container}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.usertag}>@{usertag}</Text>
      </View>
      <Text>{content}</Text>

      {/* ÖDEV: Button componentini custom yapıya çevrilsin */}
      <TouchableOpacity
        style={styles.button_container}
        onPress={() => Alert.alert('CSCON21', `Hi, @${usertag}`)}>
        <Text style={styles.button_text}>Takip Et</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_container} onPress={onSelect}>
        <Text style={styles.button_text}>Seç</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserCard;
