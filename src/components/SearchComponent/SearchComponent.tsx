import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {SearchInterface} from '../../interfaces/searchInterface';

const SearchComponent = (props: SearchInterface) => {
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>GitHub Repo Owner:</Text>
        <TextInput
          value={props.owner}
          onChangeText={text => props.handleOwnerChange(text)}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>GitHub Repo Name:</Text>
        <TextInput
          value={props.repo}
          onChangeText={text => props.handleRepoChange(text)}
        />
      </View>
      <Button
        title="Submit"
        onPress={() => props.handleSubmit()}
        disabled={!props.owner || !props.repo}
      />
    </>
  );
};

export default SearchComponent;
