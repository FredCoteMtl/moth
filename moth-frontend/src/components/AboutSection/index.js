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
                            <Heading>Going public on Jully 17!</Heading>
                            <Subtitle>Moth coin is an easy to use BEP-20 cryptocurrency accessible to everyone.</Subtitle>
                            <br/>
                            <Subtitle>{'On the first phase of the project, 5% of the total circulating coins will be claimable. That is 20\u00a0million coins! Dont miss the chance!'}</Subtitle>
                            <Subtitle>A tax of 5% is applyed to every transaction and sent to the moth master. Every day, people can claim their share of the lot according to the size of their moth holdings.</Subtitle>
                            <BtnWrap>
                                <Button to={'whitepaper'}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    primary="true"
                                    dark="true"
                                    dark2="true"
                                >
                                    Learn more
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
