import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import Icon from "../../images/icons/mothGreen.png";
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavIcon,
    NavTempLogo
} from './NavBarElements';


const NavBar = ({ 
    toggle, 
    claimReward, 
    connectToMetaMask, 
    moth,
    countIsLive 
}) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo onClick={toggleHome}>
                            <NavIcon src={Icon} type="img/png" />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to='about'
                                smoth='true'
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-20}
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        {countIsLive ? 
                            <></>:
                            <NavItem>
                                <NavLinks 
                                    to='claim'
                                    smoth='true'
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={70}
                                >
                                    Claim
                                </NavLinks>
                            </NavItem>
                        }
                        <NavItem>
                            <NavLinks 
                                to='whitepaper'
                                smoth='true'
                                duration={500}
                                spy={true}
                                exact='true'
                            >
                                Whitepaper
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='discover'
                                smoth='true'
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={30}
                            >
                                Discover
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    {countIsLive ? 
                        <NavTempLogo onClick={toggleHome}>
                            MOTH
                        </NavTempLogo>:
                        <NavBtn>
                            <NavBtnLink to={''} onClick={moth === undefined ? connectToMetaMask : claimReward} >
                                {moth === undefined ? 'Connect' : 'Claim'}
                            </NavBtnLink>
                        </NavBtn>
                    }
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar