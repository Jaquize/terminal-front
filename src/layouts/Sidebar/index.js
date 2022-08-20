import React from "react"
import { Button } from "../../components/Button/Button"
import { SidebarContainer } from "./SidebarContainer"



function Sidebar(props) {

    return (
        <SidebarContainer>
            {props.children}
        </SidebarContainer>
    )
}

export default Sidebar