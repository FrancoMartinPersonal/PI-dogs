import styled, { css } from "styled-components";
import React, { useEffect } from "react";
import mainWallImg from '../../img/dogs-wall-main.jpg'
import dogsOne from '../../img/dogs-1.jpg'
import dogsTwo from '../../img/dogs-2.jpg'
import dogsThree from '../../img/dogs-3.jpg'
import { Link } from "react-router-dom";

const MainWallImg = styled.div `
background-image: url(${mainWallImg});
background-position: center;
background-size: cover;
width: 100%;
height: 1000px;
z-index: 0;
`
const MainWallImgCover = styled.div `
z-index: 100;
width: 100%;
height: 1000px;
background: #0005;
position:absolute;


`
const TitleDiv = styled.div `
margin:300px 20%;
position:absolute;
z-index: 1500;
`
const LegendH2 = styled.h2 `
font-size: 3em;

${({ theme }) => css`
    color: ${theme.colour.secondary.main};
  `}
margin:auto;
padding: 10px;
z-index: 150;



`
const LinkStyleH4 = styled(Link) `
text-decoration:none;
color: wheat;
&:hover{
    color: rgba(255,100,157,1);
}
&:active{
    color: rgba(20,100,157,1);
}
`
const LegendH4 = styled.h4 `

font-size: 2em;
color: #fff;
margin:auto;
padding: 75px 10px;
z-index: 150;
/* text-shadow:5px 5px 10px BLACK; */


`
const DogInfoText = styled.div `

width: 100%;
/* background: radial-gradient(circle, rgba(101,31,98,0.1518662464985995) 0%, rgba(135,128,19,0.1526505602240896) 100%); */
height: max-content;
`
const DogIntoTextH2 = styled.h2 `
font-size: 3em;
color: #222f;
margin:auto;
padding: 40px 20px;
z-index: 150;


`
const DogIntoTextH4 = styled.h4 `

font-size: 1.5em;
color: #fff;
margin:50px auto;
padding: 55px 20px;
z-index: 150;
text-shadow:5px 5px 10px BLACK;
background-color: #0005;

`


const DogCard = styled.div `

display: flex;
justify-content: space-around;
align-items: center;
width: max-content;
height: 300px;
border: 5px solid white;
border-radius: 7%;
margin: auto;

background: rgb(139,15,78);
background: linear-gradient(332deg, rgba(139,15,78,1) 0%, rgba(168,58,58,1) 48%, rgba(139,15,78,1) 100%);
`
const DogOne = styled.div `

background-image: url(${dogsOne});
background-size:cover;
width: 200px;
height: 150px;
border: 7px solid white;
border-radius: 80px;

`
const DogTextDiv = styled.div `
margin: 10px 15px;

`

const DogText = styled.h6 `
font-family:'roboto',sans-serif ;
color: #fff;
background-color: #0003;
font-size: 1em;
padding: 10px 16px;

`
const DogTwo = styled.div `
background-image: url(${dogsTwo});
background-size:cover;
background-origin:border-box;
background-repeat: no-repeat;
width:220px;
height: 170px;
border: 7px solid white;
border-radius: 40px;
margin: 10px 15px;
`

const DogThree = styled.div `
background-image: url(${dogsThree});
background-size:cover;
width: 200px;
height: 150px;
border: 7px solid white;
border-radius: 80px;

`
function Main(){

    useEffect(()=>{
        document.title = "Dogs! - bienvenido a la mejor página de perros!"
    },[])
return (<>
    
        <MainWallImg>
        <MainWallImgCover/>
            <TitleDiv>
                <LegendH2>Bienvenido a tu web de perros</LegendH2>
                <LegendH4>
                     aquí encontrarás datos interesantes sobre todos los perros, ¡asi también como
                     la capacidad de  
                      <LinkStyleH4 to="/dog"> CREAR UNO!</LinkStyleH4>
                </LegendH4>
            </TitleDiv>
       
        </MainWallImg>
        <DogInfoText>
            <DogIntoTextH2 >
                Aquí es donde realmente perteneces, ¡aquí tú y tu perro!
            </DogIntoTextH2>
            <DogIntoTextH4>
                busca de entre más de 200 razas de perros, con sus respectiva altura,
                peso y años de vida
            </DogIntoTextH4>
          
                <DogCard>
                    <DogTwo>

                    </DogTwo>
                    <DogTextDiv>

                    <DogText>
                        breed: vizsla
                    </DogText>
                    <DogText>
                    Height: 56–64 cm
                    </DogText>
                    <DogText>
                    Weight: 20-25 kg
                    </DogText>
                    <DogText>
                    Life span: 12 – 15 years
                    </DogText>
                    </DogTextDiv>
                   
                </DogCard>
              
           
        </DogInfoText>
    </>
)
}

export default  Main;