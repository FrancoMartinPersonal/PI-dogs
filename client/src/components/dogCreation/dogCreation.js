import styled, { css } from "styled-components"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getTemperaments,postDogCreated } from "../../actions/actions"
import DogImg from '../../img/dog-bulding.jpg'
import DogDetails from "../dogDetails/DogDetails"
const BodyDiv = styled.div `
font-size: 2rem;
letter-spacing: 1px;
margin-top: -10px;
top:80px;
color:#222;
position: relative;

/* ${({ theme }) => css`
    background: ${theme.colour.background};
  `} */

`
const TextDiv = styled.div `
margin: 10px 100px;
color:#222;
@media (max-width: 450px) {
    margin: 10px;
   
  }
`
const TitleLogo = styled.h1 `
/* align-self: center; */

//margin-left: 10px;
font-size: 1em;
padding:0 10px;
${({ theme }) => css`
    color: ${theme.colour.secondary.main};
  `}
//text-shadow:2px 2px 2px black;

letter-spacing: 3px;
 &:hover{
    color:#fbfb00;
 }
 
 `
const DivImagotipo = styled.div `


margin-left: 4%;
display:flex;
width: 100%;
 
flex-direction: row;

justify-content: center;
@media (max-width: 450px) {
    flex-direction: column;
   
  }

//background-color: #0001;
/* background:linear-gradient(71deg, #47209755  0%, #87208755 50%, #47209755 100%); */

`
const CardDiv = styled.div `
width:max-content;

display:flex;
flex-wrap: wrap;
background: #2fbbd5;


margin:auto;
border-radius: 10px;
@media (max-width: 1500px) {
    flex-direction: column;
    max-height: fit-content;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    max-width: 360px;
  }
`
const DogImage = styled.div `
background-image: url(${DogImg});
width:550px;
height: 850px;
background-position:center;
background-size:cover;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 10px;
@media (max-width: 450px) {
    flex-direction: column;
    width: 360px;
    max-height: 550px;
  }
`

const SendForm = styled.form `
max-width:550px;
margin:auto;


background:rgba(213,153,47,1);

//padding: 10px;
border-bottom:5px solid white;
border-top:5px solid white;

display: flex;
flex-direction: row;
flex-wrap:wrap;
justify-content: center;
transition:flex-wrap 1s;

@media (max-width: 450px) {
    flex-direction: column;
    max-width: 360px;
  }
`

