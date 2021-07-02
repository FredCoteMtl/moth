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
    MothMasterDisplay
} from './ClaimSectionElements'
import { default as Traveling } from '../../images/splash/Traveling.svg'
import { default as Confirmed } from '../../images/splash/Confirmed.svg'



const ClaimSection = ({
        moth,
        mothMaster,
        claimReward, 
        connectToMetaMask
    }) => { 

    return (
        <>
        <InfoContainer id='claim'>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            
                            {moth === undefined ? 
                                <TopLine>Connect To MetaMask</TopLine> : 
                                <TopLine>Claim your rewards</TopLine>
                            }
                            
                            {moth === undefined ? 
                                <Heading>This website needs MetaMask to function properly</Heading> : 
                                <Heading>You are now connected to the Moth Master</Heading>
                            }
                            
                            {moth === undefined ? 
                                <Subtitle>Simply click the connect to metamask button and confirm on the pop-up window. MetaMask will never share your private key with us or any party involved in this system.</Subtitle> :
                                <Subtitle>Hit the claim button to get your part of the loot! You need at least 100 MOTH and can claim once every 24h!</Subtitle>
                            }

                            {moth === undefined ? 
                                <></>:
                                <MothMasterDisplay>{mothMaster === undefined ? "" : mothMaster.toString().slice(0,-18)+ " MOTH"}</MothMasterDisplay>
                            }


                            <BtnWrap>
                            {moth === undefined ? 
                                <Button 
                                    to={''}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary='true'
                                    dark='false'
                                    dark2='true'
                                    onClick={connectToMetaMask}
                                >
                                    Connect To MetaMask
                                </Button> :
                                <Button 
                                    to={''}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary='true'
                                    dark='false'
                                    dark2='true'
                                    onClick={claimReward}
                                >
                                    Claim
                                </Button>
                            }
                                
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            {moth === undefined ? 
                                <Img src={Traveling} alt={"connect"} type={'img/svg'}/> :
                                <Img src={Confirmed} alt={"claim"} type={'img/svg'}/> 
                            }
                        </ImgWrap>
                    </Column2>
                </InfoRow>
             </InfoWrapper>
        </InfoContainer>   
        </>
    )
}

export default ClaimSection
