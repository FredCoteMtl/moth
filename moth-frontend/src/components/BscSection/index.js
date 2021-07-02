import React from 'react'
import { 
    InfoContainer,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
    InfoWrapper,
    BtnWrap
} from './BscElements'
import { default as Stars } from '../../images/splash/counting_stars.svg'
import {ButtonLink} from '../ButtonElements'



const BscSection = () => { 

    return (
        <>
        <InfoContainer id='discover'>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Will be available on the Pancake Swap Dex</TopLine>
                            <Heading>The MOTH coin will be availale on the biggest decentralized exchange of the Binance Smart Chain</Heading>
                            <Subtitle>To get some MOTH coins, you will need to go on the pancake swap website and find the exchange pool for MOTH/BNB</Subtitle>
                            <Subtitle>Until the coin goes public, you can track it on the Bsc scan</Subtitle>
                            <BtnWrap>
                                <ButtonLink to={''}
                                    href={'https://bscscan.com/token/0x10c2358006584C55BB8B0B9A621fFf2c3DF98C3F'}
                                    target='_blank'
                                    exact="true"
                                    primary="true"
                                    dark="true"
                                    dark2="true"
                                >
                                    View on Bsc Scan
                                </ButtonLink>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={Stars} alt={"claim"} type={'img/svg'}/> 
                        </ImgWrap>
                    </Column2>
                </InfoRow>
             </InfoWrapper>
        </InfoContainer>   
        </>
    )
}

export default BscSection