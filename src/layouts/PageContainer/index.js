import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { testFunc } from "../../myRedux/TestReducer";


const Container = styled.div`
    display : flex;
    flex-wrap : wrap;
    align-content: flex-start;
    width: 100%;
    height : 100vh;
    background-color : #f5f6f8;    
`

function PageContainer(props){
   
    return (<Container>
        {props.children}
    </Container>)
}

export default PageContainer