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
} from '../HeroSectionLive/HeroElements';
import Video from '../../videos/data.mp4';
import ImageBg from '../../images/backgrounds/dataBg.JPG'
import { Button } from '../ButtonElements';
import { browserName, browserVersion } from 'react-device-detect';



const HeroSectionCount = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {

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
                    <HeroP>Its comming!</HeroP>
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
                    </TimerContainer>
                    <HeroBtnWraper> 
                        <Button 
                            dark='true'
                            primary = 'true'
                            to={'about'} 
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}>
                            Learn more {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWraper>
                    <HeroSmall>Contract address: 0x10c2358006584C55BB8B0B9A621fFf2c3DF98C3F</HeroSmall>
                </HeroContent>
            </HeroContainer>  
        </>
    )
}

export default HeroSectionCount
