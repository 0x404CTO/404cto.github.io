/* ============================================
   404CTO V2 - Fake Deployment Logs Background
   ============================================ */

import { fakeTimestamp, randomFrom, randomInt } from './utils.js';

const LOG_LINES = [
    '[{t}] forge build --optimize... compiling 42 contracts',
    '[{t}] WARNING: deployer.balance < gas estimate. vibes only.',
    '[{t}] ✓ contract verified on etherscan. somehow.',
    '[{t}] wallet-crafter: crypto.getRandomValues() go brrr...',
    '[{t}] ✓ no internet detected. perfect for key generation.',
    '[{t}] emit Rebrand("SingularityLab", "404CTO");',
    '[{t}] ✓ require(shipped, "we always ship")',
    '[{t}] forge test... 0 tests found. deploying anyway.',
    '[{t}] git push origin main --force (do not tell the auditor)',
    '[{t}] deploying at 3AM because gas is cheap and vibes are immaculate',
    '[{t}] 404: sleep not found in msg.sender',
    '[{t}] ✓ x-shield: blocked 42069 approve() phishing txs today',
    '[{t}] WARNING: coffee.balanceOf(dev) == 0',
    '[{t}] ✓ VRF callback received. dice roll: fair ✓',
    '[{t}] eth_call to check if blockchain is still there... yes.',
    '[{t}] initializing ChaosEngine.sol v2.0...',
    '[{t}] ✓ selfdestruct() removed. we are immutable now.',
    '[{t}] ERROR: deployed to mainnet instead of testnet. again.',
    '[{t}] WARNING: this contract works and nobody knows why',
    '[{t}] ✓ x-shield: rekt 1337 wallet drainers this week',
    '[{t}] gas: 7 gwei. finally affordable. shipping everything.',
    '[{t}] ✓ shipped feature nobody asked for. TVL went up.',
    '[{t}] ✓ all systems nominal. chaos level: type(uint256).max',
    '[{t}] deploying hotfix for the hotfix... pragma solidity ^0.8.28;',
    '[{t}] WARNING: developer entered flow state. do not disturb.',
    '[{t}] ✓ 7 chains supported. multichain degen lifestyle.',
    '[{t}] ✓ zero VC money spent. infinite onchain chaos generated.',
    '[{t}] cast send --rpc-url mainnet --private-key $YOLO',
    '[{t}] ✓ slither analysis: 0 high, 3 medium, 42 "informational"',
    '[{t}] WARNING: reentrancy guard triggered. working as intended.',
    '[{t}] ✓ merkle proof verified. you are on the allowlist, ser.',
    '[{t}] dapp.meme: new token-bound app deployed. chaos spreading.',
    '[{t}] ✓ walletcrafter: 6 chains, 0 servers, 1 paranoid dev.',
    '[{t}] ERROR: tried to explain Web3 to normie. stack overflow.',
    '[{t}] ✓ commit msg: "fixed everything (lie)"',
    '[{t}] WARNING: production database is a JSON file. it works.',
    '[{t}] ✓ PR merged: "add chaos" → approved by ByteCat',
    '[{t}] building the internet nobody asked for... ETA: never.',
    '[{t}] ✓ 0xAdam found 3 vulns before breakfast. normal tuesday.',
    '[{t}] ERROR: roadmap.md not found. shipping anyway.',
    '[{t}] ✓ dapp.meme: BSC / ETH / Base / HyperEVM all green.',
    '[{t}] WARNING: code review replaced by "looks good to me 👍"',
    '[{t}] ✓ another day, another chain. multichain is a lifestyle.',
    '[{t}] revert("we don\'t do rollbacks. only roll forwards.")',
    '[{t}] ✓ chaos index: 420. all systems nominal.',
];

/**
 * Generate a batch of log lines with random timestamps
 */
function generateLogBatch(count = 40) {
    const lines = [];
    for (let i = 0; i < count; i++) {
        const template = randomFrom(LOG_LINES);
        lines.push(template.replace('{t}', fakeTimestamp()));
    }
    return lines.join('\n');
}

/**
 * Initialize the fake logs background in the hero section
 */
export function initFakeLogs() {
    const container = document.getElementById('hero-logs');
    if (!container) return;

    // Generate enough lines to fill the scroll animation
    const batch1 = generateLogBatch(50);
    const batch2 = generateLogBatch(50);

    // Duplicate for seamless loop
    container.textContent = batch1 + '\n' + batch2 + '\n' + batch1 + '\n' + batch2;
}
