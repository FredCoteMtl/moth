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
    InfoWrapper,
} from './ConnectSectionElements'
import { default as Traveling } from '../../images/splash/Traveling.svg'

const ConnectSection = ({
        connectToMetaMask
    }) => { 

    return (
        <>
        <InfoContainer id='claim'>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Connect To MetaMask</TopLine>
                            <Heading>This website needs MetaMask to function properly</Heading>
                            <Subtitle>Simply click the connect to metamask button and confirm on the pop-up window. MetaMask will never share your private key with us or any party involved in this system.</Subtitle>
                            <BtnWrap>
                                <Button 
                                    to={''}
                                    primary='true'
                                    dark='false'
                                    dark2='true'
                                    onClick={connectToMetaMask}
                                >
                                    Connect To MetaMask
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={Traveling} alt={"connect"} type={'img/svg'}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
             </InfoWrapper>
        </InfoContainer>   
        </>
    )
}

export default ConnectSection
