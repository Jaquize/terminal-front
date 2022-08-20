import React from "react";
import styled from "styled-components";

const StyledTagContainer = styled.div`
    display : inline-flex;
    justify-content : space-between;
    // width : 100%;
`
const StyledTagKey = styled.span`
    min-width : 10rem;
    font-weight : bold;    
`
const StyledTagValue = styled.span`
    text-align : right;
`

const StyledInnerContainer = styled.span`
    display : inline-block;
    margin-bottom : 0.5rem;
`

const StyledInnerTagKey = styled.span`
    margin-right : 0.5rem;
`

const StyledInnerTagValue = styled.span`
    margin-right : 0.7rem;

`

function Tag(props) {

    const getStyledTag = (tagValue) => {

        if (Array.isArray(tagValue)) {
            
            return (<StyledTagValue>
                {tagValue.map((val, idx) => (<StyledInnerContainer key={idx}>
                    <StyledInnerTagKey>{val.key}</StyledInnerTagKey><StyledInnerTagValue>{val.value}</StyledInnerTagValue>
                </StyledInnerContainer>))}
            </StyledTagValue>)
        }

        else {

        return (
            <StyledTagValue>{tagValue}</StyledTagValue>
        )

    }
}

return (
    <StyledTagContainer>
        <StyledTagKey>{props.tagKey}</StyledTagKey>
        {getStyledTag(props.tagValue)}
    </StyledTagContainer>
)
}

export { Tag }