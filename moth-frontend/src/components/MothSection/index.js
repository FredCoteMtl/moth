import React from 'react'
import ClaimSection from '../ClaimSection'
import ConnectSection from '../ConnectSection'

const MothSection = ({
    moth,
    mothMaster,
    claimReward, 
    connectToMetaMask,
    userBal,
    lastClaim
    }) => { return (
        <>
            {moth === undefined ? 
                <ConnectSection 
                    connectToMetaMask={connectToMetaMask}
                />  :
                <ClaimSection 
                    mothMaster={mothMaster}
                    claimReward={claimReward}
                    userBal={userBal}
                    lastClaim={lastClaim}
                />
            }
        </>
    )
}

export default MothSection
