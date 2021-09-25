import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import App from './App';
import Nav from './components/nav'
import Main from './components/main/main'
import DogsDetails from './components/dogDetails/DogDetails'
import Dogs from './components/dogs/dogs'

configure({adapter: new Adapter()});

describe('App', () => {
  let store
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  })
  
  describe('El componente Nav debe renderizar en todas las rutas.', () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(Nav)).toHaveLength(1);
    });
    it('Debería renderizarse en la ruta "/otraRuta"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/otraRuta' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(Nav)).toHaveLength(1);
    });
    it('El componente Home debe renderizar en la ruta / (Sólo en la ruta "/")', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
  
        expect(wrapper.find(Main)).toHaveLength(1);
        expect(wrapper.find(Nav)).toHaveLength(1);
        expect(wrapper.find(DogsDetails)).toHaveLength(0);
    });
    it('El componente DogsDetails debe renderizar en la ruta /Dogs/1 - este test no pasará si Otro componente (que no sea Nav) se renderiza en esta ruta.', () => {
      const container = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[  '/dogs/1' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
      expect(container.find(Nav)).toHaveLength(1);
      expect(container.find(Main)).toHaveLength(0);
      expect(container.find(DogsDetails)).toHaveLength(1);
    })
    it('El componente Dogs debe renderizar en la ruta /Dogs - este test no pasará si Otro componente (que no sea Dogs como dogDetails) se renderiza en esta ruta.', () => {
      const container = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[  '/dogs' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
      expect(container.find(Nav)).toHaveLength(1);
      expect(container.find(Main)).toHaveLength(0);
      expect(container.find(Dogs)).toHaveLength(1);
      expect(container.find(DogsDetails)).toHaveLength(0);
    })
  });

  
})