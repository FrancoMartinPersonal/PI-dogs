import styled, { keyframes } from "styled-components";
import imgRotate from '../img/dog.png'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`


  border: 4px solid #fbe400aa;
  width: 72px;
  height:72px;
  border-radius: 50%;
  border-left-color:#35095aaa;
  margin:50px auto;
  animation: ${rotate} 10s linear infinite;
  
`;
const Dog = styled.div`
background-image: url(${imgRotate});
background-size: cover;
  
  width: 68px;
  height:68px;
  border-radius: 50%;
  
  
  animation: ${rotate} 5s linear infinite;
  
`;

export const Loading = () => {
    return (
        <div >
            <Rotate><Dog></Dog></Rotate>
        </div>
    )
}