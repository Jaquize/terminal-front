import React from "react";
import styled from "styled-components";
import { Paper } from "../../../../components/Paper/Paper";
import { Col } from "../../../../layouts/GridLayout/Col";
import { Grid } from "../../../../layouts/GridLayout/Grid";
import { Row } from "../../../../layouts/GridLayout/Row";
import { PortfolioContent } from "../Content/PortfolioContent";
import { PortfolioList } from "../List/PortfolioList";
import { PortfolioRef } from "../Reference/PortfolioRef";
import { PortfolioTitle } from "../Title/PortfolioTitle";


const StyledContainer = styled.div`
`

function PortfolioEdit(props) {


    return (<StyledContainer>
        <Grid>
            <Row>
                <Col col={12}><Paper><PortfolioTitle /></Paper></Col>
            </Row>
            <Row>
                <Col col={12}><Paper><PortfolioList /></Paper></Col>
            </Row>
            <Row>
                <Col col={12}><Paper><PortfolioRef /></Paper></Col>
            </Row>
        </Grid>

    </StyledContainer>
    )
}

export { PortfolioEdit }