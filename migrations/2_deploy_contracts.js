var simpleSmartContract = artifacts.require("./SimpleSmartContract.sol");

module.exports = function(deployer) {
  deployer.deploy(simpleSmartContract);
};