const DivInfo = styled.div`
margin: 20px 10px;
`
const DivForm = styled.div `
display: flex;
flex-direction: column;
align-items: center;

justify-content: center;

`
const MaxMinDiv = styled.div`
display:flex;
justify-content: space-evenly;
flex-direction: row;
padding: 10px ;
@media (max-width: 450px) {
    flex-direction: column;
   
  }

`
const InputForm = styled.input`
border-style:none;
background: #444;
color: white;
border-bottom:4px solid white;
font-family: Georgia, 'Times New Roman', Times, serif;
padding: 5px;
margin:0 15px;
outline: none;
transition-property:all;
border-radius:10px;
transition-duration: .25s;



&:focus {
    border-bottom:4px solid #626; 
}

`
const Select = styled.select`
color:white;
text-align: center;
align-self: center;
min-width: 100px;
${({ theme }) => css`
    background: ${theme.colour.secondary.light};
  `} 

padding:5px;
height: fit-content;
font-size: .5em;
margin:5px 5px;
outline: none;
cursor:pointer;
border:none;
border-top:4px solid white;
`
const LabelForm = styled.label`
font-family: 'roboto';
font-size: 0.7em;
padding: 5px;
font-size: ${state => state.fontSize};
`
const ButtonSend = styled.button `
margin: 10px 20px;
padding:5px 10px;
color:white;
${({ theme }) => css`
    background: ${theme.colour.primary.main};
  `}
border-style: none;
//border:3px solid white;
cursor:pointer;

`
const DivStyleTemp = styled.div `

width:200px;
margin: 20px;
border: 6px solid white;
display:flex ;
padding:0 30px;
flex-direction: row;
text-align: center;
height: 2em;
align-items: center;
border-radius: 10px;
justify-content: space-between;
background: wheat;
`
const PErrorForm = styled.p `
font-family: 'roboto';
width: max-content;
font-size: 0.5em;
text-align: center;
color:#911;
padding: 5px ;
`
var tempsId =[]
export function validate(input){
    let errores ={};
    if(!input.nombre){
        errores.nombre = 'nombre es requirido'
    }else if(input.nombre.length >30 ||input.nombre.length <3  ){
        errores.nombre = 'nombre tiene que tener entre 3 y 30 car??cteres'
    }else if(!/^[a-zA-Z ]*$/.test(input.nombre)){
        errores.nombre = 'nombre debe llevar s??lo letras como car??cteres'
    }



    if(!input.alturaMin){
        errores.alturaMin = 'altura m??nima es requirido'
    }else if(input.alturaMin.length >6 ||input.alturaMin <0  ){
        errores.alturaMin = 'altura m??nima no puede ser menor a 0 o medir mas de 6 d??gitos'
    }
    else if(input.alturaMax <  input.alturaMin || input.alturaMax.length <  input.alturaMin.length ){
        errores.alturaMin = 'altura m??nima no puede ser mayor a altura m??xima'
    }else if(!/^([0-9])*$/.test(input.alturaMin)){
        errores.alturaMin = 'el input DEBE ser un n??mero'
    }

    if(!input.alturaMax){
        errores.alturaMax = 'altura m??xima es requirido'
    }else if(input.alturaMax.length >6 ||input.alturaMax <0  ){
        errores.alturaMax = 'altura m??xima no puede ser menor a 0 o medir mas de 6 d??gitos'
    }
    else if(input.alturaMax <  input.alturaMin ||  input.alturaMax.length <  input.alturaMin.length ){
        errores.alturaMax = 'altura m??xima no puede ser menor a altura minima'
    }else if(!/^([0-9])*$/.test(input.alturaMax)){
        errores.alturaMax = 'el input DEBE ser un n??mero'
    }


    if(!input.pesoMin){
        errores.pesoMin = 'peso m??nimo es requirido'
    }else if(input.pesoMin.length >6 ||input.pesoMin <0  ){
        errores.pesoMin = 'peso m??nimo no puede ser menor a 0 o pesar mas de 6 d??gitos'
    }
    else if(input.pesoMax <  input.pesoMin || input.pesoMax.length <  input.pesoMin.length){
        errores.pesoMin = 'peso m??nimo no puede ser mayor a peso m??ximo'
    }else if(!/^([0-9])*$/.test(input.pesoMin)){
        errores.pesoMin = 'el input DEBE ser un n??mero'
    }

    if(!input.pesoMax){
        errores.pesoMax = 'peso m??ximo es requirido'
    }else if(input.pesoMax.length >6 ||input.pesoMax <0  ){
        errores.pesoMax = 'peso m??ximo no puede ser menor a 0 o pesar mas de 6 d??gitos'
    }
    else if(input.pesoMax <  input.pesoMin || input.pesoMax.length <  input.pesoMin.length ){
        errores.pesoMax = 'peso m??ximo no puede ser menor a peso minimo'
    }else if(!/^([0-9])*$/.test(input.pesoMax)){
        errores.pesoMax = 'el input DEBE ser un n??mero'
    }


    if(!input.anios){
        errores.anios = 'a??os es requerido'
    }else if(input.anios.length >6 ||input.anios <0  ){
        errores.anios = 'edad m??xima no puede ser menor a 0 o pesar mas de 6 d??gitos'
    }else if(!/^([0-9])*$/.test(input.anios)){
        errores.anios = 'el input DEBE ser un n??mero'
    }
    return errores
}
export function DogCreation (props){
/*nombre/raza: -no puede tener n??meros
                -no puede tener m??s de 32 car??cteres ni menos de 2   
                -no puede tener sinos ni guiones, solo letras
altura/peso minima y m??xima: -no puede tener mas altura minima que m??xima
                        
a??os de vida: no puede tener menos que 0 ni mas que 100
                */ 
    const [input,setInput] = useState({
        nombre:"",
        alturaMin:"",
        alturaMax:"",
        pesoMin:"",
        pesoMax:"",
        anios:""

    })
    const [temps,setTemps] = useState([])
    const [error,setError] = useState([])
    const [dogSended,setDogSended] = useState({
        fail:false,
        success:false
    })
    const handleTemps=(e)=>{
        e.preventDefault()
        console.log(temps)
        if(temps.length==8){
                         console.log("no puedes meter mas de 8 temps")
                     }else{

                         props.temps?.data?.forEach(temp =>{
                 
                                      if(e.target.value.includes(temp.name) &&
                                       temps.find(element => element.temp ==e.target.value ) == undefined
                                       && temps.length<=8){
                                        
                                          
                                          setTemps((prevState)=>{
                                              return [ ...prevState,{
                                              temp:e.target.value,
                                              key:temp.id
                                             }
                                        ]})
                                      }
                                  })
                     }
             
    }
    const handleDeleteTemp=(e)=>{
      var resultTemps = temps.filter(temp =>{
            return temp.key !== e.target.id
        })
        setTemps(resultTemps)
    }
    function capitalizarPrimeraLetra(str) {
        var arrayString = []
        var	arrayWords = str.split(" ")
        arrayWords.forEach(element => {
           
            arrayString.push(element.charAt(0).toUpperCase() + element.slice(1))  
            })
            return arrayString.join(" ")
          
        }
    const onInputChange = (evento) => {
        evento.preventDefault()
        setInput((prevState) => {
            if(evento.target.name == "nombre"){
                return {
                    ...prevState,
                    nombre: capitalizarPrimeraLetra(evento.target.value)
            }
        }else{
            return {
                ...prevState,
                [evento.target.name]: evento.target.value
            }}
        })
        setError(validate({
            ...input,
            [evento.target.name]: evento.target.value
        }))
      
        console.log(input)
    }
    const SendMessage = () =>{
        if(dogSended.success){
            return (
                <div><p style={{
                    color:'green',
                    fontFamily:'roboto',
                    padding:"0 10px"
                }}
                >se ha creado el perro con ??xito!</p></div>
                )

        }else if (dogSended.fail){
            return(
                <div><p style={{
                    color:'#a00',
                    fontFamily:'roboto',
                    padding:"0 10px"
                }}
                >no se ha podido crear el perro, error en el formulario</p></div>
            )
            
        }else{
            return(
                <div></div>
            )
        }
    }
  const sendDog= (e) => {
    e.preventDefault()
    setInput({
        nombre:capitalizarPrimeraLetra(input.nombre)})
    if(Object.keys(error).length === 0 &&
   
     input.nombre.length !== 0 &&
     input.alturaMax.length !== 0 &&
     input.alturaMin.length !== 0 &&
     input.anios.length !== 0 &&
     input.pesoMax.length !== 0 &&
     input.pesoMin.length !== 0 ){
        for (let index = 0; index <= 5; index++) {//index limite sujeto a la cantidad de inputs
            e.target[index].value = ""
        }
        var tempsId = []
        temps.forEach(temps =>{
            tempsId.push(temps.key)
        })
      
            
        var sendDog = {
            name: input.nombre,
            weight: input.pesoMin == input.pesoMax?input.pesoMin: + input.pesoMin+ " - "+input.pesoMax,
            height: input.alturaMin == input.alturaMax?input.alturaMax: + input.alturaMin+ " - "+input.alturaMax,
            age_span: input.anios,
            temperament:tempsId
            
        }
        console.log(sendDog)
        props.postDogCreated(sendDog)
            console.log(props.dogsCreated)
            setTemps([])
          setInput({
            nombre:"",
            alturaMin:"",
            alturaMax:"",
            pesoMin:"",
            pesoMax:"",
            anios:""
    
          })
         setDogSended({
             fail:false,
             success:true
         })
            console.log(e)
                console.log("hello")
        }else{
            setDogSended({
                fail:true,
                success:false
            })
            console.log(props.dogsCreated)
            console.log("no puedes enviar un formulario con errores")
        }
  }
    useEffect(()=>{
       
        window.scroll(0,0)
        props.getTemperaments()
        document.title = "Foodox! - creador de perros"
    },[])
    console.log(Object.keys(input).length)
    return(
        <BodyDiv>
           
            <TextDiv>
            <h2 style={{color:'#5a5'}}>bienvenido a</h2>
            <DivImagotipo>
            <h4>el creador de perros de    </h4>
                 <TitleLogo>  foodox </TitleLogo>
            
            </DivImagotipo>
            <h6 style={{fontFamily:'-apple-system',margin:'50px 10px'}}>
                aqu?? podr??s crear la cantidad de perros que desees, como tambi??n su caracter y peso, ??
                crees que puedes crear un perro genial?, ??ense??anos!
            </h6>
            </TextDiv>
            <CardDiv>
            <SendForm onSubmit={sendDog}>
                <DivInfo>
                 <DivForm>
                 <LabelForm htmlFor="nombre">nombre</LabelForm>
                 <InputForm 
                 type="text"
                  id="nombre"
                   name="nombre"
                   onChange={onInputChange}
                    value={input.nombre}/>
                    {error?.nombre&& 
                    (<PErrorForm>{error?.nombre}</PErrorForm>)}
               </DivForm>
               
                  </DivInfo>
                  <DivInfo>
               <DivForm>
                 <LabelForm htmlFor="anios">a??os de vida</LabelForm>
                 <InputForm 
                 inputWidth='5em'
                 type="number"
                  id="anios"
                   name="anios"
                   onChange={onInputChange}
                    value={input.anios}/>
               </DivForm>
                
                  {error?.anios&& 
               (<PErrorForm>- {error?.anios}</PErrorForm>)}
               </DivInfo>
               <DivInfo>
               <p style={{fontFamily:'roboto',fontSize:'.8em'}}>altura</p>
               <MaxMinDiv>
               <DivForm>
                 <LabelForm fontSize="0.5em" htmlFor="alturaMin">M??nima</LabelForm>
                 <InputForm 
                 inputWidth='5em'
                 type="number"
                  id="alturaMin"
                   name="alturaMin"
                   onChange={onInputChange}
                    value={input.alturaMin}/>
                   
               </DivForm>
               <DivForm>
                 <LabelForm fontSize="0.5em" htmlFor="alturaMax">M??xima</LabelForm>
                 <InputForm 
                 inputWidth='5em'
                 type="number"
                  id="alturaMax"
                   name="alturaMax"
                   onChange={onInputChange}
                    value={input.alturaMax}/>
                   
               </DivForm>
              
               </MaxMinDiv>
               {error?.alturaMin&& 
                    (<PErrorForm>- { error?.alturaMin}</PErrorForm>)}
                     {error?.alturaMax&& 
                    (<PErrorForm>- {error?.alturaMax}</PErrorForm>)}
                    </DivInfo>
                     <DivInfo>
               <p style={{fontFamily:'roboto',fontSize:'.8em'}}>peso</p>
               <MaxMinDiv>
                 
               <DivForm>
                 <LabelForm fontSize="0.5em" htmlFor="pesoMin"> M??nimo</LabelForm>
                 <InputForm 
                 inputWidth='5em'
                 type="number"
                  id="pesoMin"
                   name="pesoMin"
                   onChange={onInputChange}
                    value={input.pesoMin}/>
                   
               </DivForm>
                        
               <DivForm>
                 <LabelForm fontSize="0.5em" htmlFor="PErrorFormesoMax"> M??ximo</LabelForm>
                 <InputForm 
                 inputWidth='5em'
                 type="number"
                  id="pesoMax"
                   name="pesoMax"
                   onChange={onInputChange}
                    value={input.pesoMax}/>
               </DivForm>
               </MaxMinDiv>
                    {error?.pesoMin&& 
                    (<PErrorForm>- {error?.pesoMin}</PErrorForm>)}
                         {error?.pesoMax&& 
               (<PErrorForm>- {error?.pesoMax}</PErrorForm>)}
               </DivInfo>


               
               <DivInfo>
               <DivForm style={{flexDirection:"row"}}>
               <Select style={{fontFamily:'roboto'}} onChange ={  e =>
               { 
                   handleTemps(e)
               }
            }>

                       <option style={{fontFamily:'roboto'}} 
                        >ninguno</option>
                             
                   
                    {props.temps?.data?.map(temp =>{
                        tempsId.push(temp.id)
                        return(


                           <option style={{fontFamily:'roboto'}}
                              key={temp.id}   value={temp.name}>{temp.name}</option>
                               
                        )})}
                </Select>
                <ButtonSend type="submit"
         
         >enviar</ButtonSend>            
               </DivForm>
                        </DivInfo>
               
        
              
                       <SendMessage></SendMessage>
        </SendForm>
        <DogImage></DogImage>    
                       <DivForm>
                       {temps&&temps.map(temp => {
                           return(
                                 <DivForm key={temp.key} >
                                     <DivStyleTemp>

                               <h6>{temp.temp}</h6>
                               <p onClick={(e) => handleDeleteTemp(e)}id={temp.key}
                                style={{cursor:'pointer',
                                        width: 'min-content',
                                        fontFamily: 'roboto',
                                            }}
                                                    >x</p>
                                     </DivStyleTemp>
                               </DivForm>
                           )
                       })}
                        </DivForm>
                       </CardDiv>
        </BodyDiv>


    )

}
function mapStateToProps(state){
    return{temps: state.tempsLoaded,
            dogsCreated: state.dogsCreated   
    }
}

export default connect(mapStateToProps,{getTemperaments,postDogCreated})(DogCreation)