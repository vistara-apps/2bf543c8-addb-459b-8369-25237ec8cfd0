'use client';

import { useState } from 'react';
import { ArrowUpDown, Loader2, ExternalLink } from 'lucide-react';
import { InsuranceToggle } from './InsuranceToggle';

interface Chain {
  id: string;
  name: string;
  symbol: string;
  logo?: string;
}

interface Token {
  symbol: string;
  name: string;
  balance: string;
  decimals: number;
}

interface BridgeFormProps {
  variant?: 'default';
}

export function BridgeForm({ variant = 'default' }: BridgeFormProps) {
  const [fromChain, setFromChain] = useState<Chain>({ id: 'base', name: 'Base', symbol: 'BASE' });
  const [toChain, setToChain] = useState<Chain>({ id: 'ethereum', name: 'Ethereum', symbol: 'ETH' });
  const [selectedToken, setSelectedToken] = useState<Token>({ symbol: 'USDC', name: 'USD Coin', balance: '1,250.00', decimals: 6 });
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [insuranceEnabled, setInsuranceEnabled] = useState(false);
  const [insurancePremium, setInsurancePremium] = useState(0);

  const chains: Chain[] = [
    { id: 'base', name: 'Base', symbol: 'BASE' },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
    { id: 'arbitrum', name: 'Arbitrum', symbol: 'ARB' },
    { id: 'optimism', name: 'Optimism', symbol: 'OP' },
    { id: 'polygon', name: 'Polygon', symbol: 'MATIC' },
  ];

  const tokens: Token[] = [
    { symbol: 'USDC', name: 'USD Coin', balance: '1,250.00', decimals: 6 },
    { symbol: 'ETH', name: 'Ethereum', balance: '0.5', decimals: 18 },
    { symbol: 'WBTC', name: 'Wrapped Bitcoin', balance: '0.025', decimals: 8 },
  ];

  const handleSwapChains = () => {
    const temp = fromChain;
    setFromChain(toChain);
    setToChain(temp);
  };

  const handleMaxAmount = () => {
    setAmount(selectedToken.balance.replace(',', ''));
  };

  const handleBridge = async () => {
    if (!amount || parseFloat(amount) <= 0) return;
    
    setIsLoading(true);
    
    // Simulate bridge transaction
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsLoading(false);
    // Reset form or show success state
  };

  const transactionValue = parseFloat(amount) || 0;
  const estimatedFee = transactionValue * 0.001; // 0.1% bridge fee
  const totalCost = transactionValue + estimatedFee + (insuranceEnabled ? insurancePremium : 0);

  return (
    <div className="space-y-6">
      {/* Bridge Form */}
      <div className="metric-card">
        <h2 className="text-xl font-semibold text-fg mb-6">Bridge Tokens</h2>
        
        {/* From Chain */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted mb-2">From</label>
            <select 
              value={fromChain.id}
              onChange={(e) => setFromChain(chains.find(c => c.id === e.target.value) || chains[0])}
              className="select-field"
            >
              {chains.map((chain) => (
                <option key={chain.id} value={chain.id}>
                  {chain.name} ({chain.symbol})
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSwapChains}
              className="p-2 bg-surface border border-white/10 rounded-full hover:bg-surface/80 transition-colors duration-200"
            >
              <ArrowUpDown className="w-4 h-4 text-muted" />
            </button>
          </div>

          {/* To Chain */}
          <div>
            <label className="block text-sm font-medium text-muted mb-2">To</label>
            <select 
              value={toChain.id}
              onChange={(e) => setToChain(chains.find(c => c.id === e.target.value) || chains[0])}
              className="select-field"
            >
              {chains.map((chain) => (
                <option key={chain.id} value={chain.id}>
                  {chain.name} ({chain.symbol})
                </option>
              ))}
            </select>
          </div>

          {/* Token Selection */}
          <div>
            <label className="block text-sm font-medium text-muted mb-2">Token</label>
            <select 
              value={selectedToken.symbol}
              onChange={(e) => setSelectedToken(tokens.find(t => t.symbol === e.target.value) || tokens[0])}
              className="select-field"
            >
              {tokens.map((token) => (
                <option key={token.symbol} value={token.symbol}>
                  {token.symbol} - {token.name}
                </option>
              ))}
            </select>
          </div>

          {/* Amount Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-muted">Amount</label>
              <span className="text-xs text-muted">
                Balance: {selectedToken.balance} {selectedToken.symbol}
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="input-field pr-16"
                step="any"
                min="0"
              />
              <button
                onClick={handleMaxAmount}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-accent hover:text-accent/80 font-medium"
              >
                MAX
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Summary */}
      {amount && parseFloat(amount) > 0 && (
        <div className="metric-card animate-slide-up">
          <h3 className="font-semibold text-fg mb-4">Transaction Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted">Amount:</span>
              <span className="font-medium text-fg">{amount} {selectedToken.symbol}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Bridge Fee (0.1%):</span>
              <span className="font-medium text-fg">${estimatedFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Estimated Time:</span>
              <span className="font-medium text-fg">2-5 minutes</span>
            </div>
            {insuranceEnabled && (
              <div className="flex justify-between">
                <span className="text-muted">Insurance Premium:</span>
                <span className="font-medium text-accent">${insurancePremium.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-white/10 pt-3">
              <div className="flex justify-between">
                <span className="font-medium text-fg">Total Cost:</span>
                <span className="font-semibold text-accent">${totalCost.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Insurance Toggle */}
      {amount && parseFloat(amount) > 0 && (
        <InsuranceToggle
          transactionValue={transactionValue}
          onToggle={(enabled, premium) => {
            setInsuranceEnabled(enabled);
            setInsurancePremium(premium);
          }}
        />
      )}

      {/* Bridge Button */}
      <button
        onClick={handleBridge}
        disabled={!amount || parseFloat(amount) <= 0 || isLoading}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Processing Bridge...</span>
          </>
        ) : (
          <>
            <span>Bridge Tokens</span>
            <ExternalLink className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Security Notice */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <p className="text-sm text-primary">
          <strong>Security Notice:</strong> All bridge transactions are monitored in real-time. 
          You'll receive alerts if any security issues are detected with the selected bridge.
        </p>
      </div>
    </div>
  );
}
