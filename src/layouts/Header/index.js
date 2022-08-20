import React from "react";
import styled from "styled-components";
import { HeaderContainer } from "./HeaderContainer";

function Header(props){

    return(<HeaderContainer>{props.children}</HeaderContainer>)
}

export default Header
