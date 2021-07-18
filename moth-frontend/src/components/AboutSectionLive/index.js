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
    BtnWrap,
    SubtitleSmall
} from './AboutElements'
import { default as Yacht } from '../../images/splash/Yacht.svg'
import {ButtonLink} from '../ButtonElements'



const AboutSection = () => { 

    return (
        <>
        <InfoContainer id='about'>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Competitive Token Distribution</TopLine>
                            <Heading>The Moth Coin is live on Pancakeswap</Heading>
                            <Subtitle>Moth coin is a fast growing BEP-20 cryptocurrency accessible to everyone.</Subtitle>
                            <Subtitle>A tax of 5% is applyed to every transaction and sent to the moth master. Every day, people can claim their share of the lot according to the size of their moth holdings.</Subtitle>
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
                            <Img src={Yacht} alt={"claim"} type={'img/svg'}/> 
                        </ImgWrap>
                    </Column2>
                </InfoRow>
             </InfoWrapper>
        </InfoContainer>   
        </>
    )
}

export default AboutSection
