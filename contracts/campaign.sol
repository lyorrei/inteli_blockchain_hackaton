// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

/*
Person contract: manage person profile and track activities
    . state variables
        - owner: EOA == Inteli mngmt
        - checkIn: log check-ins in a given day
        - checkOut: log check-outs in a given day
        - activities: log activities done by person
    . methods: create and retrieve events and register in state variable
*/
contract Campaing is ERC1155 {
    address public owner;

    string campaignName;

    string status;

    string standartIpfsLink;

    string landIpfsLink;

    address public receiver;

    uint256 public expirationDate;

    string public color;

    struct Donors {
        string name;
        string number;
        address endereco;
    }

    struct BiggestDonation {
        address endereco;
        uint256 ammount;
    }

    BiggestDonation biggestDonation;

    Donors[] public donors;

    event Received(address, uint256);

    modifier isOwner() {
        require(owner == msg.sender, "Not owner");
        _;
    }

    constructor(
        address _owner,
        string memory _campaignName,
        string memory _ipfsLink,
        string memory _receiver,
        string memory _color
    ) {
        owner = _owner;
        campaignName = _campaignName;
        status = "active";
        ipfsLink = _ipfsLink;
        receiver = _receiver;
        color = _color;
    }

    receive() external payable ERC1155(standartIpfsLink) {
        require(
            status == "active" && msg.value > 0,
            "this campaign is not active"
        );
        _mint(msg.sender, 1, 1, "");
        if (msg.value > biggestDonation.ammount) {
            biggestDonation.endereco = msg.sender;
            biggestDonation.ammount = msg.value;
        }
        emit Received(msg.sender, msg.value);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function endCampaign() external payable isOwner ERC1155(landIpfsLink) {
        require(
            block.timestamp >= expirationDate,
            "You cannot finish the campaign yet"
        );
        receiver.transfer(getBalance());
        _mint(biggestDonation.endereco, 2, 1, "");
        status = "disabled";
    }
}
