import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Continent from '../components/Continents';

const mockStore = configureMockStore();

it('test continent category', () => {
  const store = mockStore({});
  render(
    <Provider store={store}>
      <Continent />
    </Provider>,
  );
  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeTruthy();
});

it('test options of select element', () => {
  const store = mockStore({});
  render(
    <Provider store={store}>
      <Continent />
    </Provider>,
  );
  expect(screen.getByRole('option', { name: 'Asia' })).toBeTruthy();
  expect(screen.getByRole('option', { name: 'Africa' })).toBeTruthy();
  expect(screen.getByRole('option', { name: 'Americas' })).toBeTruthy();
  expect(screen.getByRole('option', { name: 'Europe' })).toBeTruthy();
  expect(screen.getByRole('option', { name: 'Oceania' })).toBeTruthy();
});
