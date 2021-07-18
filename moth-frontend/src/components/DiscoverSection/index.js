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
} from './DiscoverElements'
import { default as Stars } from '../../images/splash/counting_stars.svg'
import {ButtonLink} from '../ButtonElements'



const DiscoverSection = () => { 

    return (
        <>
        <InfoContainer id='discover'>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Discover Moth Coin</TopLine>
                            <Heading>Usefull links</Heading>
                            <ButtonLink
                                href={'https://poocoin.app/tokens/0x151f29e356657c9ab3c5b953ce2a6af68f81ed34'}
                                target='_blank'
                                to={''}
                                primary='true'
                                dark='false'
                                dark2='true'
                            >
                                Price Chart
                            </ButtonLink>
                            <Subtitle>
                                Track the price on Poo Coin app
                            </Subtitle>
                            
                            <ButtonLink
                                href={'https://bscscan.com/tx/0x5a9c352950da3e7e0f2219bcd66f5dbc551d18659c6e054c7e0a4d3739f20acd'}
                                target='_blank'
                                to={''}
                                primary='true'
                                dark='false'
                                dark2='true'
                            >
                                Proof of LP Tokens lock
                            </ButtonLink>
                            <Subtitle>See the transaction for LP token lock</Subtitle>

                            <ButtonLink
                                href={'https://t.me/MothCoin'}
                                target='_blank'
                                to={''}
                                primary='true'
                                dark='false'
                                dark2='true'
                            >
                                t.me/MothCoin
                            </ButtonLink>
                            <Subtitle>Join the Telegram community</Subtitle>
                            <SubtitleSmall>Contract address: 0x151F29E356657c9ab3c5b953CE2a6af68f81Ed34</SubtitleSmall>
                            
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

export default DiscoverSection