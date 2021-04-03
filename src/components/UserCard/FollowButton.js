import React from 'react';
import { Text, Alert, TouchableOpacity} from 'react-native';
import styles from './UserCard.style';
const FollowButton = ( {usertag}) => {
    return(
        <TouchableOpacity
        style={styles.button_container}
        onPress={() => Alert.alert('CSCON21', `Hi, @${usertag}`)}>
        <Text style={styles.button_text}>Takip Et</Text>
      </TouchableOpacity>
        
    );
}
export default FollowButton;