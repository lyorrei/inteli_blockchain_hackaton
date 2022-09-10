// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./campaign.sol";

/*
CampaignFactory contract: master contract of the project. handle deployment of other
contracts
    . state variables
        - owner: EOA, represents project mngmt
        - arrCampaigns: array that contains a struct of names and address of all campaings that happend and actives.
    . methods: create one campaign and get all campaigns from the array.
*/

contract CampaignFactory {
    address owner;
    address public activeCampaign;

    struct Campaigns {
        string name;
        address endereco;
    }

    Campaigns[] arrCampaigns;

    constructor() {
        owner = msg.sender;
    }

    modifier isOwner() {
        require(owner == msg.sender, "Not owner");
        _;
    }

    function createCampaing(
        string memory _name,
        string memory _ipfsLink,
        address payable _donationReceiver,
        string memory _color,
        uint256 _expirationDate
    ) public isOwner {
        Campaing campaing = new Campaing(
            owner,
            _name,
            _ipfsLink,
            _donationReceiver,
            _color,
            _expirationDate
        );
        arrCampaigns.push(Campaigns(_name, address(campaing)));
        activeCampaign = address(campaing);
    }

    function getCampaings() public view isOwner returns (Campaigns[] memory) {
        return arrCampaigns;
    }
}
