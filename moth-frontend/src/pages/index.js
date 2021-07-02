import React, {useState, useEffect} from 'react';
import getBlockchain from '../ethereum';
import SideBar from '../components/SideBar';
import Nav from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ClaimSection from '../components/ClaimSection'
import AboutSection from '../components/AboutSection';
import WhitepaperSection from '../components/WhitepaperSection';
import BscSection from '../components/BscSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen)};

    const [moth, setMoth] = useState(undefined); 							
    const [mothMaster, setMothMaster] = useState(undefined);
  
    /*
    useEffect(() => {
      const init = async () => {
        const { moth } = await getBlockchain();
        const mothMaster = await moth.mothMasterBal();
        setMoth(moth);
        setMothMaster(mothMaster);
      };
      init();
    }, []);
    */

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [CountIsLIve, setCountIsLive] = useState(true);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("Jully 17, 2021 00:00:00").getTime();//Jully 17, 2021 00:00:00

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        setCountIsLive(false);
        clearInterval(interval);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

    const connectToMetaMask = async e => {
      e.preventDefault();
      const { moth } = await getBlockchain();
      const mothMaster = await moth.mothMasterBal();
      setMoth(moth);
      setMothMaster(mothMaster);
    }


    const claimReward = async e => {
      e.preventDefault();
      const tx = await moth.getReward();
      await tx.wait();
      const newMothMaster = await moth.mothMasterBal();
      setMothMaster(newMothMaster);
    };

    return (
        <>
          <SideBar 
              isOpen={isOpen} 
              toggle={toggle} 
              claimReward={claimReward}
              countIsLive={CountIsLIve}
          />
          <Nav 
              toggle={toggle} 
              claimReward={claimReward} 
              connectToMetaMask={connectToMetaMask}
              moth={moth}
              countIsLive={CountIsLIve}
            />
            <HeroSection 
              mothMaster={mothMaster} 
              timerDays={timerDays} 
              timerHours={timerHours}
              timerMinutes={timerMinutes}
              timerSeconds={timerSeconds}
              CountIsLIve={CountIsLIve}
            /> 
            <AboutSection />
            <WhitepaperSection />
            {CountIsLIve ?
              <></> :
              <ClaimSection 
                moth={moth} 
                mothMaster={mothMaster}
                claimReward={claimReward} 
                connectToMetaMask={connectToMetaMask} 
              />
            }

            <BscSection />
            
            <Footer />
        </>
    )
};
export default Home
