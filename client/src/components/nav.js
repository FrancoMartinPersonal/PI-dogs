
import styled, { css } from 'styled-components';
import  imgLogo from '../img/dog.png'
import { Link, NavLink } from 'react-router-dom'
const MainNav = styled.div `
width: 100%;
height: 80px;
box-sizing: content-box;
background-color:#35095a;
display:flex;
justify-content: space-between;
position:fixed;
z-index:2000;
/* border-bottom:1px solid #872087; */
`
const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colour.primary};
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.medium};
  `}
`;
const DivImagotipo = styled.div `
width: 350px;
height: 80px;
margin-left: 4%;
display:flex;
justify-content: center;
/* background:linear-gradient(71deg, #47209755  0%, #87208755 50%, #47209755 100%); */
cursor: pointer;
`
const TitleLogo = styled.h1 `
/* align-self: center; */
/* margin-top:10px; */
margin-left: 10px;
font-size: 3em;
color:#fbe400;
text-shadow:5px 5px 5px black;
letter-spacing: 3px;
 &:hover{
    color:#fbfb00;
 }

`
const DivImg = styled.div `

margin-top: 1.7%;
background-image: url(${imgLogo});
    background-size: cover;
    width: 60px;
    height:60px;

`
const NavBar = styled.nav `
display:flex;
height: 80px;
width: 450px;
margin-right: 4%;
`
const BarH3 = styled.h3 `
color: white;

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
color: white;
font-size: 1.5em;
text-decoration:none;
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

export default function Nav (){
    return (
        <MainNav>
            <Link to="/"  style={{ textDecoration: 'none' }}>
            <DivImagotipo>
            <DivImg/>

                    <TitleLogo>
                        Dogs
                    </TitleLogo>
                    <TitleLogo style={{transform:'rotate(16.25deg)',}}>
                        !
                    </TitleLogo>
            </DivImagotipo>
            </Link>     
            
            <NavBar>
            <NavLinks to="/dogs" activeClassName="selected"
                    activeStyle={{
                    fontWeight: "bold",
                        color:"rgba(255,100,157,1)",
                        textDecoration:"none"
                        }}
            >   
               
                    get dogs
               
                </NavLinks>
                <NavLinks to="/dog" activeClassName="selected"
                        activeStyle={{
                    fontWeight: "bold",
                        color:"rgba(255,100,157,1)",
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