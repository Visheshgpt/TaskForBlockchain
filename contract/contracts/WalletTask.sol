// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


contract WalletTask {

    address public owner;
    mapping(address => bool) public wallets;

    event WalletAdded(address indexed wallet);

    modifier onlyOwner() {
        require(msg.sender == owner, "Unauthorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addWallet(address _wallet) external onlyOwner {
        require(_wallet != address(0), "Invalid wallet address");
        require(!wallets[_wallet], "Wallet already listed");

        wallets[_wallet] = true;
        emit WalletAdded(_wallet);
    }

    function isWalletListed(address _wallet) external view returns (bool) {
        return wallets[_wallet];
    }
}
