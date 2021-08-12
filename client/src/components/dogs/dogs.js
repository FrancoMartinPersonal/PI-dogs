import {connect} from 'react-redux'
import { Loading } from "../loading";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDogs,getTemperaments,getDogsCreated } from "../../actions/actions";
import dogImg from "../../img/dog.png"
import styled from "styled-components";
const BodyDiv = styled.div `
height: fit-content;
width: 100%;
margin-top: 80px;
position: absolute;
background: radial-gradient(circle, rgba(101,31,98,0.2518662464985995) 0%, rgba(135,128,19,0.2526505602240896) 100%);
`
const DogCard = styled.div `

display: flex;
justify-content: space-around;
align-items: center;
width: 800px;
height: 300px;
border: 5px solid white;
border-radius: 2%;
margin: 100px auto;

background: rgb(139,15,78);
background: linear-gradient(332deg, rgba(139,15,78,1) 0%, rgba(168,58,58,1) 48%, rgba(139,15,78,1) 100%);
cursor:pointer;
&:hover{
    background: rgba(160,29,98,1);
background: linear-gradient(332deg, rgba(160,29,98,1) 0%, rgba(188,68,78,1) 48%, rgba(160,29,98,1) 100%);
}
`
const DogTextDiv = styled.div `
margin: 10px 15px;
width: 40%;

`

const DogText = styled.h6 `
font-family:'roboto',sans-serif ;
color: #fff;
background-color: #0003;
font-size: 1em;
padding: 10px 16px;

`
const DogImg = styled.div `
background-image: url(${props => props.imgApi});
background-size:cover;
background-origin:border-box;
background-repeat: no-repeat;
width:220px;
height: 170px;
border: 4px solid white;
border-radius: 40px;
margin: 10px 15px;
`

const PagesButton = styled.button`
margin: 10px 20px;
padding:15px 20px;
color:white;
background: #35095a;
border-style: none;
border:3px solid white;
cursor:pointer;

`
const Form = styled.form `
margin: 40px 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`
const SpanError = styled.span `
font-family: 'Robot', 'Times New Roman', Times, serif;
`
const DogCardCreated = styled.div `

display: flex;
justify-content: space-around;
align-items: center;
width: 800px;
height: 300px;
border: 5px solid white;
border-radius: 2%;
margin: 100px auto;

background: rgb(129,122,16);
background: linear-gradient(332deg, rgba(129,122,16,1) 0%, rgba(173,153,17,1) 48%, rgba(129,122,16,1) 100%);
cursor:pointer;
&:hover{
    background: rgb(129,122,16);
background: linear-gradient(332deg, rgba(150,145,33,1) 0%, rgba(213,183,47,1) 48%,  rgba(150,145,33,1)100%);
}
`
const DogTextDivCreated = styled.div `
margin: 10px 15px;
width: 40%;

`

