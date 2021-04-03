import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  name_container: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  usertag: {
    fontStyle: 'italic',
    color: 'gray',
    marginLeft: 10,
  },
});
