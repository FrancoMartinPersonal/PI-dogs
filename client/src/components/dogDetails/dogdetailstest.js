// import React from 'react'
// import  {configure, mount} from 'enzyme'
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
// import  configureStore from 'redux-mock-store'
// import DogDetails from './DogDetails'
// import thunk from 'redux-thunk'

// configure({adapter: new Adapter()});
// const middlewares = [thunk]
// let wrapper;
// let store;
// describe('Dog Details', () => {
//     describe('<DogDetails/>', () =>{


//         const match = {params: {id: 1}, isExact: true, path: "/dogs/:id", url: "/dogs/1"};
//         const  dogs =[
//             {
//         name:"Vizsla",
//         image:{
//             url:"https://www.loveyourdog.com/wp-content/uploads/2021/02/Vizsla-Dog-at-Sunrise.jpg",
//             id:1
//         },
//         life_span:"15 years",
//         temperament:"Active, Vocal, Brave",
//         id:1,
//         height:"12 - 15",
//         weight:"13 - 16"
//         },
//         {name:"Retonico",
//         image:{
//             url:"https://www.loveyourdog.com/wp-content/uploads/2021/02/Vizsla-Dog-at-Sunrise.jpg",
//             id:1
//         },
//         life_span:"15 years",
//         temperament:"Active, Vocal, Brave",
//         id:2,
//         height:"12 - 15",
//         weight:"13 - 16"}
//         ]
//         beforeEach(() => {
//             const mockStore = configureStore(middlewares);
//             store = mockStore(dogs)
//             wrapper = mount(<DogDetails params ={match} store={store}/>)
//             store.clearActions();
//         })
//         it('deberia recibir por props el objeto ´match´, utilizar el id de `params` para filtrar el ´todo´ que coincida con ese ´id´ y renderizar los detalles de ese todo',()=> {
//             const dog = dogs[0];
//             expect(wrapper.contains(dog.name)).toEqual(true)
//       expect(wrapper.contains(dog.image.url)).toEqual(true)
//       expect(wrapper.contains(dog.life_span)).toEqual(true)
//       expect(wrapper.contains(dog.temperament)).toEqual(true)
//       expect(wrapper.contains(dog.height)).toEqual(true)
//       expect(wrapper.contains(dog.weight)).toEqual(true)
//         })
//     })

// })