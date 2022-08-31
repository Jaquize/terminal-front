import React from "react";
import styled from "styled-components";


const StyledInfoContainer = styled.div`
    display : flex;
    position: absolute;
    top:3rem;
    background-color : black;
    opacity : 0.7;
    border-radius : 10px;
    width : calc(100vw / 2.5);
    padding : 10px 15px;
    z-index : 20000;
`

const StyledInfoItem = styled.div`
    
    flex-basis : 33.3%;
    border-right : 1px solid rgba(255,255,255,0.7);    
    margin : 1rem;
    margin-right:0;
    padding : 0.5rem;
`
const StyledInfoListContainer = styled.ul`
    list-style:display;
    list-style-type : disc;

`
const StyledInfoList = styled.li`
    font-size : 0.9rem;
    margin : 0.7rem 0; 
    color : ${props => props.isClick ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.7)'};


`

function HeaderMenuInfo(props) {

    return (
        <StyledInfoContainer>
            <StyledInfoItem>
                <StyledInfoListContainer>
                    <StyledInfoList isClick>
                        한국
                    </StyledInfoList>
                    <StyledInfoList>
                        미국
                    </StyledInfoList>
                    <StyledInfoList>
                        홍콩
                    </StyledInfoList>
                    <StyledInfoList>
                        일본
                    </StyledInfoList>
                    <StyledInfoList>
                        인도
                    </StyledInfoList>
                </StyledInfoListContainer>
            </StyledInfoItem>
            <StyledInfoItem>
                <StyledInfoList >
                    준비중...
                </StyledInfoList>
            </StyledInfoItem>
            <StyledInfoItem>
                <StyledInfoList >
                    준비중...
                </StyledInfoList>
            </StyledInfoItem>
            <StyledInfoItem>
                <StyledInfoList >
                    포트폴리오
                </StyledInfoList>
            </StyledInfoItem>
        </StyledInfoContainer>
    )
}

export { HeaderMenuInfo }