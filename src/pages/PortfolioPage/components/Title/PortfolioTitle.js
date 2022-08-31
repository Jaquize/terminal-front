import React from "react";
import styled from "styled-components";


const StyledTitle = styled.div`
    display : flex;
    margin : 2.5rem 2rem;
    font-size : 1.5rem;
    flex-wrap : wrap;
    justify-content : space-between;
    
`


const StyledLabel = styled.label`
 
`

const StyledInput = styled.input`
    margin-left : 10px;
    border: none;
    border-bottom : 1px solid black;

        :focus {
        outline: none;
    }
`
const StyledButtonContainer = styled.div`
    flex-basis : 100%;
    padding : 10px 5px;
    text-align : right;
`

const StlyedButton = styled.button`
`


function PortfolioTitle(props) {

    return (
        <StyledTitle>
            <StyledButtonContainer><StlyedButton>편집</StlyedButton></StyledButtonContainer>
            <StyledLabel>
                제목
                <StyledInput value={"삼성전자"} disabled />
            </StyledLabel>
            <StyledLabel>
                유형
                <StyledInput />
            </StyledLabel>
            <StyledLabel>
                구매 여부
                <StyledInput />
            </StyledLabel>
            <StyledLabel>
                수정일
                <StyledInput />
            </StyledLabel>
            <StyledLabel>
                등록일
                <StyledInput />
            </StyledLabel>
        </StyledTitle>
    )
}

export { PortfolioTitle }