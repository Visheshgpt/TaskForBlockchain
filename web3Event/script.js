const { Web3 } = require("web3");

// ABIS
const contractABI = require("./abi.json");

// ADDRESSES
// replace contract address here
const CONTRACT_ADDRESS = "";

const web3 = new Web3("wss://lively-tiniest-mansion.bsc-testnet.quiknode.pro/d73af593a59c89ff9a35f67e57d8c3de331b9742/");

const walletTaskContract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);

async function main() {

  const event = walletTaskContract.events.WalletAdded({
    fromBlock: 'latest'
  });
  
  event.on("connected", (subscriptionId) => {
    console.log("subscriptionId", subscriptionId);
  })

  event.on('data', (event) => {
    console.log('New wallet added:', event.returnValues.wallet);

    // do some action
  });

  event.on('changed', (event) => {
    // remove event
  })

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
