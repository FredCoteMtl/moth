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
    SubtitleSmall,
    ImgWrap,
    Img,
    InfoWrapper,
    BtnWrap
} from './PancakeElements'
import { default as Stars } from '../../images/splash/counting_stars.svg'
import {ButtonLink} from '../ButtonElements'



const PancakeSectionLive = () => { 

    return (
        <>
        <InfoContainer id='discover'>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Moth Coin is available Pancake Swap Dex</TopLine>
                            <Heading>Get it on the biggest decentralized exchange of the Binance Smart Chain</Heading>
                            <Subtitle>To get some MOTH coins, you need to go on pancakeswap website and find the exchange pool for BNB/MOTH</Subtitle>
                            <SubtitleSmall>Contract address: 0x151F29E356657c9ab3c5b953CE2a6af68f81Ed34</SubtitleSmall>
                            <BtnWrap>
                                <ButtonLink to={''}
                                    href={'https://pancakeswap.finance/'}
                                    target='_blank'
                                    exact="true"
                                    primary="true"
                                    dark="true"
                                    dark2="true"
                                >
                                    Go to Pancakeswap
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

export default PancakeSectionLive