import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    position:fixed;
    top : 0;
    width : 100%;
    height : 3rem;
    position : sticky;
    background-color : #000069;    
`

function HeaderContainer(props){

    return(
        <Container onMouseLeave={(e) => {props.onMouseLeave(false); e.stopPropagation();}}>
            {props.children}
        </Container>    
    )
}

export {HeaderContainer}