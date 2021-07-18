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
    HeroSmall,
    RewardContainer,
    RCpercent,
    RCtext,
    RChow,
    Link
} from './HeroElements';
import Video from '../../videos/data.mp4';
import ImageBg from '../../images/backgrounds/dataBg.JPG'
import { Button } from '../ButtonElements';
import { browserName, browserVersion } from 'react-device-detect';
import WHITEPAPER from '../../documents/WHITEPAPER.pdf';



const HeroSectionLive = ({ 
    mothMaster,
    connectToMetaMask 
    }) => {

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
                    {mothMaster === undefined ? 
                        "" :
                        <>
                            <RewardContainer>
                                <RCpercent>
                                    {(parseInt(mothMaster) / (400000000000 * 10 ** 18) * 100).toString().slice(0,4)}%
                                </RCpercent>
                                <RCtext>
                                    Gain On The Next Claim!
                                </RCtext>
                            </RewardContainer>
                            <RChow>
                                How is this possible? read the <Link href={WHITEPAPER} target={'_blank'}>whitepaper</Link>
                            </RChow>
                        </>
                    }
                                
                    <HeroBtnWraper>
                        {mothMaster === undefined ?
                            <Button 
                                to={''}
                                primary='true'
                                dark='false'
                                dark2='true'
                                onClick={connectToMetaMask}
                            >
                                Connect To MetaMask
                            </Button>:
                            <Button 
                                to={'claim'}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                primary="true"
                                dark="true"
                                dark2="true"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}>
                                Get started {hover ? <ArrowForward /> : <ArrowRight />}
                            </Button> 
                        }
                    </HeroBtnWraper>
                    <HeroSmall>Contract address: 0x151F29E356657c9ab3c5b953CE2a6af68f81Ed34</HeroSmall>
                </HeroContent>
            </HeroContainer>  
        </>
    )
}

export default HeroSectionLive
