import React from 'react'         
import { default as Cake } from '../../images/splash/cake-logo.svg'    
import { default as Poo } from '../../images/splash/poocoin512.png'    
import { default as Binance } from '../../images/splash/binance.svg'    
import { default as Moth } from '../../images/icons/mothGreen.png'    
import {
    InfoContainer,
    ImgWrap,
    Img
} from './LogoSectionElements'


const LogoSection = ({main}) => {
    return (
        <InfoContainer id='logo'>
            <Img src={Cake} alt={"claim"} type={'img/svg'}/> 
            <Img src={Poo} alt={"claim"} type={'img/png'}/> 
            <Img src={Binance} alt={"claim"} type={'img/svg'}/> 
            <Img src={Moth} alt={"claim"} type={'img/png'}/> 
        </InfoContainer>
    )
}

export default LogoSection


                        