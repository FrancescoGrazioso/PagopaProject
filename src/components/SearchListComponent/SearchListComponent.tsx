import React from 'react';
import {Text, ActivityIndicator, FlatList} from 'react-native';
import {SearchListInterface} from '../../interfaces/searchListInterface';
import Card from '../Card/Card';
import {listStyle} from './style';

/**

SearchListComponent - A component that displays the stargazers for a Github repository in a grid layout using a FlatList.
@props {SearchListInterface} props - An interface that includes all the props for this component.
@returns {JSX.Element} - A component that displays the stargazers for a Github repository, error messages, and a loading indicator.
*/
const SearchListComponent = (props: SearchListInterface) => {
  // conditional render error message if error is truthy
  return (
    <>
      {props.error && <Text>{props.error}</Text>}
      {props.stargazers && (
        // render the stargazers using a FlatList component
        <FlatList
          numColumns={2}
          data={props.stargazers}
          style={listStyle.list}
          onEndReached={() => props.handleSubmit(false)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            // render each stargazer as a Card component
            <Card image={item.avatar} title={item.username} />
          )}
        />
      )}
      {props.loading && <ActivityIndicator />}
    </>
  );
};

export default SearchListComponent;
