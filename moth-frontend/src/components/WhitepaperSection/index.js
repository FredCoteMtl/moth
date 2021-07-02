import React from 'react'
import { ButtonLink } from '../ButtonElements'
import { 
    InfoContainer,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    InfoWrapper
} from './WhitepaperElements'
import { default as Investing } from '../../images/splash/Investing.svg'
import WHITEPAPER from '../../documents/WHITEPAPER.pdf';


const WhitepaperSection = ({
        alt,
    }) => { 

    return (
        <>
        <InfoContainer id='whitepaper'>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Learn more</TopLine>
                            <Heading>Read the whitepaper to learn more about the system</Heading>
                            <Subtitle>To have a full undertanding of the tax and claim system we recomend you read the whitepaper.</Subtitle>
                            <Subtitle>In this document you will also learn more about the initial distribution and the roadmap.</Subtitle>
                            <BtnWrap>
                                <ButtonLink href={WHITEPAPER}
                                    to={''}
                                    target="_blank"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={80}
                                    primary="true"
                                    dark="true"
                                    dark2="true"
                                >
                                    Open Whitepaper
                                </ButtonLink>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={Investing} alt={alt} type={'img/svg'}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
             </InfoWrapper>
        </InfoContainer>   
        </>
    )
}

export default WhitepaperSection
