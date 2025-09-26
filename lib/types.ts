export interface User {
  userId: string;
  walletAddress: string;
  linkedChains: string[];
  insurancePolicies: InsurancePolicy[];
}

export interface Bridge {
  bridgeId: string;
  name: string;
  supportedChains: string[];
  status: 'operational' | 'degraded' | 'down';
  securityScore: number;
  fee: number;
  estimatedTime: string;
}

export interface Transaction {
  transactionId: string;
  userId: string;
  fromChain: string;
  toChain: string;
  token: string;
  amount: string;
  timestamp: string;
  bridgeId: string;
  status: 'pending' | 'completed' | 'failed';
  txHash?: string;
}

export interface InsurancePolicy {
  policyId: string;
  transactionId: string;
  userId: string;
  coverageAmount: number;
  premium: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'expired' | 'claimed';
}

export interface Asset {
  symbol: string;
  name: string;
  balance: string;
  value: string;
  change: string;
  changePercent: number;
  chain: string;
  contractAddress?: string;
  decimals: number;
}

export interface SecurityEvent {
  id: string;
  bridge: string;
  type: 'info' | 'warning' | 'critical';
  title: string;
  description: string;
  timestamp: string;
  resolved: boolean;
  affectedChains?: string[];
}

export interface BridgeHealthStatus {
  bridgeId: string;
  name: string;
  status: 'good' | 'warning' | 'danger';
  uptime: string;
  lastIncident: string;
  securityScore: number;
  totalVolume: string;
  supportedChains: string[];
}
