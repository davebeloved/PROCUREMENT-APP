
import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';



export const ProcurementContext = React.createContext();

const {ethereum} = window;







// if (accounts.length) 
//     setCurrentAccount(accounts[0]);

export const ProcurementProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = useState('');



    const checkIfWalletIsConnected = async () => {
        try {
                if (!ethereum) return alert('please install MetaMask');
                const accounts = await ethereum.request({method: 'eth_accounts'});

                if (accounts.length) {
                    setCurrentAccount(accounts[0]);
                  
                } else{
                   
                    console.log("No Account found"); 
                }

        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object.");
        }
     
      
    }


    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('please install MetaMask');
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
            window.location.reload();
        } catch (error) {
            window.location.reload();
            console.log(error);
            throw new Error("No Ethereum object.");
        }
    }
    const trackConnection = async()=> {
        if(!ethereum) return alert('ethereum is not present, please install metamask');
        ethereum.on('accountsChanged', (accounts)=>{
          if(accounts.length > 0){
            setCurrentAccount(accounts[0]);
            alert(`You Changed your Account to ${accounts[0]}`);
          }else {
            setCurrentAccount('');
           
          }
        } );
      }



   
 

    //  window.ethereum.on('accountsChanged', connectWallet);/
    // ethereum.on('chainChanged', chainChangedHandler);
    
    
    useEffect( () => {
        checkIfWalletIsConnected();
        trackConnection();
       
    }, []);
    
    return(
        <ProcurementContext.Provider value={{ connectWallet, currentAccount }}>
            {children}
        </ProcurementContext.Provider>
    );
}