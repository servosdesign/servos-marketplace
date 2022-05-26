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

  it("should award an NFT", async function() {
    await servosNftInstance.awardItem(accounts[1], "https://images.web3auth.io/1", { from: accounts[1], value: toWei("0.01", "ether") });
    const balancer = await servosNftInstance.balanceOf(accounts[1]);
  });
});