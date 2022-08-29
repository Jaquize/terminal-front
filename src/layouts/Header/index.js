import React, { useState } from "react";
import { HeaderContainer } from "./HeaderContainer";
import {HeaderMenuInfo} from "./HeaderMenuInfo"
import {HeaderMenu} from "./HeaderMenu"

function Header(props){

    const [isOpen,setIsOpen] =  useState(false)

    return(<HeaderContainer onMouseLeave={setIsOpen}>
        <HeaderMenu onMouseOver={setIsOpen}/>
        {isOpen && <HeaderMenuInfo/>}
    </HeaderContainer>)
}

export default Header
