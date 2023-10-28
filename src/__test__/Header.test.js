import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

test('renders the Header component with HOME title', () => {
  const { getByText, getByAltText } = render(
    <MemoryRouter initialEntries={['/']}>
      <Header />
    </MemoryRouter>,
  );

  expect(getByText('HOME')).toBeTruthy();
  expect(getByAltText('home')).toBeTruthy();
});

test('renders the Header component with DETAILS title', () => {
  const { getByText, getByAltText } = render(
    <MemoryRouter initialEntries={['/details']}>
      <Header />
    </MemoryRouter>,
  );

  expect(getByText('DETAILS')).toBeTruthy();
  expect(getByAltText('home')).toBeTruthy();
});
