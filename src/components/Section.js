import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'

function Section({title,dis,backgroundImg,leftBtText,rightBtText}) {
  return (
    <Warp bgImg={backgroundImg}>
       <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{dis}</p>
        </ItemText>
       </Fade>
       <Button>
       <Fade bottom> 
       <ButtonGroup>
            <LeftButton>
                {leftBtText}
            </LeftButton>
            {rightBtText && 
                <RightButton>
                {rightBtText}
                </RightButton>
            }
       </ButtonGroup>
       </Fade>
       <DownArrow src="/images/down-arrow.svg" />
       </Button>
    </Warp>
  )
}

export default Section;

const Warp = styled.div`
    width:100vw;
    height:100vh;
    background-size: cover;
    background-position:center;
    background-repeat:no-repeat;
    //background-image:url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image:${props =>`url("/public/images/${props.bgImg}")`}

`
const ItemText = styled.div`
    padding-top:10vh;
    text-align:center;
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:768px){
        flex-direction:column;
    }
`

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    //opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;

`

const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;
`

const DownArrow = styled.img`
    height:40px;
    overflow-x:hidden;
    animation: animateDown infinite 1.5s;
`
const Button = styled.div`

`
