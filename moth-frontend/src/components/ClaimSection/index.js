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
    MothMasterDisplay,
    MothInfoWrapper
} from './ClaimSectionElements'
import { default as Confirmed } from '../../images/splash/Confirmed.svg'

//{userBal.lengh > 18 ? userBal.slice(0,-18)+','+userBal.slice(-18,-1) : 'moin de un' }

const ClaimSection = ({
        mothMaster,
        claimReward,
        userBal,
        lastClaim
    }) => { 

    return (
        <>
        <InfoContainer id='claim'>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Claim your rewards</TopLine>
                            <Heading>You are now connected to the Moth Master smart contract</Heading>
                            <Subtitle>Hit the claim button to get your part of the loot!</Subtitle>
                            {mothMaster === undefined | 
                             userBal === undefined | 
                             lastClaim === undefined ? 
                                <></>:
                                <MothInfoWrapper>
                                    <Subtitle>{'You currently have '}{userBal.length > 18 ? userBal.slice(0,-18)+','+userBal.slice(-18,-16) : 'moin de un' }{' moth'}</Subtitle>
                                    <Subtitle>{lastClaim !== '0' ? 'your last claim was '+lastClaim : 'You never claimed before'}</Subtitle>
                                    <MothMasterDisplay>{mothMaster.slice(0,-18)+ ' MOTH'}</MothMasterDisplay>
                                </MothInfoWrapper>
                            }
                            <BtnWrap>
                                <Button 
                                    to={''}
                                    primary='true'
                                    dark='false'
                                    dark2='true'
                                    onClick={claimReward}
                                >
                                    Claim
                                </Button>                                
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={Confirmed} alt={"claim"} type={'img/svg'}/> 
                        </ImgWrap>
                    </Column2>
                </InfoRow>
             </InfoWrapper>
        </InfoContainer>   
        </>
    )
}

export default ClaimSection
