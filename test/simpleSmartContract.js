const SimpleSmartContract = artifacts.require('SimpleSmartContract');

// Similar to mocha
contract('SimpleSmartContract', ()=>{
    // Define test
    it('Should deploy smart contract properly', async() => {
        const simpleSmartContract = await SimpleSmartContract.deployed();
        // Deployed doesn't deploy the smart contract
        // It just returns a js object pointing to already deployed object
        // Migrations are used to deploy smart contracts.
        console.log(simpleSmartContract.address);
        assert(simpleSmartContract.address != '');
        // assert is necessary
    });
});

// Every contract block runs a different instance of smart contract