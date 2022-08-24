import React from "react";
import styled from "styled-components";
import { Paper } from "../../components/Paper/Paper";
import { Col } from "../../layouts/GridLayout/Col";
import { Grid } from "../../layouts/GridLayout/Grid";
import { Row } from "../../layouts/GridLayout/Row";
import ThemeList from "./components/ThemeList";


const StyledContainer = styled.div`
    width : 100%;
    height : calc(100vh - 5rem);
    margin : 1.25rem;
`


function ThemeInfoPage(props){
    return (<StyledContainer>
        <Grid>
           <Row>
               <Col col={3}>
                   <Paper>
                       <ThemeList/>
                   </Paper>
               </Col>
               <Col col={9}>
                <Paper></Paper>
               </Col>
            </Row>
        </Grid>
    </StyledContainer>)
}

export default ThemeInfoPage