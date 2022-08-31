import React from "react";
import styled from "styled-components";
import { StyledListItem } from "../../components/List/ListItem";

const themeBox = {

    fontWeight : {'upper':'bold', 'middle':'bold', 'lower':'400'},
    fontSize : {'upper':'1.2rem','middle':'1rem','lower':'0.75rem'},
    fontColor : {'upper':'black','middle':'#808080','lower':'black'}
}

const StyledAppendListItem = styled(StyledListItem)`
    // justify-content : flex-start;
    border-bottom : None;
    margin:0;
    padding: 0.5rem 5px;
    span { 
        font-weight : ${props => themeBox.fontWeight[props.position]};
        font-size : ${props => themeBox.fontSize[props.position]};
        color : ${props => themeBox.fontColor[props.position]};
    }
`
const StyledListItemMain = styled.li`
    border-bottom : 1px solid black;
    padding: 1.5rem 0.5rem;
    color : black;
    font-weight : bold;
`

const StyledListItemMiddle = styled.li`
    padding: 0.5rem 0;
    font-weight : bold;
`

const StyledListItemLast = styled.li`
    padding: 0.25rem 0;
    font-weight : normal;
    
`

const StyledSVG = styled.svg`
    width : 1.5rm;
    height: 1.5rm;
`
const StyledItemName = styled.div`
`

function SidebarNavItemMain(props){

    return( 
        <StyledListItemMain >
            {props.children}
        </StyledListItemMain>
    )
}

function SidebarNavItemMiddle(props){

    return(
        <StyledListItemMiddle>
            {props.children}
        </StyledListItemMiddle>
    )
}

function SidebarNavItemLast(props){
    return(
        <StyledListItemLast>
            {props.children}
        </StyledListItemLast>
    )
}

export {SidebarNavItemMain,SidebarNavItemMiddle,SidebarNavItemLast}