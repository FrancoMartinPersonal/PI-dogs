import styled from "styled-components";
import React from "react";
import mainWallImg from '../../img/dogs-wall-main.jpg'
import dogsOne from '../../img/dogs-1.jpg'
import dogsTwo from '../../img/dogs-2.jpg'
import dogsThree from '../../img/dogs-3.jpg'

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
background: #4405;
position:absolute;


`
const TitleDiv = styled.div `
margin:300px 20%;
position:absolute;
`
const LegendH2 = styled.h2 `
font-size: 3em;
color: #000;
margin:auto;
padding: 10px;
z-index: 150;
text-shadow:5px 5px 15px white;


`
const LegendH4 = styled.h4 `

font-size: 2em;
color: #fff;
margin:auto;
padding: 55px 10px;
z-index: 150;
text-shadow:5px 5px 10px BLACK;


`
const DogInfoText = styled.div `

width: 100%;
background: radial-gradient(circle, rgba(101,31,98,0.2518662464985995) 0%, rgba(135,128,19,0.2526505602240896) 100%);
height: 500px;
`
const DogIntoTextH2 = styled.h2 `
font-size: 3em;
color: #222f;
margin:auto;
padding: 40px 20px;
z-index: 150;


`
const DogIntoTextH4 = styled.h4 `

font-size: 2em;
color: #fff;
margin:auto;
padding: 55px 10px;
z-index: 150;
text-shadow:5px 5px 10px BLACK;


`
const DogOne = styled.div `

background-image: url(${dogsOne});

`
const DogTwo = styled.div `
background-image: url(${dogsTwo});


`
const DogThree = styled.div `
background-image: url(${dogsThree});


`
function Main(){
return (<>
    
        <MainWallImg>
        <MainWallImgCover/>
            <TitleDiv>
                <LegendH2>Bienvenido a tu página web de perros</LegendH2>
                <LegendH4>
                     aquí encontrarás datos interesantes sobre todos los perros, ¡asi también como
                     la capacidad de poder CREAR UNO!
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
        </DogInfoText>
    </>
)
}

export default  Main;