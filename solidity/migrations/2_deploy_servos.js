const ServosNft = artifacts.require("./ServosNft.sol");

module.exports = function (deployer) {
  deployer.deploy(ServosNft);
};
