import React, { useState } from "react";
import styled from "styled-components";
import { PortfolioContent } from "../Content/PortfolioContent";



const StyledWrapper = styled.div`
    display : flex;
    margin : 2.5rem 2rem;
    font-size : 1.5rem;
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

const StyledListInnerWrapper = styled.div`
    // padding : 1.5rem 2rem;
    font-size : 1.5rem;

    :first-child{
 
        margin-bottom : 1rem;
    }

`

const StyledNumber = styled.span`
    
`

const StyledTitle = styled.span`
`

const StyledContentNotEdit = styled.div`
    height : 300px;

    background-color : black;
`

const StyledContentEdit = styled.textarea`

    height : 300px;
    width : 100%;

`

function PortfolioList(props) {

    const [isOpen, setIsOpen] = useState(false)
    const [isButtonClick, setIsButtonClick] = useState(false)


    return (
        <StyledWrapper>
            <StyledButtonContainer>
                <StyledButton onClick={(e) => { setIsButtonClick(!isButtonClick); e.preventDefault() }}>
                    {isButtonClick ? "저장" : "편집"}
                </StyledButton>
            </StyledButtonContainer>
            <StyledListContainer>
                <StyledList >
                    <StyledListInnerWrapper onClick={() => { setIsOpen(!isOpen) }}>
                        <StyledNumber>1.</StyledNumber>
                        <StyledTitle>매매 전략</StyledTitle>
                    </StyledListInnerWrapper>
                    {isOpen && <StyledListInnerWrapper>{isButtonClick ? <StyledContentEdit /> : <StyledContentNotEdit />} </StyledListInnerWrapper>}
                </StyledList>
            </StyledListContainer>
        </StyledWrapper>
    )
}

export { PortfolioList }