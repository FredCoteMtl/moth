import React from 'react'
import { 
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarLink,
    SideBarWrapper,
    SideBarMenu
} from './SideBarElements'

const SideBarCount = ({ 
    isOpen, 
    toggle, 
}) => { return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about' onClick={toggle}>About</SideBarLink>
                    <SideBarLink to='whitepaper' onClick={toggle}>Whitepaper</SideBarLink>
                    <SideBarLink to='discover' onClick={toggle}>Discover</SideBarLink>  
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBarCount
