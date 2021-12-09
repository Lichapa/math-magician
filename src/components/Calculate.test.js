import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
// import { PropTypes } from 'prop-types';
import Calculator from './Calculator';

it('Renders calculator', () => {
  const result = renderer.create(<Calculator />).toJSON();
  expect(result).toMatchSnapshot();
});

test('calls onClick prop when clicked', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText(/AC/i));
  expect(screen.getByTestId('in')).toBeTruthy();
});

afterEach(cleanup);
