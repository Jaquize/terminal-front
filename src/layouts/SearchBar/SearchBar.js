import React, { useRef } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    position : sticky;
    top : 0px;
    width : 100%;
    height : 3rem;
    text-align : center;
    z-index : 100;
    background-color : #fff;
    
`

const StyledSearchBar = styled.input`
    margin : 0 auto;
    width : 60%;
    height : 2em;
    border : 0px;
    border-bottom : 1px solid black;
    text-align : center;
    &:focus {
        outline : none;
    }
    
`

function SearchBar(props) {

    const inputBox = useRef(null)

    const makeDataList = () => {

        const condition_key = Object.keys(props.data_list)

        return (
            <datalist id='data_list'>
                {condition_key.map((val, idx) => (<option key={idx} value={val} />))}
            </datalist>
        )
    }

    const onChangeHandler = () => {
        
        const text = inputBox.current.value

        if (text in props.data_list) {
            props.onClick(props.data_list[text])
        }

    }

    return (
        <StyledContainer onChange={onChangeHandler}>
            <StyledSearchBar ref={inputBox} list='data_list' type='text' />
            {makeDataList()}
        </StyledContainer>
    )
}

export { SearchBar }