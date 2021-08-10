import styled from "styled-components";
import {connect} from 'react-redux'
import { Loading } from "../loading";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDogs,getTemperaments } from "../../actions/actions";
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

export  function Dogs(props){

    const [current,setCurrent] = useState(0)
    const [input,setInput] = useState("")
    const [error,setError] = useState()
    const [temp,setTemp] = useState()
    const [loading,setLoading] =useState(true)
    const [sort, setSort] = useState()
    const filteredDogs = () => {
        
        const sorteredDogs =() => {
            if(sort=="A-Z" || sort== undefined){
                return props?.dogs?.data?.sort((a, b) => {
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
                
                return  props?.dogs?.data?.sort((a, b) => {
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
        
        if(temp !== 'todos' && temp !== undefined){
             var dogsFiltered = []
             sorteredDogs()?.map( dog =>{
                if( dog?.temperament !== undefined && dog.temperament?.includes(temp)){
                    dogsFiltered.push(dog)
                }
            })
            console.log(dogsFiltered)
            return dogsFiltered?.slice(current,current +9)
        }else{
            return sorteredDogs()?.slice(current,current +9)
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

    const handleChange = (e) =>{
        setInput(e.target.value)
        
    }

    const onClickSearch = (e) =>{
        e.preventDefault()
        function capitalizarPrimeraLetra(str) {
            var arrayString = []
            var	arrayWords = str.split(" ")
                    arrayWords.forEach(element => {
               
                  arrayString.push(element.charAt(0).toUpperCase() + element.slice(1))  
                })
                return arrayString.join(" ")
              
            }
           var dogFinded = props?.dogs?.data?.find(dog =>{
            return dog.name == capitalizarPrimeraLetra(input)
            })
            console.log(dogFinded)
        if(dogFinded !== undefined){
           
              console.log(capitalizarPrimeraLetra(input))
            props.getDogs(capitalizarPrimeraLetra(input))
            setError("se encontró")
            setInput("")
        }else{
            setError("no se encontró el perro especificado");
        }
        // console.log(props)
        // console.log(e)
    }
    

    useEffect(() => {
        document.title = "Dogs! - Todos los perros"
        console.log(window)
        props.getDogs().then(()=>{
            setLoading(false)
        })
        
        props.getTemperaments()
       console.log(sort)
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
                <select onChange= {e => {
                    e.preventDefault()
                    console.log(e.target.value)
                    setSort(e.target.value)
                }}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
             
            <ul>
                   {loading&&<Loading/>} 
           {filteredDogs()?.map( dog =>{
               return (
                <Link to={`/dogs/${dog?.id}` } key={dog?.id} style={{textDecoration:'none'}}> 
                   <DogCard  key={dog?.id}>
                      
                        <DogImg imgApi={dog?.image?.url} />

                      
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
        temps : state.tempsLoaded
    }
}
export default connect(mapStateToProps,{getDogs,getTemperaments})(Dogs)