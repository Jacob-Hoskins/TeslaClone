import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

//to use the slice you have to import useSelector which is a hook

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    console.log(cars)

    return (
        <Container>
            <a>
                <img src='../Pictures/logo.svg' />
            </a>
            <Menu>
                {/* this will  automatically load the header car names through the array
                    instead of typing them all out like commented out below
                */}
                {cars && cars.map((car, index) =>(
                    <a href="#"> {car}</a>
                ))}
                {/* <a href="#"> Model S</a>
                <a href="#"> Model 3</a>
                <a href="#"> Model X</a>
                <a href="#"> Model Y</a> */}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
            </RightMenu>
            {/* show calls the burgerStatus variable in css and on click activates it */}
            <CustomMenu onClick={() => setBurgerStatus(true)}/>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    {/* will set burger status to false closing nav bar */}
                    <CustomClose onClick={()=> setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) =>(
                    <li key={index}><a href="#">{car}</a></li>
                ))}
                <li><a href="#">Exsisting Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    z-index: 1;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;

    }

    @media(max-width: 768px){
        display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;


    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;

    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    // if props.show is true translateX will open the nav bar
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    //below lets the nav bar slowly slide open to screen
    transition: transform 0.2s;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        
        a{
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`