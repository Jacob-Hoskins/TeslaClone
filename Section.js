import React from 'react'
import styled from 'styled-components'


//props are just parameters you can set when calling the component

function Section(props) {
    {/* in the parameter area where props is you can either put props or the name of each 
        and not use props. in every JSX parameters*/}
    return (
        <Wrap bgImage={props.backgroundImg}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnText}
                    </LeftButton>
                    {/* if right button does exsist it will center the left button */}
                    { props.rightBtnText && 
                        <RightButton>
                            {props.rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src='/Pictures/down-arrow.svg' />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("../Pictures/${props.bgImage}")`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 786px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`