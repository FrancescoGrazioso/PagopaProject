import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {getStargazers} from './src/api/api';
import Card from './src/components/Card';
import {axiosResponse} from './src/interfaces/axiosResponseInterface';
import {listItemInterface} from './src/interfaces/listItemInterface';
import { pageStyle } from './src/style/style';

const MyComponent = () => {
  const [owner, setOwner] = useState('jshanson7');
  const [repo, setRepo] = useState('react-native-swipeable');
  const [pageNumber, setPageNumber] = useState(1);
  const [stargazers, setStargazers] = useState<listItemInterface[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (owner && repo) {
      const response: axiosResponse = await getStargazers(
        owner,
        repo,
        pageNumber,
      );

      if (response.axiosError) {
        setError(response.axiosError);
        setStargazers([]);
      } else {
        setError('');
        setStargazers(stargazers.concat(response.stargazers));
        setPageNumber(pageNumber + 1);
      }
      setLoading(false);
    }
  };

  return (
    <View style={pageStyle.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>GitHub Repo Owner:</Text>
        <TextInput value={owner} onChangeText={text => setOwner(text)} />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>GitHub Repo Name:</Text>
        <TextInput value={repo} onChangeText={text => setRepo(text)} />
      </View>
      <Button
        title="Submit"
        onPress={handleSubmit}
        disabled={!owner || !repo}
      />
      {error && <Text>{error}</Text>}
      {stargazers && (
        <FlatList
        numColumns={2}
        data={stargazers}
        style={pageStyle.list}
        onEndReached={handleSubmit}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          // <View style={[styles.listItem, {width: '50%'}]}>
          //   <Image
          //     source={{
          //       uri: item.avatar,
          //     }}
          //     style={styles.avatar}
          //   />
          //   <Text style={styles.username}>{item.username}</Text>
          // </View>
          <Card image={item.avatar} title={item.username}/>
        )}
      />
      
      )}
      {loading && <ActivityIndicator />}
    </View>
  );
};

export default MyComponent;
