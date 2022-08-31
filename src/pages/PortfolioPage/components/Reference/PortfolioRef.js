import React from "react";
import styled from "styled-components";



const StyledWrapper = styled.div`
    display : flex;
    margin : 2.5rem 2rem;
  
    flex-wrap : wrap;
    
`
const StyledButtonContainer = styled.div`
    flex-basis : 100%;
    padding : 10px 5px;
    text-align : right;
`

const StyledButton = styled.button`
`

const StyledListContainer = styled.ul`
    flex-basis : 100%;
`


const StyledList = styled.li`
   
`


function PortfolioRef(props){

    return(
        <StyledWrapper>
            <StyledButtonContainer>
                <StyledButton>편집</StyledButton>
            </StyledButtonContainer>
            <StyledListContainer>
                    <StyledList><a>1. 국가 추정 자산 통계청</a></StyledList>
            </StyledListContainer>
        </StyledWrapper>

    )
}

export {PortfolioRef}