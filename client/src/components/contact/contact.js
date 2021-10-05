import styled from "styled-components";
import img from "../../img/en-construccion.jpg"
import { Loading } from "../loading";
import Email from '../../img/email-logo.png'
import Linkedin from '../../img/linkedin-logo.png'
import Github from '../../img/github-logo.png'
import { Link } from "react-router-dom";

const BodyDiv = styled.div`
height:fit-content;
width: 100%;
margin-top: 100px;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
`
const ImgDiv = styled.div`
background-image: url(${img});
background-origin: content-box;
background-repeat: no-repeat;

width:100%;
height:100vh;
background-size:  auto;
`
const InfoDiv = styled.div`
width:600px;
height: fit-content;
//border:1px solid black;
padding:45px;
border-radius:4px;
background-color: #0001;
`
const TitleMain = styled.h4`
color:#444;
padding:10px;
font-size: 1.4rem;
`
const InfoMain = styled.p`
color:#223;
`
const LogosDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Logo = styled.img`
width:40px;
margin:20px 5px;
height:40px;
transition: .2s all;
&:hover{
    cursor: pointer;
    filter: opacity(0%);filter: saturate(0%);
    width:50px;
    height:50px;
}
`
export default function Contact() {
    return (
        <BodyDiv>
            <InfoDiv>
                <TitleMain>
                    sobre la aplicación
                </TitleMain>
                <InfoMain>
                    Una aplicación con front-end React, agilizado con hooks y usando Redux como Stage Management, se incluyó el uso de Styled-components.
                    desde Backend node.js y ExpressJs, teniendo como base de datos a Postgressql utilizando Sequelize como ORM.
                    La misma consume una API externa con datos de perros como su peso, altura, descripción, nombre y expectativa de vida
                    Características de la aplicación:
                </InfoMain>
                <InfoMain>
                    -Landing Page explicativo y simple
                </InfoMain>
                <InfoMain>
                    Obtención de todos los perros:
                </InfoMain>
                <InfoMain>
                    -filtros por orden alfabético
                </InfoMain>
                <InfoMain>
                    -peso
                </InfoMain>
                <InfoMain>
                    -características.
                </InfoMain>
                <InfoMain>
                    -por perro creado o real.
                </InfoMain>
                <InfoMain>
                    - Búsqueda por input por nombre
                </InfoMain>
                <InfoMain>
                    Creación de perro:
                </InfoMain>
                <InfoMain>
                    -se puede crear un perro con las características deseadas iguales a uno real, interfaz amigable que invita a desarrollarlo.
                </InfoMain>
                <TitleMain>
                    sobre el programador
                </TitleMain>

                <InfoMain>
                    Apasionado por el Software Web, Full-Stack con ambiciones y tendencias Front-End
                    Desarrollador PERN, flexibilizado en SCRUM.
                    Stack Principal:
                    PostgresSQL con Sequelize, ExpressJs, React con Redux y Node, 
                    En Aprendizaje:
                    Python/Flask como backend.
                    uso de Figma
                    <InfoMain>
                    ¿en qué soy bueno?
                    </InfoMain>
                    <InfoMain>
                    -considero que mis fuertes están en la capacidad de no irritarme, enfrentar un trabajo
                    con la máxima eficiencia posible, y a pesar de que la cuesta sea alta y difícil, encontrar el horizonte,
                    satisfactorio.             
                    </InfoMain>
                    <InfoMain>
                    -Creo que el trabajo en equipo a priori se me presenta como un evento de enriquecimiento y
                    de fácil acceso, y como es importante que estos vínculos surjan de forma espontánea y sin estorbos, es importante estar en una cultura organizacional fuerte, que se busque el progreso, la competitividad sana y pulcra de escalamientos rápidos.
                    </InfoMain>



                </InfoMain>
                <TitleMain>
                    contacto
                </TitleMain>
                <InfoMain>
                    francomartin.personal@gmail.com

                </InfoMain>
                <InfoMain>

                    +54 9 11 3336-2056.

                </InfoMain>
                <InfoMain>
                https://www.linkedin.com/in/franco-martin-dev/
                </InfoMain>
                <InfoMain>

                    mis Proyectos?
                </InfoMain>
                <InfoMain>
                    https://github.com/FrancoMartinPersonal
                </InfoMain>
               
              <LogosDiv>
                  <a target="_blank" href="mailto:francomartin.personal@gmail.com">
                <Logo src={Email}></Logo>
                </a>
                <a target="_blank" href="https://github.com/FrancoMartinPersonal">
                <Logo src={Github}></Logo>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/franco-martin-dev/">
                <Logo src={Linkedin}></Logo>
                </a>
              </LogosDiv>
            </InfoDiv>
            
        </BodyDiv>
    )
}