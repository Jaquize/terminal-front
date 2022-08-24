import React from "react";
import styled from "styled-components";
import { Paper } from "../../components/Paper/Paper";
import { Col } from "../../layouts/GridLayout/Col";
import { Grid } from "../../layouts/GridLayout/Grid";
import { Row } from "../../layouts/GridLayout/Row";


const StyledContainer = styled.div`
    width : 100%;
    height : calc(100vh - 5rem);
    margin : 1.25rem;
`

function HomePage(props){
    return(
        <StyledContainer>
            <Grid>
                <Row>
                    <Col col={4}><Paper>주식</Paper></Col>
                    <Col col={4}><Paper>선물</Paper></Col>
                    <Col col={4}><Paper>옵션</Paper></Col>
                </Row>
            </Grid>
        </StyledContainer>
    )
}

export default HomePage