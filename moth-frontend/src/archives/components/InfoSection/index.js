import React from 'react'
import { Button } from '../ButtonElements'
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
} from './InfoElements'
//import { default as img } from '../../images/splash/launch_day.svg';


const InfoSection = ({
        lightBg,
        id,
        imgStart,
        topLine,
        headline,
        subLightText,
        headLightText,
        description,
        buttonLabel,
        img,
        alt,
        primary,
        dark,
        dark2,
    }) => { 

    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading headLightText={headLightText}>{headline}</Heading>
                            <Subtitle subLightText={subLightText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to={'home'}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 0 : 1}
                                    dark2={dark2 ? 1 : 0}
                                >
                                    {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} type={'img/svg'}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
             </InfoWrapper>
        </InfoContainer>   
        </>
    )
}

export default InfoSection
