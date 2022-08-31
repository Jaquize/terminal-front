import React from 'react'
import styled from 'styled-components'
import { Paper } from '../../components/Paper/Paper'
import { Col } from '../../layouts/GridLayout/Col'
import { Grid } from '../../layouts/GridLayout/Grid'
import { Row } from '../../layouts/GridLayout/Row'
import { PortfolioEdit } from './components/Edit/PortfolioEdit.js'
import { PortfolioTable } from './components/Table/PortfolioTable'


const StyledContainer = styled.div`
    width : 100%;
    height : calc(100vh - 5rem);
    margin : 1.25rem;
`

function PorfolioPage(props){

    return(
        <StyledContainer>
            <Grid>
                <Row>
                    <Col col={12}>
                        <Paper>
                            <PortfolioTable/>
                        </Paper>
                    </Col>
                </Row>
                <PortfolioEdit/>
            </Grid>
        </StyledContainer>
    )
}

export default PorfolioPage