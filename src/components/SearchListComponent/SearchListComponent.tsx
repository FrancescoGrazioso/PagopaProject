import React from 'react';
import {Text, ActivityIndicator, FlatList} from 'react-native';
import { SearchListInterface } from '../../interfaces/searchListInterface';
import Card from '../Card/Card';
import { listStyle } from './style';

const SearchListComponent = (props: SearchListInterface) => {
  return (
    <>
      {props.error && <Text>{props.error}</Text>}
      {props.stargazers && (
        <FlatList
          numColumns={2}
          data={props.stargazers}
          style={listStyle.list}
          onEndReached={() => props.handleSubmit(false)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Card image={item.avatar} title={item.username} />
          )}
        />
      )}
      {props.loading && <ActivityIndicator />}
    </>
  );
};

export default SearchListComponent;
