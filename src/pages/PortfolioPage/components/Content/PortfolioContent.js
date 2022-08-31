import React from 'react'
import styled from 'styled-components'


const StyledContentContainer = styled.div`
    padding : 1rem 1.5rem;
`

const StyledDiv = styled.div`
`

const StyledTextArea = styled.textarea`

    height : 300px;
    width : 100%;

`


function PortfolioContent(props) {
    return (
        <StyledContentContainer>
            <StyledTextArea />
        </StyledContentContainer>


    )
}

export { PortfolioContent }