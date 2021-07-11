pragma solidity 0.5.16;

interface IBEP20 {
  function totalSupply() external view returns (uint256);
  function decimals() external view returns (uint8);
  function symbol() external view returns (string memory);
  function name() external view returns (string memory);
  function getOwner() external view returns (address);
  function balanceOf(address account) external view returns (uint256);
  function transfer(address recipient, uint256 amount) external returns (bool);
  function allowance(address _owner, address spender) external view returns (uint256);
  function approve(address spender, uint256 amount) external returns (bool);
  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract Context {
  constructor () internal { }
  function _msgSender() internal view returns (address payable) { return msg.sender; }
  function _msgData() internal view returns (bytes memory) {
    this;
    return msg.data;
  }
}

library SafeMath {
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    require(c >= a, "SafeMath: addition overflow");
    return c;
  }
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    return sub(a, b, "SafeMath: subtraction overflow");
  }
  function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
    require(b <= a, errorMessage);
    uint256 c = a - b;
    return c;
  }
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) { return 0; }
    uint256 c = a * b;
    require(c / a == b, "SafeMath: multiplication overflow");
    return c;
  }
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    return div(a, b, "SafeMath: division by zero");
  }
  function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
    require(b > 0, errorMessage);
    uint256 c = a / b;
    return c;
  }
  function mod(uint256 a, uint256 b) internal pure returns (uint256) {
    return mod(a, b, "SafeMath: modulo by zero");
  }
  function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
    require(b != 0, errorMessage);
    return a % b;
  }
}

contract Ownable is Context {
  address private _owner;
  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  constructor () internal {
    address msgSender = _msgSender();
    _owner = msgSender;
    emit OwnershipTransferred(address(0), msgSender);
  }

  function owner() public view returns (address) { return _owner; }
  modifier onlyOwner() { require(_owner == _msgSender(), "Ownable: caller is not the owner") ; _ ; }
  function renounceOwnership() public onlyOwner { 
    emit OwnershipTransferred(_owner, address(0));
    _owner = address(0);
  }

  function transferOwnership(address newOwner) public onlyOwner {
    _transferOwnership(newOwner);
  }

  function _transferOwnership(address newOwner) internal {
    require(newOwner != address(0), "Ownable: new owner is the zero address");
    emit OwnershipTransferred(_owner, newOwner);
    _owner = newOwner;
  }
}

contract BEP20Token is Context, IBEP20, Ownable {
  using SafeMath for uint256;

  mapping (address => uint256) private _balances;
  mapping (address => mapping (address => uint256)) private _allowances;
  mapping(address => uint) private _lastClaims;

  uint256 private _totalSupply;
  uint8 private _decimals;
  string private _symbol;
  string private _name;
  
  address payable private _mothMaster;
  address payable private _coreDevAcc;
  address payable private _marketingAcc;

  constructor() public {
    _name = "moth";
    _symbol = "MOTH";
    _decimals = 18;
    _totalSupply = 400000000000 * 10 ** 18;
    _mothMaster = address(uint160(address(this)));
    _coreDevAcc = address(uint160(0x96c966D4a7987E2491d3324A413f54e7C8ac7572));
    _marketingAcc = address(uint160(0x19ae043C1EA64ddFFb240B08a4cD5C1A636FAE79));
    
    _balances[msg.sender] = _totalSupply;
    emit Transfer(address(0), msg.sender, _totalSupply);
    
    _transfer(msg.sender, _coreDevAcc, _totalSupply.mul(uint256(10)).div(uint256(100)));
    _transfer(msg.sender, _marketingAcc, _totalSupply.mul(uint256(5)).div(uint256(100)));
  }

  function getOwner() external view returns (address) { return owner(); }
  function decimals() external view returns (uint8) { return _decimals; }
  function symbol() external view returns (string memory) { return _symbol; }
  function name() external view returns (string memory) { return _name; }
  function totalSupply() external view returns (uint256) { return _totalSupply; }
  function balanceOf(address account) external view returns (uint256) { return _balances[account]; }
  function lastClaimOf(address account) public view returns(uint) { return _lastClaims[account]; }
  function mothMasterBal() public view returns(uint) { return _balances[_mothMaster]; }
  
  function transfer(address recipient, uint256 amount) external returns (bool) {
    _transfer(_msgSender(), recipient, amount);
    return true;
  }

  function allowance(address owner, address spender) external view returns (uint256) {
    return _allowances[owner][spender];
  }

  function approve(address spender, uint256 amount) external returns (bool) {
    _approve(_msgSender(), spender, amount);
    return true;
  }

  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) {
    _transfer(sender, recipient, amount);
    _approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, "BEP20: transfer amount exceeds allowance"));
    return true;
  }
  
  function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {
    _approve(_msgSender(), spender, _allowances[_msgSender()][spender].add(addedValue));
    return true;
  }

  function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {
    _approve(_msgSender(), spender, _allowances[_msgSender()][spender].sub(subtractedValue, "BEP20: decreased allowance below zero"));
    return true;
  }

  function _transfer(address sender, address recipient, uint256 amount) internal {
    require(sender != address(0), "BEP20: transfer from the zero address");
    require(recipient != address(0), "BEP20: transfer to the zero address");

    _balances[sender] = _balances[sender].sub(amount, "BEP20: transfer amount exceeds balance");
    
    uint256 amount95 = amount.mul(uint256(95)).div(uint256(100));
    _balances[recipient] = _balances[recipient].add(amount95);
    emit Transfer(sender, recipient, amount95);
    
    uint256 amount5 = amount.mul(uint256(5)).div(uint256(100));
    _balances[_mothMaster] = _balances[_mothMaster].add(amount5);
    emit Transfer(sender, _mothMaster, amount5);
  }

  function _approve(address owner, address spender, uint256 amount) internal {
    require(owner != address(0), "BEP20: approve from the zero address");
    require(spender != address(0), "BEP20: approve to the zero address");
    _allowances[owner][spender] = amount;
    emit Approval(owner, spender, amount);
  }
  
  function getReward() public returns(bool){
    if(_lastClaims[msg.sender] == 0){_lastClaims[msg.sender] = block.timestamp.sub(1 days);}
    require(_lastClaims[msg.sender].add(1 days) <= block.timestamp, 'Can only claim once a day, try again later');
    require(_balances[msg.sender] >= 100 * 10 ** 18, 'Must own at least 100 MOTH');
    _lastClaims[msg.sender] = block.timestamp;
    uint256 rewardValue = _balances[_mothMaster].mul(_balances[msg.sender]).div(_totalSupply);
    _transfer(_mothMaster, msg.sender, rewardValue);
    return true;
  }
}