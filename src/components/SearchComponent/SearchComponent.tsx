import React from 'react';
import {View, Text, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import {SearchInterface} from '../../interfaces/searchInterface';
import {searchStyle} from './style';

/**

SearchComponent - A component that displays the inputs to search stargazers.
@props {SearchInterface} props - An interface that includes all the props for this component.
@returns {JSX.Element} - A component that displays the stargazers for a Github repository, error messages, and a loading indicator.
*/
const SearchComponent = (props: SearchInterface) => {
  return (
    <>
      {/* Container for holding the two input fields */}
      <View style={searchStyle.inputContainer}>
        {/* Wrapper for the first input field */}
        <View style={searchStyle.inputWrapper}>
          <TextInput
            placeholder="Github repo owner"
            value={props.owner}
            onChangeText={text => props.handleOwnerChange(text)}
            style={searchStyle.input}
          />
        </View>
        {/* Wrapper for the second input field */}
        <View style={searchStyle.inputWrapper}>
          <TextInput
            placeholder="Github repo name"
            value={props.repo}
            onChangeText={text => props.handleRepoChange(text)}
            style={searchStyle.input}
          />
        </View>
      </View>
      {/* Submit button */}
      <TouchableOpacity
        disabled={!props.owner || !props.repo}
        onPress={() => {
          Keyboard.dismiss();
          props.handleSubmit(true);
        }}
        style={[searchStyle.button, (!props.owner || !props.repo) ? {opacity: 0.5} : {}]}>
        <Text style={searchStyle.text}>Search</Text>
      </TouchableOpacity>
    </>
  );
};

export default SearchComponent;
