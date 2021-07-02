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
    HeroSmall
} from './HeroElements';
import Video from '../../videos/data.mp4';
import ImageBg from '../../images/backgrounds/dataBg.JPG'
import { Button } from '../ButtonElements';
import { browserName, browserVersion } from 'react-device-detect';



const HeroSectionLive = ({ mothMaster }) => {

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
                    <HeroP> Get some MOTH today and start claiming rewards right away!</HeroP> 
                    <HeroP>
                        {mothMaster === undefined ? 
                            "" : 
                            mothMaster.toString().slice(0,-18)+ " moths available to claim!"
                        }
                    </HeroP>
                    <HeroBtnWraper>
                        <Button 
                            dark='true'
                            primary = 'true'
                            to={''} 
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}>
                            Get started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWraper>
                    <HeroSmall>Contract address: 0x10c2358006584C55BB8B0B9A621fFf2c3DF98C3F</HeroSmall>
                </HeroContent>
            </HeroContainer>  
        </>
    )
}

export default HeroSectionLive
