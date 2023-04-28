// Implement an NFT minter that creates standard ERC-721 tokens. Use of third-party libraries, e.g., Open Zeppelin, is allowed. (3 pts)
// • Implement the INFTMinter interface.
// • To start off your contract, you may build on top of this contract template.
// • The mint function creates a new NFT, assigns it to the requester address, and returns the current NFT id.
// • Each mint increases a variable (e.g., totalSupply) by one; the function getTotalSupply returns this value.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// Create contract > define Contract Name
interface INFTMINTER {

    // Mint a nft and send to _address.
    function mint(address _address) external payable returns (uint256);

    // Burn a nft.
    function burn(uint256 tokenId) external payable;

    // Flip sale status.
    function flipSaleStatus() external;

    // Get sale status.
    function getSaleStatus() external view returns (bool);

    // Withdraw all funds to owner.
    function withdraw(uint256 amount) external;

    // Get current price.
    function getPrice() external view returns (uint256);

    // Get total supply.
    function getTotalSupply() external view returns (uint256);

    // Get IPFS hash. 
    function getIPFSHash() external view returns (string memory);
}