import React from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import styles from './UserCard.style';
import FollowButton from './FollowButton'
import SelectButton from './SelectButton'
const UserCard = ({username, usertag, content, onSelect}) => {
  return (
    <View style={styles.container}>
      <View style={styles.name_container}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.usertag}>@{usertag}</Text>
      </View>
      <Text>{content}</Text>

      {/* ÖDEV: Button componentini custom yapıya çevrilsin */}
      <FollowButton usertag={usertag}/>
      <SelectButton/>
      {/* <TouchableOpacity style={styles.button_container} onPress={onSelect}>
        <Text style={styles.button_text}>Seç</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default UserCard;
