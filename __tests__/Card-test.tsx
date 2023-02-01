import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Card from '../src/components/Card/Card';

it('renders correctly', () => {
  const image = 'https://example.com/image.png';
  const title = 'Example title';
  const tree = renderer.create(<Card image={image} title={title} />).toJSON();
  
  expect(tree).toMatchSnapshot();
});
