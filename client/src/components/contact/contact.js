import styled from "styled-components";
import img from "../../img/en-construccion.jpg"
import { Loading } from "../loading";
const BodyDiv = styled.div `
height: fit-content;
width: 100%;
margin-top: 80px;
position: absolute;

background: radial-gradient(circle, rgba(101,31,98,0.2518662464985995) 0%, rgba(135,128,19,0.2526505602240896) 100%);
`
const ImgDiv = styled.div `
background-image: url(${img});
background-origin: content-box;
background-repeat: no-repeat;

width:100%;
height:100vh;
background-size:  auto;
`
export default function Contact(){
    return(
        <BodyDiv>
                <ImgDiv></ImgDiv>
                <Loading style={{margin:'50%'}}></Loading>

        </BodyDiv>
    )
}