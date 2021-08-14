import styled from "styled-components";
import {connect} from 'react-redux'
import { Loading } from "../loading";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDogDetails,getDogsCreated } from "../../actions/actions";
import dogImg from "../../img/perro-silueta.jpg"
const BodyDiv = styled.div `
height:100%;
width: 100%;
margin-top: 80px;
position: absolute;
background: radial-gradient(circle, rgba(101,31,98,0.2518662464985995) 0%, rgba(135,128,19,0.2526505602240896) 100%);
`
const DogCard = styled.div `

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 500px;
height: fit-content;
border: 5px solid white;
border-radius: 2%;
margin: 100px auto;

background: rgb(15,139,121);
background: linear-gradient(332deg, rgba(15,139,121,1) 0%, rgba(58,77,168,1) 48%, rgba(15,139,121,1) 100%);

`
const DogTextDiv = styled.div `
margin: 35px 15px;
width: 75%;

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
margin: 35px 15px;
`
export  function DogDetails(params){
    
    
    const [loading,setLoading] =useState(true)
    
     useEffect(()=>{
       
        window.scroll(0,0)
        params.getDogDetails(params.id).then(()=>{
       
            setLoading(false)
        })
    return(()=>{
        params.getDogDetails(params.id)
        params.getDogsCreated()
        document.title = "Dogs! - "
    })
   
    },[])
    useEffect(()=>{
       
        var dog =   params?.dogDetail?.data?.find( e => e)
            document.title = "Dogs! - "+dog?.name
       
   return(()=>{
     
       document.title = "Dogs! - "
   })
  
},[params?.dogDetail?.data])
console.log(params)
return(
    
    <BodyDiv>
        {loading&&<Loading/>} 
       {params?.dogDetail?.data?.map((dog)=>{
           return(
            <DogCard  key={dog?.id}>
                      
            <DogImg imgApi={dog?.image?.url||dogImg } />

          
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
            <DogText  style={{color:'#e3882c'}}>
            Height
            </DogText>
            <DogText>
            {dog?.height} cm 
            </DogText>
            <DogText  style={{color:'#a0a0a0'}}>
            Weight 
            </DogText>
            <DogText>
            {dog?.weight} kg
            </DogText>
            <DogText  style={{color:'#addd'}}>
            life span
            </DogText>
            <DogText>
            {dog?.life_span}
            </DogText>
           
           
           </DogTextDiv>
   
       </DogCard>
           )
       })}
        
        </BodyDiv>
)

}
function mapStateToProps(state){
return {dogDetail: state.dogDetailLoaded }
}
export default connect(mapStateToProps,{getDogDetails,getDogsCreated})(DogDetails)