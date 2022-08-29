import React from "react";
import styled from "styled-components";


const StyledListContainer = styled.ul`

`

const StyledList = styled.li`
    display : inline;
    padding : 0 1.5rem;
    font-weight : bold;
    color : ${ props => props.isClick ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.7)'}
`

function HeaderMenu(props) {

    return (
        <StyledListContainer onMouseOver={() => {props.onMouseOver(true)}}>
            <StyledList isClick>
                주식
            </StyledList>
            <StyledList>
                선물
            </StyledList>
            <StyledList>
                옵션
            </StyledList>
            <StyledList>
                포트폴리오
            </StyledList>
        </StyledListContainer>
    )
}

export { HeaderMenu }