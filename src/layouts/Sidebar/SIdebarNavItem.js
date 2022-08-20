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
const StyledSVG = styled.svg`
    width : 1.5rm;
    height: 1.5rm;
`
const StyledItemName = styled.div`
`

function SidebarNavItem(props){

    return( 
        <StyledAppendListItem position={props.position}>
            {/* <StyledSVG/>  */}
            {props.children}
        </StyledAppendListItem>
    )
}

export {SidebarNavItem}