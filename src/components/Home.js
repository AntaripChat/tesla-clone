import React from 'react';
import styled from 'styled-components';
import Section from './Section';
function Home() {
  return (
    <Conainer>
        <Section 
        title="Model Y"
        dis="Schedule a Demo Drive"
        backgroundImg="model-y.jpg"
        leftBtText = "Buy Now"
        rightBtText = "Custom Order"

        />
        <Section title="Model 3" 
        dis="Schedule a Demo Drive"
        backgroundImg="model-3.jpg"
        leftBtText = "Buy Now"
        rightBtText = "Custom Order"
        />
        <Section title="Model S"
        dis="Schedule a Demo Drive"
        backgroundImg={"model-s.jpg"}
        leftBtText = "Buy Now"
        rightBtText = "Custom Order"
        />
        <Section title={"Model X"}
        dis="Schedule a Demo Drive"
        backgroundImg="model-x.jpg" 
        leftBtText = "Buy Now"
        rightBtText = "Custom Order"
        />
        <Section title={"Solar Panels"}
        dis="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtText = "Buy Now"
        rightBtText={"Learn More"}
        />
        <Section title='Solar Roof'
        dis="Produce Clean Energy From Your Roof"
        backgroundImg='solar-roof.jpg'
        leftBtText = "Buy Now"
        rightBtText={"Learn More"}
        />
        <Section title={"Accessories"}
        
        leftBtText="Shop Now"
        backgroundImg="accessories.jpg" />
    </Conainer>
  )
}

export default Home

const Conainer = styled.div`
    height:100vh;
`