import React from 'react';
//import Enzyme, { mount } from 'enzyme';
import { render, screen } from '@testing-library/react';
import App from './App';
//import Quotes from './Components/Quotes';
//import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
