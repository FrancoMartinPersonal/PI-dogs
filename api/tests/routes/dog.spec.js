/* eslint-disable import/no-extraneous-dependencies */
const  expect  = require('chai').expect;
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog ,Temperament, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name:'Pug',
  height:'10 - 28',
  weight:' 15 - 24',
  age_span:'12',
  id:'d3o49g-vow2e9-s281a3-17d1fG'
};



describe('Dog routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
})

  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
    describe('GET /temperament', () => {
      it('should return 200',async  () =>{
      
        await agent.get('/temperament').expect(200)
       
       
         
     
      })
        it('should return temperaments', async() =>{
        
          const  DBTemperaments = await Temperament.findAll()
         
        expect(DBTemperaments[0]).to.have.property("name")
        })})
      
        
       
  describe('GET /dog', () => {
    it('should get 200',async () =>{
     await  agent.get('/dog').expect(200)
      }
    );
  });
  
  describe('POST /dog', () => {
  it('should return error post 500', () =>
    agent.post('/dog').send({
    
        name:"sabrosito",
        weight:"12 - 15",
        height:"5 - 15",
        age_span:"5",
       temperament:["1s47e5fe-eg8gEox-PlsW2Lx56","34s5dA-ñBlEq3-Fz3P6sd"]
        
    
    }).expect(500)
    
  );
  it('should return  post 200', async () =>{
    const  DBTemperaments = await Temperament.findAll()
   
  agent.post('/dog').send({
  
      name:"sabrosito",
      weight:"12 - 15",
      height:"5 - 15",
      age_span:"5",
     temperament:[DBTemperaments[0],DBTemperaments[1]]
  }).expect(200)
  
}
);
  });
;

