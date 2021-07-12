# Moth Coin 
## contract and frontend

### INFORMATION
Contract address: 0x151F29E356657c9ab3c5b953CE2a6af68f81Ed34  
Website: <https://mothmaster.com>  
  
Name = "moth";  
Symbol = "MOTH";  
Decimals = 18;  
TotalSupply = 400000000000 * 10 ** 18;  

### INTRO 
(from whitepaper)
Launching in the summer of 2021, Moth coin is a fast growing BEP-20 cryptocurrency accessible to everyone.
Our easy to use defi product is built to reward the active members of its community.
Its subtle but efficient redistribution system allows the holders to grow their moth balance with interesting annual returns.
The system was first inspired by the safemoon cryptocurrency.
We believe the percentage tax system on every transaction is a fair way to redistribute wealth in an even way.
But we also believe the most active and invested ones should have the possibility to seek a competitive advantage over the passive holders.
This is why our system does not automatically distribute the tax to every olders. Instead, the system stacks all the tax returns in a smart contract with a claim function.
To get the rewards, the users simply have to call this function and their share of the moth-master will automatically be sent to their accounts.

### HOW TO CLAIM
There are 2 conditions to claim:
1. You must have at least 100 moth (don't forget the 18 decimals, you really need 100*10**18)
2. Your last claim was more than 24h ago or it's your first time (if you never claimed before)

Once these 2 conditions are meet, a user can claim his share of the mothmaster acc (the moth balance of the mothmaster is stored at the contracts address). 
To do this, you can find the contract [on the bsc scan](https://bscscan.com/token/0x10c2358006584C55BB8B0B9A621fFf2c3DF98C3F#writeContract) and then go to the getReward() method and call it.
The other option is to simply go on the [mothmaster](https://mothmaster.com) website, connect with metamask and hit the claim button.

the reward is calculated as:
reward = balance[mothmaster] * balance[user] / totalsupply

### DISCLAIMER
We do not recommend that any cryptocurrency should be
bought, sold, or held by you. Do conduct your due diligence and
consult your financial advisor before making any financial
decisions. By purchasing Moth Coin, you agree that you are not
purchasing a security or investment and you agree to hold the
team harmless and not liable for any losses or taxes you may
incur.

