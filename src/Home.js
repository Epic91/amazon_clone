import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <Banner>

            </Banner>
            
            <Content>
                somethingsomethingsomethingsomething
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 400px;
    background-position: center;
    background-size: cover;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const Content = styled.div`
    background: white;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -150px;
`

