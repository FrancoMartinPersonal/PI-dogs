import styled from "styled-components"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getTemperaments } from "../../actions/actions"
import DogDetails from "../dogDetails/DogDetails"
const BodyDiv = styled.div `
font-size: 2rem;
letter-spacing: 1px;
height:100%;
width: 100%;
margin-top: 80px;
position: absolute;
background: radial-gradient(circle, rgba(101,31,98,0.2518662464985995) 0%, rgba(135,128,19,0.2526505602240896) 100%);
`
const TextDiv = styled.div `
margin: 10px 100px;
color:#222;
`
const TitleLogo = styled.h1 `

margin-left: 10px;
font-size: 1em;
color:#fbe400;
text-shadow:5px 5px 5px black;
letter-spacing: 2px;


`
const DivImagotipo = styled.div `

margin-left: 4%;
display:flex;
width: 100%;
flex-direction: row;
justify-content: center;
background-color: #0003;
/* background:linear-gradient(71deg, #47209755  0%, #87208755 50%, #47209755 100%); */

`
var tempsId =[]
export function validate(input){
    let errores ={};
    if(!input.nombre){
        errores.nombre = 'nombre es requirido'
    }else if(input.nombre.length >30 ||input.nombre.length <3  ){
        errores.nombre = 'nombre tiene que tener entre 3 y 30 carácteres'
    }



    if(!input.alturaMin){
        errores.alturaMin = 'altura mínima es requirido'
    }else if(input.alturaMin.length >6 ||input.alturaMin <0  ){
        errores.alturaMin = 'altura mínima no puede ser menor a 0 o medir mas de 6 dígitos'
    }
    else if(input.alturaMax <  input.alturaMin ){
        errores.alturaMin = 'altura mínima no puede ser mayor a altura máxima'
    }else if(!/^([0-9])*$/.test(input.alturaMin)){
        errores.alturaMin = 'el input DEBE ser un número'
    }

    if(!input.alturaMax){
        errores.alturaMax = 'altura máxima es requirido'
    }else if(input.alturaMax.length >6 ||input.alturaMax <0  ){
        errores.alturaMax = 'altura máxima no puede ser menor a 0 o medir mas de 6 dígitos'
    }
    else if(input.alturaMax <  input.alturaMin ){
        errores.alturaMax = 'altura máxima no puede ser menor a altura minima'
    }else if(!/^([0-9])*$/.test(input.alturaMax)){
        errores.alturaMax = 'el input DEBE ser un número'
    }


    if(!input.pesoMin){
        errores.pesoMin = 'peso mínimo es requirido'
    }else if(input.pesoMin.length >6 ||input.pesoMin <0  ){
        errores.pesoMin = 'peso mínimo no puede ser menor a 0 o pesar mas de 6 dígitos'
    }
    else if(input.pesoMax <  input.pesoMin ){
        errores.pesoMin = 'peso mínimo no puede ser mayor a peso máximo'
    }else if(!/^([0-9])*$/.test(input.pesoMin)){
        errores.pesoMin = 'el input DEBE ser un número'
    }

    if(!input.pesoMax){
        errores.pesoMax = 'peso máximo es requirido'
    }else if(input.pesoMax.length >6 ||input.pesoMax <0  ){
        errores.pesoMax = 'peso máximo no puede ser menor a 0 o pesar mas de 6 dígitos'
    }
    else if(input.pesoMax <  input.pesoMin ){
        errores.pesoMax = 'peso máximo no puede ser menor a peso minimo'
    }else if(!/^([0-9])*$/.test(input.pesoMax)){
        errores.pesoMax = 'el input DEBE ser un número'
    }


    if(!input.anios){
        errores.anios = 'años es requerido'
    }else if(input.anios.length >6 ||input.anios <0  ){
        errores.anios = 'edad máxima no puede ser menor a 0 o pesar mas de 6 dígitos'
    }else if(!/^([0-9])*$/.test(input.anios)){
        errores.anios = 'el input DEBE ser un número'
    }
    return errores
}
export function DogCreation (props){
/*nombre/raza: -no puede tener números
                -no puede tener más de 32 carácteres ni menos de 2   
                -no puede tener sinos ni guiones, solo letras
altura/peso minima y máxima: -no puede tener mas altura minima que máxima
                        
años de vida: no puede tener menos que 0 ni mas que 100
                */ 
    const [input,setInput] = useState({})
    const [temps,setTemps] = useState([])
    const [error,setError] = useState([])
    const handleTemps=(e)=>{
        e.preventDefault()
                   

        props.temps?.data?.forEach(temp =>{

                     if(e.target.value.includes(temp.name) && temps.find(element => element.temp ==e.target.value ) == undefined){
                       
                         
                         setTemps((prevState)=>{
                             return [ ...prevState,{
                             temp:e.target.value,
                             key:temp.id
                            }
                       ]})
                     }
                 })
             
    }
    const handleDeleteTemp=(e)=>{
      var resultTemps = temps.filter(temp =>{
            return temp.key !== e.target.id
        })
        setTemps(resultTemps)
    }

    const onInputChange = (evento) => {
        evento.preventDefault()
        setInput((prevState) => {
            
            return {
                ...prevState,
                [evento.target.name]: evento.target.value
            }
        })
        setError(validate({
            ...input,
            [evento.target.name]: evento.target.value
        }))
        
        console.log(error)
    }
  const sendDog= (e) => {
    e.preventDefault()
   
        if(Object.keys(error).length === 0 && Object.keys(input).length !== 0){
            for (let index = 0; index <= 5; index++) {//index limite sujeto a la cantidad de inputs
                e.target[index].value = ""
                
            }
        
          setInput({})
            console.log(e)
                console.log("hello")
        }else{
            
            console.log("no puedes enviar un formulario con errores")
        }
  }
    useEffect(()=>{
        props.getTemperaments()
        
        .then(()=>{
            console.log(props.temps)
        })
        document.title = "Dogs! - creador de perros"
    },[])
    return(
        <BodyDiv>
            <TextDiv>
            <h2 style={{color:'#5a5'}}>bienvenido a</h2>
            <DivImagotipo>
            <h4>el creador de perros de</h4>
                 <TitleLogo>Dogs </TitleLogo>
            <TitleLogo style={{transform:'rotate(16.25deg)',marginTop:'6px'}}>! </TitleLogo>
            </DivImagotipo>
            <h6 style={{fontFamily:'-apple-system',margin:'50px 10px'}}>
                aquí podrás crear la cantidad de perros que desees, como también su caracter y peso, ¿
                crees que puedes crear un perro genial?, ¡enseñanos!
            </h6>
            </TextDiv>
            <form onSubmit={sendDog}>
                 <div>
                 <label htmlFor="nombre">nombre</label>
                 <input 
                 type="text"
                  id="nombre"
                   name="nombre"
                   onChange={onInputChange}
                    value={input.nombre}/>
                    {error?.nombre&& 
                    (<p>{error?.nombre}</p>)}
               </div>
               <div>
                 <label htmlFor="alturaMin">altura Mínima</label>
                 <input 
                 type="number"
                  id="alturaMin"
                   name="alturaMin"
                   onChange={onInputChange}
                    value={input.alturaMin}/>
                    {error?.alturaMin&& 
                    (<p>{error?.alturaMin}</p>)}
               </div>
               <div>
                 <label htmlFor="alturaMax">altura Máxima</label>
                 <input 
                 type="number"
                  id="alturaMax"
                   name="alturaMax"
                   onChange={onInputChange}
                    value={input.alturaMax}/>
                    {error?.alturaMax&& 
                    (<p>{error?.alturaMax}</p>)}
               </div>
               <div>
                 <label htmlFor="pesoMin">peso Mínimo</label>
                 <input 
                 type="number"
                  id="pesoMin"
                   name="pesoMin"
                   onChange={onInputChange}
                    value={input.pesoMin}/>
                    {error?.pesoMin&& 
                    (<p>{error?.pesoMin}</p>)}
               </div>
               <div>
                 <label htmlFor="pesoMax">peso Máximo</label>
                 <input 
                 type="number"
                  id="pesoMax"
                   name="pesoMax"
                   onChange={onInputChange}
                    value={input.pesoMax}/>
                    {error?.pesoMax&& 
                    (<p>{error?.pesoMax}</p>)}
               </div>
               <div>
                 <label htmlFor="anios">años de vida</label>
                 <input 
                 type="number"
                  id="anios"
                   name="anios"
                   onChange={onInputChange}
                    value={input.anios}/>
                       {error?.anios&& 
                    (<p>{error?.anios}</p>)}
               </div>
               <div>
               <select style={{fontFamily:'roboto'}} onChange ={  e =>
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
                </select>
                                <div>
                       {temps&&temps.map(temp => {
                           return(
                                 <div key={temp.key} style={{border:'1px solid black'}}>
                               <h6>{temp.temp}</h6>
                               <p onClick={(e) => handleDeleteTemp(e)}id={temp.key} style={{cursor:'pointer'}}>x</p>
                               </div>
                           )
                       })}
                        </div>
               </div>
         <button type="submit"
         
         >enviar</button>               
        </form>

        </BodyDiv>


    )

}
function mapStateToProps(state){
    return{temps: state.tempsLoaded}
}

export default connect(mapStateToProps,{getTemperaments})(DogCreation)