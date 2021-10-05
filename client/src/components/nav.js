import React from 'react';
import styled, { css } from 'styled-components';
import  imgLogo from '../img/dog.png'
import { Link, NavLink } from 'react-router-dom'
import Burger from '../img/Hamburger_icon.png'

const MainNav = styled.div `
width: 100%;
height: 80px;
box-sizing: content-box;

display:flex;
justify-content: space-between;
position:fixed;
z-index:2000;

/* border-bottom:1px solid #872087; */


${({ theme }) => css`
background: linear-gradient(0deg, #dde 0%, #eef 40%,#eef 60%, #dde 100%);    
box-shadow: 1px 3px 6px 0px #2222;
`}
@media (max-width: 768px) {
    height: 60px;
  }
 
`



const DivImagotipo = styled.div `
width: 350px;
height: 80px;
margin-left: 4%;
display:flex;
justify-content: center;
/* background:linear-gradient(71deg, #47209755  0%, #87208755 50%, #47209755 100%); */
cursor: pointer;
@media (max-width: 768px) {
    margin-left: 1%;
    width: 180px;
  }
`
const TitleLogo = styled.h1 `
/* align-self: center; */
margin-top:5px;
margin-left: 10px;
font-size: 3em;
${({ theme }) => css`
    color: ${theme.colour.secondary.main};
  `}
//text-shadow:1px 1px 1px #888;
letter-spacing: 3px;
 &:hover{
    ${({ theme }) => css`
    color: ${theme.colour.secondary.light};
  `}
 }
 @media (max-width: 768px) {
   font-size: 2em;
   margin-top:6%;
  }
`
const DivImg = styled.div `

margin-top: 2%;
background-image: url(${imgLogo});
    background-size: cover;
    width: 120px;
    height:60px;
    @media (max-width: 768px) {
        margin-top: 7.5%;
        height:30px;
    width: 60px;
  }
`
const NavBar = styled.nav `
display:flex;
height: 80px;
width: 450px;
margin-right: 4%;

@media (max-width: 768px) {
    display:none;
  }
`
const BurberImg = styled.img`
margin:0 10px;
@media (min-width: 768px) {
    display:none;
  }
`
const NavBarMobile = styled.nav `
display:flex;
flex-direction: column;
position: absolute;
height:100vh;
width:250px;

display:none;
background:#eefd;
z-index: 151515151515;

@media (max-width: 768px) {
    display:flex;
    transition: 1s all;
  }
`
const BarH3 = styled.h3 `
color: black;

    margin-top: 12px;
margin-left: 15px;
padding: 10px;


&:hover{
  
    color:yellow
}
&:active{
   
    color:rgba(255,100,157,1);
}
`
const NavLinks = styled(NavLink) `

${({ theme }) => css`
color: ${theme.colour.secondary.dark};
`}

letter-spacing:1px;
font-size: 1.5em;
text-decoration:none;
    margin-top: 12px;
margin-left: 15px;
padding: 10px;


&:hover{
  
    color:#889
}

`

export default function Nav (){

    const [nav, setNav] = React.useState(false)
    return (
        <MainNav>
            <Link to="/"  style={{ textDecoration: 'none' }}>
            <DivImagotipo>
            <DivImg/>

                    <TitleLogo>
                        foodox
                    </TitleLogo>
            </DivImagotipo>
            </Link>     
            <BurberImg src={Burger} onClick={()=> {
                if(nav){

                    setNav(false)
                }else{
                    setNav(true)
                }
                
            }}/>
           {nav?
            <NavBarMobile>
             <NavLinks to="/dogs" activeClassName="selected"
                    activeStyle={{
                    fontWeight: "bold",
                        color:"#858",
                        textDecoration:"none"
                        }}
            >   
               
                    get dogs
               
                </NavLinks>
                <NavLinks to="/dog" activeClassName="selected"
                        activeStyle={{
                    fontWeight: "bold",
                        color:"#858",
                        textDecoration:"none"
                        }}
                    >   
               
                    create dog
               
                </NavLinks>
            </NavBarMobile>:
            null
           }
            <NavBar>
            <NavLinks to="/dogs" activeClassName="selected"
                    activeStyle={{
                    fontWeight: "bold",
                        color:"#858",
                        textDecoration:"none"
                        }}
            >   
               
                    get dogs
               
                </NavLinks>
                <NavLinks to="/dog" activeClassName="selected"
                        activeStyle={{
                    fontWeight: "bold",
                        color:"#858",
                        textDecoration:"none"
                        }}
                    >   
               
                    create dog
               
                </NavLinks>
                {/* <Link to="/contact"  style={{ textDecoration: 'none' }}>   
                <BarH3>
                    contact
                </BarH3>
                </Link> */}
            </NavBar>
            
               
        </MainNav>
    )
}