import React from 'react'
import WHITEPAPER from '../../documents/WHITEPAPER.pdf';
import DISCLAIMER from '../../documents/DISCLAIMER.pdf';
import { 
    FaDiscord,
    FaTwitter,
    FaTelegramPlane
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksWraper,
    FooterLinksContainer,
    FooterLinkItem,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    ContractCode
} from "./FooterElements"
import { browserName, browserVersion } from 'react-device-detect';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWraper>
                        <FooterLinkItem>
                            <FooterLinkTitle>Information</FooterLinkTitle>
                            <FooterLink href={WHITEPAPER} target='_blank'>Whitepaper</FooterLink>
                            <FooterLink href="https://github.com/Nakamoth" target="_blank">Git</FooterLink>
                            <FooterLink href={DISCLAIMER} target="_blank">Disclaimer</FooterLink>
                            <FooterLink href="https://pancakeswap.finance/" target="_blank">Pancake Swap</FooterLink>
                            <FooterLink href="https://bscscan.com/" target="_blank">Bsc Scan</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink href="https://t.me/joinchat/h7lMawPKhn4xMTRh" target="_blank">Telegram</FooterLink>
                            <FooterLink href="https://mobile.twitter.com/CoinMoth" target="_blank">Twitter</FooterLink>
                            <FooterLink href="https://discord.gg/TXKKRWZe" target="_blank">Discord</FooterLink>
                            <FooterLink href="https://t.me/joinchat/FpDvuTo-q6A0YTVh" target="_blank">Join the team</FooterLink>
                            <FooterLink href='https://drive.google.com/file/d/1jUUXb3Y-3Els-wv5_VfmxoHMl6rMFW5V/view'>Download icon</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Sources</FooterLinkTitle>
                            <FooterLink href="https://undraw.co/illustrations" target="_blank">unDraw</FooterLink>
                            <FooterLink href="https://www.flaticon.com/free-icon/moth_1357433?term=moth&page=1&position=16&page=1&position=16&related_id=1357433&origin=search" target="_blank">Icon</FooterLink>
                            <FooterLink href="https://unsplash.com" target="_blank">unsplash</FooterLink>
                            <FooterLink href="https://cryptologos.cc" target="_blank">crypto logos</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWraper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            MOTH
                        </SocialLogo>
                        <WebsiteRights>
                            moth © {new Date().getFullYear()} All rights reserved. <br />
                            <ContractCode>0x151F29E356657c9ab3c5b953CE2a6af68f81Ed34</ContractCode>
                            <ContractCode>{'Browser: '+browserName+' '+browserVersion}</ContractCode>
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://t.me/joinchat/h7lMawPKhn4xMTRh" target="_blank" aria-label="Telegram">
                                <FaTelegramPlane />
                            </SocialIconLink>
                            <SocialIconLink href="https://mobile.twitter.com/CoinMoth" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="https://discord.gg/TXKKRWZe" target="_blank" aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
