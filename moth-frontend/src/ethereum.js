import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import Moth from './contracts/Moth.json';//'./contracts/Moth.json' 	

const getBlockchain = () =>
    new Promise( async (resolve, reject) => {
        let provider = await detectEthereumProvider();
        if(provider) {
            await provider.request({ method: 'eth_requestAccounts' });
            const networkId = await provider.request({ method: 'net_version' })
            provider = new ethers.providers.Web3Provider(provider);
            const signer = provider.getSigner();
            let moth = undefined;
            try {
                moth = new Contract(
                    Moth.networks[networkId].address, 	
                    Moth.abi,										
                    signer
                );
            } catch (TypeError) {}
            if(moth === undefined){
                alert('Try again with Binance Smart Chain!')
                reject('Try again with Binance Smart Chain!');
            }
            resolve({moth});									
            return;
        }
        reject('Install Metamask');
    });

export default getBlockchain;