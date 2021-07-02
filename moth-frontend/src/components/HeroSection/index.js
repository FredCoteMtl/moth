import React, { useState } from 'react';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWraper,
    ArrowForward,
    ArrowRight,
    TimerContainer,
    TimerValue,
    TimerNumber,
    TimerSmallText,
    HeroSmall
} from './HeroElements';
import Video from '../../videos/data.mp4';
import ImageBg from '../../images/backgrounds/dataBg.JPG'
import { Button } from '../ButtonElements';
import { browserName, browserVersion } from 'react-device-detect';



const HeroSection = ({ mothMaster, timerDays, timerHours, timerMinutes, timerSeconds, CountIsLIve }) => {

    const [hover, setHover] = useState(false);
    const onHover = () => { setHover(!hover) };

    const [isRecentBrowser] = useState(browserName === "Chrome" & browserVersion >= "91");


    return (
        <>
            <HeroContainer>
                <HeroBg> 
                    {isRecentBrowser ? 
                        <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> :
                        <ImgBg src={ImageBg} type='img/JPG' />
                    };
                </HeroBg>
                <HeroContent>
                    <HeroH1> Follow The Light </HeroH1>
                    {CountIsLIve ? 
                        <HeroP>Its comming!</HeroP> : 
                        <HeroP> Get some MOTH today and start claiming rewards right away!</HeroP>
                    }
                    {CountIsLIve ? 
                        <TimerContainer>
                            <TimerValue>
                                <TimerNumber>
                                    {timerDays}
                                </TimerNumber>
                                <TimerSmallText>
                                    Days
                                </TimerSmallText>
                            </TimerValue>
                            <TimerValue>
                                <TimerNumber>
                                    {timerHours}
                                </TimerNumber>
                                <TimerSmallText>
                                    Hours
                                </TimerSmallText>
                            </TimerValue>
                            <TimerValue>
                                <TimerNumber>
                                    {timerMinutes}
                                </TimerNumber>
                                <TimerSmallText>
                                    Minutes
                                </TimerSmallText>
                            </TimerValue>
                            <TimerValue>
                                <TimerNumber>
                                    {timerSeconds}
                                </TimerNumber>
                                <TimerSmallText>
                                    Seconds
                                </TimerSmallText>
                            </TimerValue>
                        </TimerContainer> : 
                        <HeroP>
                            {mothMaster === undefined ? 
                                "" : 
                                mothMaster.toString().slice(0,-18)+ " moths available to claim!"
                            }
                        </HeroP>
                    }
                    <HeroBtnWraper>
                        {CountIsLIve ? 
                            <Button 
                                dark='true'
                                primary = 'true'
                                to={'about'} 
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}>
                                Learn more {hover ? <ArrowForward /> : <ArrowRight />}
                            </Button>:
                            <Button 
                                dark='true'
                                primary = 'true'
                                to={''} 
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}>
                                Get started {hover ? <ArrowForward /> : <ArrowRight />}
                            </Button>
                        }
                    </HeroBtnWraper>
                    <HeroSmall>Contract address: 0x10c2358006584C55BB8B0B9A621fFf2c3DF98C3F</HeroSmall>
                </HeroContent>
            </HeroContainer>  
        </>
    )
}

export default HeroSection
