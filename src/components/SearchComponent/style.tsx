import {StyleSheet} from 'react-native';

export const searchStyle = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    marginTop: 5,
    marginLeft: 10
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    height: 40,
    fontSize: 16,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#009688',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    height: 35,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
