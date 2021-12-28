import React from 'react'
import styled from 'styled-components'
import Section from './Section'



function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg='../Pictures/model-s.jpg'
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="../Pictures/model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Modal X"
                description="Order Online for Touchless Delivery"
                backgroundImg="../Pictures/model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Modal Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="../Pictures/model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            
        </Container>
    )
}

export default Home

//Home and styled help you stlye the component without using css

const Container = styled.div`
    height: 100vh;
`