const DogTextCreated = styled.h6 `
font-family:'roboto',sans-serif ;
color: #fff;
background-color: #0003;
font-size: 1em;
padding: 10px 16px;

`
const DogImgCreated = styled.div `
background-image: url(${props => props.imgApi});
background-size:cover;
background-origin:border-box;
background-repeat: no-repeat;
width:220px;
height: 170px;
border: 4px solid white;
border-radius: 40px;
margin: 10px 15px;
`
var dogFinded = []
export  function Dogs(props){

    const [current,setCurrent] = useState(0)
    const [input,setInput] = useState("")
    const [error,setError] = useState()
    const [temp,setTemp] = useState()
    const [loading,setLoading] =useState(true)
    const [sort, setSort] = useState()
    const [kindDog,setKindDog] = useState()
    
    const dogCreated = () => {
        console.log(dogFinded)
           
        if(Object.keys(dogFinded).length === 0 ){

            var dogCreatedMap = props?.dogsCreated?.data?.map(dog =>{
                var DogTemperaments = []
                dog.Temperaments.forEach(temperament =>{
                    DogTemperaments.push(temperament.name)
                })
                return  {
                    id:dog.id,
                    name:dog.name,
                    temperament:DogTemperaments.join(", ")
                }
            })    
            
            return dogCreatedMap
        }else{
          
                
            
            return dogCreatedMap
        }
    }
    const allDogs=() =>{
        var AllDogs = []
        props?.dogs?.data?.forEach(dog => AllDogs.push(dog))
        dogCreated()?.forEach(dog => AllDogs.push(dog))
        return AllDogs
     }
     const sorteredDogs =() => {
        //  console.log(allDogs())
         if(sort=="A-Z" || sort== undefined){
             return allDogs()?.sort((a, b) => {
                 let fa = a.name.toLowerCase(),
                     fb = b.name.toLowerCase();
             
                 if (fa < fb) {
                     return -1;
                 }
                 if (fa > fb) {
                     return 1;
                 }
                 return 0;
             });
         }else if(sort=="Z-A"){
             
             return  allDogs()?.sort((a, b) => {
                 let fa = a.name.toLowerCase(),
                     fb = b.name.toLowerCase();
             
                 if (fa > fb) {
                     return -1;
                 }
                 if (fa < fb) {
                     return 1;
                 }
                 return 0;
             });
         }
     }

    const filteredDogs = () => {
        // console.log(dogCreated())
        // console.log(props?.dogs?.data)
        
        var dogsFilteredByKind = []
       if(kindDog!=="todos" && kindDog !== undefined){
        sorteredDogs()?.map( dog =>{
           if( kindDog=="reales" && dog.image){
               dogsFilteredByKind.push(dog)
           }else if(kindDog=="creados" && !dog.image && dog.id.length >3){
            dogsFilteredByKind.push(dog)
        }
       })
       }else{
        dogsFilteredByKind = sorteredDogs()  
        }


        if(temp !== 'todos' && temp !== undefined){
           var dogFilteredByTemp= []
            dogsFilteredByKind?.map( dog =>{
                if( dog?.temperament !== undefined && dog.temperament?.includes(temp)){
                    dogFilteredByTemp.push(dog)
                }
            })
            console.log(dogFilteredByTemp)
            return dogFilteredByTemp?.slice(current,current +9)
        }else{
            return dogsFilteredByKind?.slice(current,current +9)
        }
        
    }
      


     const nextPage = () => {
         setCurrent( current +9)
         window.scrollY = 0
         console.log()
     }
     const backPage = () => {
         if(current !== 0){
            window.scrollY = 0
            setCurrent( current -9)
         }
        
    }
    function capitalizarPrimeraLetra(str) {
        var arrayString = []
        var	arrayWords = str.split(" ")
        arrayWords.forEach(element => {
           
            arrayString.push(element.charAt(0).toUpperCase() + element.slice(1))  
            })
            return arrayString.join(" ")
          
        }
    const handleChange = (e) =>{
       
            console.log(capitalizarPrimeraLetra(e.target.value))
        setInput(capitalizarPrimeraLetra(e.target.value))
        console.log("↑↑set input")
        console.log(input)
        console.log("↑↑input")
    }

      const  onClickSearch = async (e) =>{
         
            if(props?.dogs?.data.length < 2){

                await props.getDogs()
                setError("pulsa enviar otra vez para buscar");
            }else{
                e.preventDefault()
                

                    dogFinded = props?.dogs?.data.find(dog =>{
                    return dog.name == capitalizarPrimeraLetra(input)
                    })
                    console.log(props?.dogs?.data)
                    console.log(dogFinded)
                    if(dogFinded == undefined){
                     dogFinded = props?.dogsCreated?.data.find(dog =>{
                        return dog.name == capitalizarPrimeraLetra(input)
                        })  
                      
                        console.log(props?.dogsCreated?.data)
                        console.log(dogFinded)}
                if(dogFinded !== undefined){
                   
                      console.log(capitalizarPrimeraLetra(dogFinded.name))
                    props.getDogs(capitalizarPrimeraLetra(dogFinded.name))
                    setError("se encontró")
                   
                }else if(props?.dogs?.data.length < 2){
                    setError("recargando");
                   
                }else{
                    setError("no se ha encontrado el perro especificado"); 
                }

            }
         

        
            
       
        // console.log(props)
        // console.log(e)
    }
    

    useEffect(() => {
        document.title = "Dogs! - Todos los perros"
       
       
        props.getDogsCreated()
    
        props.getDogs().then((e)=>{
            setLoading(false)
           
        })
        
        props.getTemperaments()
      
       return (()=> {
        props.getDogs()
        props.getTemperaments()
       })
    },[])
  
    
    
     
    return (
        <BodyDiv>
               <PagesButton
                        onClick={backPage}>
                            anterior</PagesButton>
                       <PagesButton
                       onClick={nextPage}
                       >siguiente</PagesButton>
           <Form onClick={e => e.preventDefault()}>
             <div>
                <input type="text" value={input} onChange={e => handleChange(e)}/>
                <button onClick={e => onClickSearch(e)}>enviar</button>
             </div>
                <SpanError
                 style={error=="se encontró"?{color:"green"}:{color:'#800'}
                }>{error}</SpanError>

           </Form>
            {/*ordenar por temperamento*/}
                  <select style={{fontFamily:'roboto'}} onChange ={  e => {
                          e.preventDefault()
                          console.log(e.target.value)
                          setTemp(e.target.value)}}>

                       <option style={{fontFamily:'roboto'}} 
                        >todos</option>
                             
                   
                    {props.temps?.data?.map(temp =>{
                        return(


                           <option style={{fontFamily:'roboto'}}
                              key={temp.id} value={temp.name}>{temp.name}</option>
                               
                        )})}
                </select>
            {/*ordenar por abecedario*/}
                <select onChange= {e => {
                    e.preventDefault()
                    console.log(e.target.value)
                    setSort(e.target.value)
                }}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
              {/*ordenar por creacion, real o todos*/}
              <select onChange= {e =>{
                  e.preventDefault()
                  console.log(e.target.value)
                  setKindDog(e.target.value)
                  
              }}>
                  <option value="todos">todos</option>
                  <option value="creados">creados</option>
                  <option value="reales">reales</option>
              </select>
            <ul>
                   {loading&&<Loading/>} 
           {filteredDogs()?.map( dog =>{
               if(dog.image){
                return (
                    <Link to={`/dogs/${dog?.id}` } key={dog?.id} style={{textDecoration:'none'}}> 
                       <DogCard  key={dog?.id}>
                          
                            <DogImg imgApi={dog?.image?.url||dogImg} />
    
                          
                           <DogTextDiv>
                           <DogText style={{color:'#fff000'}}>
                            Breed
                            </DogText>
                            <DogText>
                            {dog?.name}
                            </DogText>
                            <DogText  style={{color:'#2fd020'}}>
                            Temperament
                            </DogText>
                            <DogText>
                            {dog?.temperament}
                            </DogText>
                           
                           </DogTextDiv>
                   
                       </DogCard>
                       </Link>
                   )
               }else if (dog.id.length >10){
                return (
                    <Link to={`/dogs/${dog?.id}` } key={dog?.id} style={{textDecoration:'none'}}> 
                       <DogCardCreated  key={dog?.id}>
                          <DogImgCreated imgApi={dogImg}></DogImgCreated>
                           
    
                          
                           <DogTextDivCreated>
                           <DogTextCreated style={{color:'#fff000'}}>
                            Breed
                            </DogTextCreated>
                            <DogTextCreated>
                            {dog?.name}
                            </DogTextCreated>
                            <DogTextCreated  style={{color:'#2fd020'}}>
                            Temperament
                            </DogTextCreated>
                            <DogTextCreated>
                            {dog?.temperament}
                            </DogTextCreated>
                           
                           </DogTextDivCreated>
                   
                       </DogCardCreated>
                       </Link>
                   )

               }
               
           })}
           </ul>
           <PagesButton
                        onClick={backPage}>
                            anterior</PagesButton>
                       <PagesButton
                       onClick={nextPage}
                       >siguiente</PagesButton>
            </BodyDiv>
)
}
function mapStateToProps(state){
    return {
        dogs : state.dogsLoaded,
        temps : state.tempsLoaded,
        dogsCreated: state.dogsCreated
    }
}
export default connect(mapStateToProps,{getDogs,getTemperaments,getDogsCreated})(Dogs)