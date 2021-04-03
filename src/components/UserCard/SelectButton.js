import React from 'react';
import { Text, Alert, TouchableOpacity} from 'react-native';
import styles from './UserCard.style';

const SelectButton = ({onSelect}) => {
    return(
    <TouchableOpacity style={styles.button_container} onPress={onSelect}>   
        <Text style={styles.button_text}>Seç</Text>
      </TouchableOpacity>
    );
}
export default SelectButton;