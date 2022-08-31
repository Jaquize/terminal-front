import React, { useState } from "react";
import styled from 'styled-components'


const StyledListContainer = styled.ul`
    // margin : 10px;
    overflow-y : auto;
    // border:1px solid black;
    
`

const StyledItem = styled.li`
    padding : 1.3rem;
    border-bottom:1px solid rgba(000,000,000,0.3);
`
const StyledItemName = styled.div`
    font-weight : bold;
    color : black;
    
`

const StyledSubListContainer = styled.ul`
    margin-left : 10px;
    margin-top : 1rem;
 
`
const StyledSubItem = styled.li`
    padding : 0.3rem;
`

function ThemeList(props){

    const [toggle,setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle(!toggle)
    }

    return(
        <StyledListContainer>
            <StyledItem>
                <StyledItemName onClick={toggleHandler}>제목</StyledItemName>   
                {toggle && <StyledSubListContainer>
                    <StyledSubItem>가</StyledSubItem>
                    <StyledSubItem>가</StyledSubItem>
                    <StyledSubItem>가</StyledSubItem>
                </StyledSubListContainer>}        
            </StyledItem>
            <StyledItem><StyledItemName>가</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>다</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>라</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>가</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>다</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>라</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>가</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>다</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>라</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>가</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>다</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>라</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>가</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>다</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>라</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>가</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>다</StyledItemName></StyledItem>
            <StyledItem><StyledItemName>라</StyledItemName></StyledItem>
        </StyledListContainer>
    )

}

export default ThemeList