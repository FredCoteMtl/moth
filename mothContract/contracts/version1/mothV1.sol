// SPDX-License-Identifier: Moth
pragma solidity ^0.8.2;
import './IBEP20.sol';

contract BEP20Token is IBEP20 {
    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowance;
    mapping(address => uint) public lastClaims;
    
    uint public totalSupply = 400000000000 * 10 ** 18;
    string public name = "moth";
    string public symbol = "MOTH";
    uint public decimals = 18;
    
    address payable mothMaster = payable(address(0xE62d6a0d8AE6fACe262D8c25C1669A7720A0c444));
    address payable coreDevAcc = payable(address(0x92b508bF870997964c270c03Ca9668e03aFE0bD5));
    address payable marketingAcc = payable(address(0xAe137987Cc60Fc5959b86621C3f77cE5A0Da4848));

    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);
    event Claim(address indexed claimer, uint indexed date, uint value);
    event Contribute(address indexed contributor, uint indexed date, uint value);
    

    constructor() {
        balances[msg.sender] = totalSupply;
        
        //send 20% of tokens to the coreDev acc
        transfer(coreDevAcc, totalSupply * 20 / 100);
        
        // send 10% of tokens to the marketingAcc
        transfer(marketingAcc, totalSupply * 10 / 100);
    }
    
    function totalSupply() external view returns (uint256) {
        return totalSupply;
    }
    
    function getReward() public returns(bool){
        if(lastClaimOf(msg.sender) == 0){ lastClaims[msg.sender] = block.timestamp - 1 days; }
        require(lastClaimOf(msg.sender)+ 1 days <= block.timestamp, 'Can only claim once a day, try again later');
        require(balanceOf(msg.sender) >= 100, 'Must own at least 100 MOTH');
        lastClaims[msg.sender] = block.timestamp;
        uint rewardValue = balances[mothMaster] * balanceOf(msg.sender) / totalSupply;
        balances[msg.sender] += rewardValue * 95 / 100 ;
        balances[mothMaster] += rewardValue * 5 / 100;
        balances[mothMaster] -= rewardValue;
        emit Claim(msg.sender, block.timestamp, rewardValue * 95 / 100);
        emit Contribute(msg.sender, block.timestamp, rewardValue * 5 / 100);
        return true;
    }
    
    

    function balanceOf(address owner) public view returns(uint) {
        return balances[owner];
    }
    
    function lastClaimOf(address owner) public view returns(uint) {
        return lastClaims[owner];
    }

    function transfer(address to, uint value) public returns(bool) {
        require(balanceOf(msg.sender) >= value, 'balance too low');
        balances[to] += value * 95 / 100 ;
        balances[mothMaster] += value * 5 / 100;
        balances[msg.sender] -= value;
        emit Transfer(msg.sender, to, value);
        emit Contribute(msg.sender, block.timestamp, value * 5 / 100);
        return true;
    }

    function transferFrom(address from, address to, uint value) public returns(bool) {
        require(balanceOf(from) >= value, 'balance too low');
        require(allowance[from][msg.sender] >= value, 'allowance too low');
        balances[to] += value * 95 / 100 ;
        balances[mothMaster] += value * 5 / 100;
        balances[from] -= value;
        emit Transfer(from, to, value);
        emit Contribute(from, block.timestamp, value * 5 / 100);
        return true;   
    }

    function approve(address spender, uint value) public returns (bool) {
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }
}