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

            <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money-back gaurantee"
                backgroundImg="../Pictures/solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />

            <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money-back garuntee"
                backgroundImg="../Pictures/solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />

            <Section 
                title="Accessories"
                description=""
                backgroundImg="../Pictures/accessories.jpg"
                leftBtnText="Show now"
                
            />
            
        </Container>
    )
}

export default Home

//Home and styled help you stlye the component without using css

const Container = styled.div`
    height: 100vh;
    z-index:10;
`



