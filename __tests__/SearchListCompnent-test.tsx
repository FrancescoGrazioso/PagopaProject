import React from 'react';
import { FlatList } from 'react-native';
import renderer from 'react-test-renderer';
import SearchListComponent from '../src/components/SearchListComponent/SearchListComponent';

describe('SearchListComponent', () => {
  it('renders correctly with stargazers', () => {
    const stargazers = [
      {
        avatar: 'https://avatar.com/1.png',
        username: 'user1',
      },
      {
        avatar: 'https://avatar.com/2.png',
        username: 'user2',
      },
    ];
    const handleSubmit = jest.fn();
    const tree = renderer
      .create(
        <SearchListComponent
          stargazers={stargazers}
          handleSubmit={handleSubmit}
          error={''}
          loading={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with error', () => {
    const error = 'An error has occurred';
    const handleSubmit = jest.fn();
    const tree = renderer
      .create(<SearchListComponent error={error} stargazers={[]}
        handleSubmit={handleSubmit}
        loading={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with loading', () => {
    const handleSubmit = jest.fn();
    const tree = renderer
      .create(<SearchListComponent stargazers={[]}
        handleSubmit={handleSubmit}
        error={''}
        loading={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls handleSubmit when end of list is reached', () => {
    const handleSubmit = jest.fn();
    const tree = renderer.create(
      <SearchListComponent 
        stargazers={[]}
        handleSubmit={handleSubmit}
        error={''}
        loading={false}
      />
    );

    tree.root.findByType(FlatList).props.onEndReached();

    expect(handleSubmit).toHaveBeenCalled();
  });
  
});
