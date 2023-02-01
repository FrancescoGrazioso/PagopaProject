import React from 'react';
import {View, Text, TextInput, Button, Keyboard} from 'react-native';
import renderer from 'react-test-renderer';
import SearchComponent from '../src/components/SearchComponent/SearchComponent';

describe('SearchComponent', () => {
  it('renders correctly', () => {
    const search = renderer
      .create(
        <SearchComponent
          owner=""
          repo=""
          handleOwnerChange={() => {}}
          handleRepoChange={() => {}}
          handleSubmit={() => {}}
        />,
      )
      .toJSON();
    expect(search).toMatchSnapshot();
  });

  it('call handleOwnerChange', () => {
    let owner = '';
    const handleOwnerChange = (value: string) => {
      owner = value;
    };
    const search = renderer.create(
      <SearchComponent
        owner={owner}
        repo=""
        handleOwnerChange={handleOwnerChange}
        handleRepoChange={() => {}}
        handleSubmit={() => {}}
      />,
    );
    const inputs = search.root.findAllByType(TextInput);
    if (inputs.length > 1) {
      inputs[0].props.onChangeText('new-owner');
      expect(owner).toBe('new-owner');
    }
  });

  it('call handleRepoChange', () => {
    let repo = '';
    const handleRepoChange = (value: string) => {
      repo = value;
    };
    const search = renderer.create(
      <SearchComponent
        owner=""
        repo={repo}
        handleOwnerChange={() => {}}
        handleRepoChange={handleRepoChange}
        handleSubmit={() => {}}
      />,
    );
    const inputs = search.root.findAllByType(TextInput);
    if (inputs.length > 1) {
      inputs[1].props.onChangeText('new-repo');
      expect(repo).toBe('new-repo');
    }
  });
  

  it('call handleSubmit', () => {
    let called = false;
    const handleSubmit = () => {
      called = true;
    };
    const search = renderer.create(
      <SearchComponent
        owner="owner"
        repo="repo"
        handleOwnerChange={() => {}}
        handleRepoChange={() => {}}
        handleSubmit={handleSubmit}
      />,
    );
    const button = search.root.findByType(Button);
    button.props.onPress();
    expect(called).toBeTruthy();
  });
});
