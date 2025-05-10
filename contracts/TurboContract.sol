// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TurboContract is ERC20 {
    constructor(uint256 initialSupply) ERC20("TurboContract", "TUR") {
        _mint(msg.sender, initialSupply * 10 ** uint256(decimals()));
    }
}