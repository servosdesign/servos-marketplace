const ServosNft = artifacts.require("./ServosNft.sol");
const { assert } = require("chai");
const { toWei } = require("web3-utils");

contract("ServosNft", function (accounts) {
  let servosNftInstance;

  before(async function () {
    servosNftInstance = await ServosNft.deployed();
  });

  it("should be able to set floor price", async function () {
    const weiAmount = toWei("0.01", "ether");
    await servosNftInstance.setPrice(weiAmount, { from: accounts[0] });
    const floorPrice = await servosNftInstance.floor_price();
    assert.strictEqual(floorPrice.toString(), weiAmount);
  });
});