import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Home';

it('renders correctly', () => {
  const tree = renderer
    .create(<Quote page="http://localhost:3000/quote">Home</Quote>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
