// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';

/*
Campaign contract: manage one campaign and track all donations
    . state variables
        - owner: EOA == Our neighbors mngmt
        - campaignName: name of the campaign
        - status: in time campaign's status
        - receiver: who is gone benefit from the donations address
        - expirationData: when the campaign is gonna finish
        - color: page's theme
        - donors: array that contain all information from people that have donated
        - biggestDonation: struct that contains the address and amount that has been donated of someone.
    . methods: mint nft for each donation, mint nft when the event is closed for the biggest donor and set the campaign status', register in state variable the donors' information, get the amount of eth the campaign has,
*/
contract Campaign is ERC1155 {
    address public owner;

    string public campaignName;

    bool public status;

    address payable public receiver;

    uint256 public expirationDate;

    string public color;

    string public description;

    struct Donors {
        string name;
        string number;
        address endereco;
        uint amount;
    }

    struct BiggestDonation {
        string name;
        address endereco;
        uint256 amount;
    }

    BiggestDonation public biggestDonation;

    Donors[] public donors;

    event Received(address, uint256);

    modifier isOwner() {
        require(owner == msg.sender, 'Not owner');
        _;
    }

    constructor(
        address _owner,
        string memory _campaignName,
        string memory _ipfsLink,
        address payable _receiver,
        string memory _color,
        uint256 _expirationDate,
        string memory _description
    ) ERC1155(_ipfsLink) {
        owner = _owner;
        campaignName = _campaignName;
        status = true;
        receiver = _receiver;
        color = _color;
        expirationDate = _expirationDate;
        description =_description;
    }

    function addDonation(
        string memory _name,
        string memory _number,
        address _endereco
    ) external payable {
        require(status == true && msg.value > 0, 'This campaign is not active');
        _mint(msg.sender, 1, 1, '');
        if (msg.value > biggestDonation.amount) {
            biggestDonation.endereco = msg.sender;
            biggestDonation.amount = msg.value;
            biggestDonation.name = _name;
        }
        donors.push(Donors(_name, _number, _endereco, msg.value));
        emit Received(msg.sender, msg.value);
    }

    function getDonors() public view returns (Donors[] memory) {
        return donors;
    }

    function getBalance() public view returns (uint256) {
        return uint(address(this).balance);
    }

    function endCampaign() external payable isOwner {
        require(
            block.timestamp >= expirationDate && status == true,
            'You cannot finish the campaign yet'
        );
        receiver.transfer(getBalance());
        if (biggestDonation.endereco != address(0)) {
            _mint(biggestDonation.endereco, 2, 1, '');
        }
        status = false;
    }
}
