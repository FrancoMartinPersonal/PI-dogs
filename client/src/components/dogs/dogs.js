import styled from "styled-components";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDogs,getTemperaments } from "../../actions/actions";
const BodyDiv = styled.div `
height: max-content;
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


    const filteredDogs = () => {
        console.log(temp)
        console.log()
        if(temp !== 'elige un temperamento!...' && temp !== undefined){
             var dogsFiltered = []
              props?.dogs?.data?.map( dog =>{
                if( dog?.temperament !== undefined && dog.temperament?.includes(temp)){
                    dogsFiltered.push(dog)
                }
            })
            console.log(dogsFiltered)
            return dogsFiltered?.slice(current,current +9)
        }else{
            return props?.dogs?.data?.slice(current,current +9)
        }
            
    }


     const nextPage = () => {
         setCurrent( current +9)
     }
     const backPage = () => {
         if(current !== 0){
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
        }else{
            setError("no se encontró el perro especificado");
        }
        // console.log(props)
        // console.log(e)
    }

    useEffect(() => {
        props.getDogs()
        props.getTemperaments()
        
    },[])
    
     console.log(props)
    return (
        <BodyDiv>
           <Form onClick={e => e.preventDefault()}>
             <div>
                <input type="text" value={input} onChange={e => handleChange(e)}/>
                <button onClick={e => onClickSearch(e)}>enviar</button>
             </div>
                <SpanError
                 style={error=="se encontró"?{color:"green"}:{color:'#800'}
                }
                
                 >{error}</SpanError>
           </Form>
                  <select style={{fontFamily:'roboto'}} onChange ={
                      e => {
                          e.preventDefault()
                          console.log(e.target.value)
                          setTemp(e.target.value)
                      }
                  }>
                       <option style={{fontFamily:'roboto'}} 
                             >elige un temperamento!...</option>
                                
                        )

                    {props.temps?.data?.map(temp =>{
                        return(


                            <option style={{fontFamily:'roboto'}}
                              key={temp.id} value={temp.name}>{temp.name}</option>
                                
                        )
                    })}
            
                </select>
            <ul>
                    
           {filteredDogs()?.map( dog =>{
               return (
                   <DogCard  key={dog?.id}>
                      
                        <DogImg imgApi={dog?.image?.url} />

                      
                       <DogTextDiv>
                       <DogText style={{color:'#fff000'}}>
                        Name
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