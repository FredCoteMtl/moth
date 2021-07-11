import React, { useState, useEffect } from 'react'
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
    MothInfoWrapper,
    Check,
    QtyCheck,
    Wraper,
    Icon,
    Green,
    Red,
    BalShow,
    TimeCheck,
    Gain
} from './ClaimSectionElements'
import { default as Confirmed } from '../../images/splash/Confirmed.svg'
import { default as Checker } from '../../images/icons/checked.png'
import { default as Cancel } from '../../images/icons/cancel.png'

const ClaimSection = ({
        mothMaster,
        claimReward,
        userBal,
        lastClaim
    }) => {

    const [hours, setHours] = useState();
    const [mins, setMins] = useState();
    const [secs, setSecs] = useState();

    const formatBal = (bal) => {
        if(userBal.length > 18){
            return userBal.slice(0,-18)+','+userBal.slice(-18,-16);
        } else {
            let b = '000000000000000000'+userBal
            return b.slice(-19,-18)+','+b.slice(-18,-16);
        }
    }

    let interval;

    const startTimer = () => {
        const nextClaim = parseInt(lastClaim.toString()+'000') + 86400000;

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = nextClaim - now;
            const h = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const s = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
            } 
            else {
                setHours(h);
                setMins(m);
                setSecs(s);
            }
        });
    };

    useEffect(() => {
        if(lastClaim !== undefined){
            startTimer();
        } 
    });

    return (
        <>
        <InfoContainer id='claim'>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Claim your rewards</TopLine>
                            <Heading>You are now connected to the Moth Master smart contract</Heading>
                            {mothMaster === undefined | 
                             userBal === undefined | 
                             lastClaim === undefined ? 
                                <></>:
                                <>
                                    <MothInfoWrapper>
                                        <QtyCheck>
                                            {parseInt(userBal) >= 100 * 10 ** 18 ?
                                                <Wraper>
                                                    <Check>
                                                        <Icon src={Checker} alt={'valid'} type={'img/png'}/>
                                                        <Green>You have more than 100 moth</Green>
                                                    </Check>
                                                    <BalShow>You have: {formatBal(userBal)} moth</BalShow>
                                                </Wraper>
                                                :
                                                <Wraper>
                                                    <Check>
                                                        <Icon src={Cancel} alt={'valid'} type={'img/png'}/>
                                                        <Red>You have less than 100 moth (Need 100 to claim)</Red>
                                                    </Check>
                                                    <BalShow>You have: {formatBal(userBal)} moth</BalShow>
                                                </Wraper>
                                            }
                                        </QtyCheck>

                                        <TimeCheck>
                                            {parseInt(lastClaim) === 0 | 
                                            parseInt(lastClaim+'000') + 86400000 < new Date().getTime() ?
                                                <Wraper>
                                                    <Check>
                                                        <Icon src={Checker} alt={'valid'} type={'img/png'}/>
                                                        <Green>You can claim now (once every 24h)</Green>
                                                    </Check>
                                                    <BalShow>
                                                        {parseInt(lastClaim) === 0 ?
                                                            'You never claimed before':
                                                            'Your last claim was more than 24h ago'
                                                        }
                                                    </BalShow>
                                                </Wraper> :
                                                <Wraper>
                                                    <Check>
                                                        <Icon src={Cancel} alt={'valid'} type={'img/png'}/>
                                                        <Red>You can only claim once every 24h</Red>
                                                    </Check>
                                                    <BalShow>
                                                        You can claim again in {hours}h{mins}m{secs}s
                                                    </BalShow>
                                                </Wraper>
                                            }
                                        </TimeCheck>  
                                    </MothInfoWrapper>
                                    <Subtitle>The Moth Master now has</Subtitle> 
                                    <MothMasterDisplay>
                                        {mothMaster.slice(0,-18)+','+mothMaster.slice(-18,-16)+' MOTH'}
                                    </MothMasterDisplay>
                                    <Subtitle>available to claim !</Subtitle>
                                    <Gain>
                                        You could get a gain of {(parseInt(mothMaster) / (400000000000 * 10 ** 18) * 100).toString().slice(0,4)}% on your next claim!
                                    </Gain>
                                </>
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
