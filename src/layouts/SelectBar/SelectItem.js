import React from "react";
import styled from "styled-components";

const StyledItem = styled.span`
    display : inline-block;
    background-color : white;
    border : 1px solid #000000;
    // border-radius : 0.5rem;
    margin : 0 10px;
    padding : 7px 10px;
`

// const StyledSelcedItem = styled(StyledItem)`
//     background-color : #8c8c8c;
//     opacity : 0.7;
// `

const StyledSelcedItem = styled.span`
    display : inline-block;
    background-color : white;
    border : 1px solid #000000;
    // border-radius : 0.5rem;
    margin : 0 10px;
    padding : 7px 10px;
    background-color : #8c8c8c;
    opacity : 0.7;
    
`




function SelectItem(props){

    const itemClickHandler = () => {
        props.onClick(props.children)
    }

    return(<StyledItem onClick={itemClickHandler}>{props.children}</StyledItem>)
}

function SelectedItem(props){

    const itemClickHandler = (item) => {
        props.onClick(props.children)
    }

    return (<StyledSelcedItem onClick={itemClickHandler}>{props.children}</StyledSelcedItem>)
}

export {SelectItem, SelectedItem}