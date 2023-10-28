import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Contents from '../components/Contents';

const mockStore = configureMockStore([]);

const mockContents = () => (
  <BrowserRouter>
    <Contents />
  </BrowserRouter>
);

test('test content list', () => {
  const store = mockStore({
    countries: {
      regionalCountries: [
        {
          name: 'Country 1',
          area: 100,
          cca3: 'ABC',
          flags: 'flag-url',
          official: 'Official Name',
        },
      ],
    },
  });
  render(
    <Provider store={store}>
      {mockContents()}
    </Provider>,
  );
  expect(screen.getByRole('list')).toBeTruthy();
});

test('test content list items', () => {
  const store = mockStore({
    countries: {
      regionalCountries: [
        {
          name: 'Country 1',
          area: 100,
          cca3: 'ABC',
          flags: 'flag-url',
          official: 'Official Name',
        },
        {
          name: 'Country 2',
          area: 200,
          cca3: 'ABCD',
          flags: 'flag-url 2',
          official: 'Official Name 2',
        },
      ],
    },
  });
  render(
    <Provider store={store}>
      {mockContents()}
    </Provider>,
  );
  expect(screen.getAllByRole('listitem')).toBeTruthy();
  expect(screen.getAllByRole('listitem').length).toBe(2);
});

test('test content list items', () => {
  const store = mockStore({
    countries: {
      regionalCountries: [
        {
          name: 'Country 1',
          area: 100,
          cca3: 'ABC',
          flags: 'flag-url',
          official: 'Official Name',
        },
        {
          name: 'Country 2',
          area: 200,
          cca3: 'ABCD',
          flags: 'flag-url 2',
          official: 'Official Name 2',
        },
      ],
    },
  });
  render(
    <Provider store={store}>
      {mockContents()}
    </Provider>,
  );
  expect(screen.getAllByRole('link')).toBeTruthy();
  expect(screen.getAllByRole('link').length).toBe(2);
});
