import React, {useState, useEffect} from 'react';
import getBlockchain from '../ethereum';
import SideBarLive from '../components/SideBarLive';
import NavBarLive from '../components/NavBarLive';
import HeroSectionLive from '../components/HeroSectionLive';
import Footer from '../components/Footer';
import AboutSectionLive from '../components/AboutSectionLive';
import WhitepaperSection from '../components/WhitepaperSection';
import DiscoverSection from '../components/DiscoverSection';
import MothSection from '../components/MothSection';
import LogoSection from '../components/LogoSection';
import CreatorSection from '../components/CreatorSection';
import { ethers } from 'ethers'
import detectEthereumProvider from '@metamask/detect-provider';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen)};

    const [user, setUser] = useState(undefined);
    const [moth, setMoth] = useState(undefined); 							
    const [mothMaster, setMothMaster] = useState(undefined);
    const [userBal, setUserBal] = useState(undefined);
    const [lastClaim, setLastClaim] = useState(undefined);

    useEffect(() => {
        const init = async () => {
            const { moth } = await getBlockchain();
            setMoth(moth);

            let provider = await detectEthereumProvider();
            await provider.request({ method: 'eth_requestAccounts' });
            provider = new ethers.providers.Web3Provider(provider);
            const signer = provider.getSigner();
            setUser(signer);
            
            const mothMaster = await moth.mothMasterBal();
            const userBal = await moth.balanceOf(signer.getAddress());
            const lastClaim = await moth.lastClaimOf(signer.getAddress());
            
            setMothMaster(mothMaster.toString());
            setUserBal(userBal.toString());
            setLastClaim(lastClaim.toString());
        };
        init();
    }, []);

    const connectToMetaMask = async e => {
        e.preventDefault();
        const { moth } = await getBlockchain();
        setMoth(moth);

        let provider = await detectEthereumProvider();
        await provider.request({ method: 'eth_requestAccounts' });
        provider = new ethers.providers.Web3Provider(provider);
        const signer = provider.getSigner();
        setUser(signer);
        
        const mothMaster = await moth.mothMasterBal();
        const userBal = await moth.balanceOf(signer.getAddress());
        const lastClaim = await moth.lastClaimOf(signer.getAddress());
        
        setMothMaster(mothMaster.toString());
        setUserBal(userBal.toString());
        setLastClaim(lastClaim.toString());
    };
    

    const claimReward = async e => {
        e.preventDefault();
        try {
            const tx = await moth.getReward();
            await tx.wait();
        } catch (e) {
            alert('You can only claim once every 24h if you have 100 moths');
        }
        

        const newMothMaster = await moth.mothMasterBal();
        const userBal = await moth.balanceOf(user.getAddress());
        const lastClaim = await moth.lastClaimOf(user.getAddress());
        
        setMothMaster(newMothMaster.toString());
        setUserBal(userBal.toString());
        setLastClaim(lastClaim.toString());
    };

    return (
        <>
            <SideBarLive 
                isOpen={isOpen} 
                toggle={toggle} 
                claimReward={claimReward}
            />

            <NavBarLive 
                toggle={toggle} 
                claimReward={claimReward} 
                connectToMetaMask={connectToMetaMask}
                moth={moth}
            />

            <HeroSectionLive 
                mothMaster={mothMaster}
                connectToMetaMask={connectToMetaMask}
            />

            <LogoSection />
          
            <AboutSectionLive />
            
            <MothSection 
                moth={moth} 
                mothMaster={mothMaster}
                claimReward={claimReward} 
                connectToMetaMask={connectToMetaMask}
                userBal={userBal}
                lastClaim={lastClaim}
            />

            <WhitepaperSection />

            <DiscoverSection />

            <CreatorSection />

            <LogoSection />
            
            <Footer />
        </>
    )
};
export default Home
