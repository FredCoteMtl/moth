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
} from './AboutElements'
import { default as Yacht } from '../../images/splash/Yacht.svg'
import {Button} from '../ButtonElements'



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
                            <BtnWrap>
                                <Button 
                                    to={'discover'}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    primary="true"
                                    dark="true"
                                    dark2="true"
                                >
                                    Get it on pancakeswap
                                </Button>
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
