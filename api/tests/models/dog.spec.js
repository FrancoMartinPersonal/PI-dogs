const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' });
      });
    });
    describe('id', () => {
      it('should throw an error if id is repetead ', (done) => {
        Dog.create({name:"Tiparraco",id:4})
        Dog.create({name:"Decoramio",id:4})
          .then(() => done(new Error('the id cannot repeat')))
          .catch(() => done());
      });
      // it('should work when its a valid name', () => {
      //   Dog.create({ name: 'Pug' });
      // });
    });
    describe('weight', () => {
      it('should throw an error if weight is null ', (done) => {
        Dog.create({})
        .then(() => done(new Error('It requires a valid weight')))
        .catch(() => done());
      });
      it('should work when its a valid weight', () => {
        Dog.create({ weight: '10-15' });
      });
      // it('should work when its a valid name', () => {
      //   Dog.create({ name: 'Pug' });
      // });
    });
    describe('height', () => {
      it('should throw an error if height is null ', (done) => {
        Dog.create({})
        .then(() => done(new Error('It requires a valid height')))
        .catch(() => done());
      });
      it('should work when its a valid height', () => {
        Dog.create({ height: '10-15' });
      });
      // it('should work when its a valid name', () => {
      //   Dog.create({ name: 'Pug' });
      // });
    });
    describe('id', () => {
      it('should throw an error if id is repetead ', (done) => {
        Dog.create({name:"Tiparraco",id:4})
        Dog.create({name:"Decoramio",id:4})
          .then(() => done(new Error('the id cannot repeat')))
          .catch(() => done());
      });
      // it('should work when its a valid name', () => {
      //   Dog.create({ name: 'Pug' });
      // });
    });
  });
});
