import styled from "styled-components";
import  imgLogo from '../img/dog.png'
import { Link } from 'react-router-dom'
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

margin-left: 10px;
font-size: 3.2em;
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
margin-top: 15px;
margin-left: 15px;
padding: 10px;


&:hover{
    background: linear-gradient(0deg, #35095a 44%, rgba(0,233,238,0.44861694677871145)50%, #35095a 55%);
    color:yellow
}
&:active{
    background: linear-gradient(0deg, #35095a 44%, rgba(0,233,238,0.44861694677871145)50%, #35095a 55%);
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
                    <TitleLogo style={{transform:'rotate(16.25deg)',marginTop:'6px'}}>
                        !
                    </TitleLogo>
            </DivImagotipo>
            </Link>     
            
            <NavBar>
            <Link to="/dogs"  style={{ textDecoration: 'none' }}>   
                <BarH3>
                    get dogs
                </BarH3>
                </Link>
                <Link to="/dogs"  style={{ textDecoration: 'none' }}>   
                <BarH3>
                    create dog
                </BarH3>
                </Link>
                <Link to="/dogs"  style={{ textDecoration: 'none' }}>   
                <BarH3>
                    contact
                </BarH3>
                </Link>
            </NavBar>
            
                
        </MainNav>
    )
}