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

    struct Campaigns {
        string name;
        address endereco;
    }

    arrCampaigns[] public campanhas;

    constructor() {
        owner = msg.sender;
    }

    modifier isOwner() {
        require(owner == msg.sender, "Not owner");
        _;
    }

    function createCampaing(string memory _name) public isOwner {
        Campaing campaing = new Campaing(owner);
        Campaigns newCampaing = Campaigns(_name, address(campaing));
        arrCampaigns.push(newCampaing);
    }

    function getCampains() public view isOwner returns (Campaigns[]) {
        return arrCampaigns;
    }
}
