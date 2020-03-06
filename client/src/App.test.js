import React from 'react';
import { render, getAllByTestId } from '@testing-library/react';
import App from './App';
import Fib from './Fib';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders index input bar', () => {
  const { getByTestId } = render(<Fib />);
  const indexInput = getByTestId('index-input');
  expect(indexInput).toBeInTheDocument();
});
