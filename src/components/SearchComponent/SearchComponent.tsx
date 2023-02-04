import React from 'react';
import {View, Text, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import {SearchInterface} from '../../interfaces/searchInterface';
import {searchStyle} from './style';

const SearchComponent = (props: SearchInterface) => {
  return (
    <>
      <View style={searchStyle.inputContainer}>
        <View style={searchStyle.inputWrapper}>
          <TextInput
            placeholder="Github repo owner"
            value={props.owner}
            onChangeText={text => props.handleOwnerChange(text)}
            style={searchStyle.input}
          />
        </View>
        <View style={searchStyle.inputWrapper}>
          <TextInput
            placeholder="Github repo name"
            value={props.repo}
            onChangeText={text => props.handleRepoChange(text)}
            style={searchStyle.input}
          />
        </View>
      </View>
      <TouchableOpacity
        disabled={!props.owner || !props.repo}
        onPress={() => {
          Keyboard.dismiss();
          props.handleSubmit(true);
        }}
        style={searchStyle.button}>
        <Text style={searchStyle.text}>Search</Text>
      </TouchableOpacity>
    </>
  );
};

export default SearchComponent;
