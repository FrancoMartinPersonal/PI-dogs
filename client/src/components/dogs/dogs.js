import styled from "styled-components";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import { getDogs } from "../../actions/actions";
const BodyDiv = styled.div `
height: max-content;
width: 100%;
margin-top: 80px;
position: absolute;
`


export  function Dogs(props){
    console.log(props)
    return (
        <BodyDiv>
            <button onClick={e =>{
                e.preventDefault()
                console.log(props)
                props.getDogs()
            }}>
                obtener perritos
            </button>
            <h1>hello</h1>
            </BodyDiv>
    )
}
function mapStateToProps(state){
    return {
        dogs : state.dogsLoaded
    }
}
export default connect(mapStateToProps,{getDogs})(Dogs)