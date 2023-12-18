# Test for Blockchain


## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js and npm installed
- Hardhat installed (for deploying the contract)


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Install dependencies:
   ```
   cd contract
   npm install
   ```

3. Deploy the smart contract
   ```
   npx hardhat run scripts/deploy.js --network bsct
   ```
4. Replace contract Address in web3Event/script.js 

5. Docker Build and Run
   ```
   docker build -t event .
   docker run -d event
   ```



