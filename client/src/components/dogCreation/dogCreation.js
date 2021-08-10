import styled from "styled-components"
import { useEffect, useState } from "react"
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
export default function DogCreation (){

    const [input,setInput] = useState({})

    const onInputChange = (evento) => {
        evento.preventDefault()
        setInput((prevState) => {
            
            return {
                ...prevState,
                [evento.target.name]: evento.target.value
            }
        })
        console.log(input)
    }
    
    useEffect(()=>{
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
            <form>
                 <div>
                 <label htmlFor="nombre">nombre</label>
                 <input 
                 type="text"
                  id="nombre"
                   name="nombre"
                   onChange={onInputChange}
                    value={input.nombre}/>
               </div>
               <div>
                 <label htmlFor="alturaMin">altura Mínima</label>
                 <input 
                 type="number"
                  id="alturaMin"
                   name="alturaMin"
                   onChange={onInputChange}
                    value={input.alturaMin}/>
               </div>
               <div>
                 <label htmlFor="alturaMax">altura Máxima</label>
                 <input 
                 type="number"
                  id="alturaMax"
                   name="alturaMax"
                   onChange={onInputChange}
                    value={input.alturaMax}/>
               </div>
               <div>
                 <label htmlFor="pesoMin">peso Mínimo</label>
                 <input 
                 type="number"
                  id="pesoMin"
                   name="pesoMin"
                   onChange={onInputChange}
                    value={input.pesoMin}/>
               </div>
               <div>
                 <label htmlFor="pesoMax">peso Máximo</label>
                 <input 
                 type="number"
                  id="pesoMax"
                   name="pesoMax"
                   onChange={onInputChange}
                    value={input.pesoMax}/>
               </div>
               <div>
                 <label htmlFor="años">años de vida</label>
                 <input 
                 type="number"
                  id="años"
                   name="años"
                   onChange={onInputChange}
                    value={input.años}/>
               </div>
        </form>
        </BodyDiv>


    )

}