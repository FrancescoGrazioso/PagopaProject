import {StyleSheet} from 'react-native';

export const pageStyle = StyleSheet.create({
  container: {
    padding: 10,
  },
  list: {
    marginTop: 10,
    maxHeight: '76%',
  },
  listItem: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  username: {
    marginLeft: 7,
  },
});

export const cardStyle = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    margin: 10,
    flexDirection: 'column',
    width: '45%',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#777',
    shadowOpacity: 0.16,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  imageContainer: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: 'transparent',
    height: 200,
  },
  image: {
    borderRadius: 12,
    position: 'absolute',
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  titleContainer: {
    backgroundColor: '#fff',
    padding: 7,
    marginTop: -12,
    height: 50,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  title: {
    color: '#000',
    margin: 3,
    fontSize: 20,
  },
});
