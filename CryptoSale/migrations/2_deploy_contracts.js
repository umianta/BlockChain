const Migrations = artifacts.require("DappToken.sol");
const DappTokenSale=artifacts.require("DappTokenSale.sol")
module.exports = function (deployer) {
  deployer.deploy(Migrations ,1000000).then(function(){
    //Token price is 0.001 ether
    var tokenPrice =1000000000000000;
    return deployer.deploy(DappTokenSale,Migrations.address,tokenPrice);
  });
  
};
