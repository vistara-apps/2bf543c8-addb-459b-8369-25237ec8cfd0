export const SUPPORTED_CHAINS = {
  base: {
    id: 'base',
    name: 'Base',
    symbol: 'BASE',
    rpcUrl: 'https://mainnet.base.org',
    blockExplorer: 'https://basescan.org',
  },
  ethereum: {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    rpcUrl: 'https://mainnet.infura.io/v3/',
    blockExplorer: 'https://etherscan.io',
  },
  arbitrum: {
    id: 'arbitrum',
    name: 'Arbitrum',
    symbol: 'ARB',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    blockExplorer: 'https://arbiscan.io',
  },
  optimism: {
    id: 'optimism',
    name: 'Optimism',
    symbol: 'OP',
    rpcUrl: 'https://mainnet.optimism.io',
    blockExplorer: 'https://optimistic.etherscan.io',
  },
  polygon: {
    id: 'polygon',
    name: 'Polygon',
    symbol: 'MATIC',
    rpcUrl: 'https://polygon-rpc.com',
    blockExplorer: 'https://polygonscan.com',
  },
} as const;

export const SUPPORTED_TOKENS = {
  USDC: {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    addresses: {
      base: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      ethereum: '0xA0b86a33E6441b8C4505B4c4c5B4c4c4c4c4c4c4',
      arbitrum: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      optimism: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      polygon: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    },
  },
  ETH: {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: 18,
    addresses: {
      base: '0x4200000000000000000000000000000000000006',
      ethereum: '0x0000000000000000000000000000000000000000',
      arbitrum: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      optimism: '0x4200000000000000000000000000000000000006',
      polygon: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
  },
  WBTC: {
    symbol: 'WBTC',
    name: 'Wrapped Bitcoin',
    decimals: 8,
    addresses: {
      base: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
      ethereum: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      arbitrum: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
      optimism: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
      polygon: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    },
  },
} as const;

export const BRIDGE_PROVIDERS = {
  layerzero: {
    id: 'layerzero',
    name: 'LayerZero',
    fee: 0.001, // 0.1%
    estimatedTime: '2-3 minutes',
    securityScore: 98,
  },
  wormhole: {
    id: 'wormhole',
    name: 'Wormhole',
    fee: 0.0015, // 0.15%
    estimatedTime: '3-5 minutes',
    securityScore: 96,
  },
  cbridge: {
    id: 'cbridge',
    name: 'cBridge',
    fee: 0.0008, // 0.08%
    estimatedTime: '5-8 minutes',
    securityScore: 94,
  },
  hop: {
    id: 'hop',
    name: 'Hop Protocol',
    fee: 0.0012, // 0.12%
    estimatedTime: '3-6 minutes',
    securityScore: 95,
  },
} as const;

export const INSURANCE_CONFIG = {
  premiumRate: 0.005, // 0.5% of transaction value
  coveragePeriod: 30, // days
  minCoverage: 100, // $100 minimum
  maxCoverage: 1000000, // $1M maximum
} as const;

export const API_ENDPOINTS = {
  basescan: 'https://api.basescan.org/api',
  etherscan: 'https://api.etherscan.io/api',
  coingecko: 'https://api.coingecko.com/api/v3',
} as const;
