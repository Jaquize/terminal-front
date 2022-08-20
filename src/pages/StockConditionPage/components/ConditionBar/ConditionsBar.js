import React, { useState } from "react";
import styled from "styled-components";


import { CalendarItem } from "./CalendarItem";
import { IntItem } from "./IntItem";

const StyledContainer = styled.div`
    position:sticky;
    top:3rem;
    height:3rem;
    background-color:white;
    z-index:1000;
    text-align:center;
`

const StyledButton = styled.button`

`

function formatDate(date){
    return (date.getFullYear() + '-' + ((date.getMonth()+1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + 
        '-' + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()))
}

function VolumeUp(props){

    const [regDate,setRegDate] = useState(new Date())

    const onClickHandler = (e) => {
        props.onClick({
            variables:{
                'regDate' : formatDate(regDate)   
            }
        })

        e.stopPropagation()
    }

    return(
        <StyledContainer>
            <CalendarItem name={'regDate'} field={regDate} setField={setRegDate}/>
            <StyledButton onClick={onClickHandler}>검색</StyledButton>
        </StyledContainer>
    )
}

function BoxingStatus(props){

    const [status,setStatus] = useState(0)
    const [statusDate,setStatusDate] = useState(new Date())
    const [regDate,setRegDate] = useState(new Date())
    
    const onClickHandler = (e) => {
        props.onClick({
            variables:{
                'status':status,
                'statusDate':formatDate(statusDate),
                'regDate':formatDate(regDate)
            }
        })

        e.stopPropagation()
    }

    return(
        <StyledContainer>
            <IntItem name={'staus'} field={status} setField={setStatus}/>
            <CalendarItem name={'statusDate'} field={statusDate} setField={setStatusDate}/>
            <CalendarItem name={'regDate'} field={regDate} setField={setRegDate}/>
            <StyledButton onClick={onClickHandler}>검색</StyledButton>
        </StyledContainer>
    )
}


function BoxingBoxStatus(props){

    const [boxing,setBoxing] = useState(0)
    const [status,setStatus] = useState(0)
    const [regDate,setRegDate] = useState(new Date())

    const onClickHandler = (e) => {
        props.onClick({
            variables:{
                'boxing':boxing,
                'status':status,
                'regDate':formatDate(regDate)
            }
        })

        e.stopPropagation()
    }

    return(
        <StyledContainer>
            <IntItem name={'boxing'} field={boxing} setField={setBoxing}/>
            <IntItem name={'staus'} field={status} setField={setStatus}/>
            <CalendarItem name={'regDate'} field={regDate} setField={setRegDate}/>
            <StyledButton onClick={onClickHandler}>검색</StyledButton>
        </StyledContainer>
    )
}

function BreakBoxingTop(props){

    const [type,setType] = useState(0)
    const [statusDate,setStatusDate] = useState(new Date())

    const onClickHandler = (e) => {
        console.log(type)

        props.onClick({
            variables:{
                'type':type,
                'statusDate':formatDate(statusDate)
            }
        })

        e.stopPropagation()
    }

    return(
        <StyledContainer>
            <IntItem name={'type'} field={type} setField={setType}/>
            <CalendarItem name={'statusDate'} field={statusDate} setField={setStatusDate}/>
            <StyledButton onClick={onClickHandler}>검색</StyledButton>
        </StyledContainer>
    )
}

function BreakBoxingLow(props){

    const [statusDate,setStatusDate] = useState(new Date())

    const onClickHandler = (e) => {
        props.onClick({
            variables:{
                'statusDate':formatDate(statusDate)
            }
        })

        e.stopPropagation()
    }
    
    return(
        <StyledContainer>
            <CalendarItem name={'statusDate'} field={statusDate} setField={setStatusDate}/>
            <StyledButton onClick={onClickHandler}>검색</StyledButton>
        </StyledContainer>
    )
}


export {VolumeUp,BoxingStatus,BoxingBoxStatus,BreakBoxingTop,BreakBoxingLow}