'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

interface Asset {
  symbol: string;
  name: string;
  balance: string;
  value: string;
  change: string;
  changePercent: number;
  chain: string;
  logo?: string;
}

interface AssetCardProps {
  asset: Asset;
  variant?: 'default' | 'summary';
  onClick?: () => void;
}

export function AssetCard({ asset, variant = 'default', onClick }: AssetCardProps) {
  const isPositive = asset.changePercent >= 0;
  
  if (variant === 'summary') {
    return (
      <div 
        className="metric-card cursor-pointer hover:scale-[1.02] transition-transform duration-200"
        onClick={onClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-accent">{asset.symbol[0]}</span>
            </div>
            <div>
              <h3 className="font-semibold text-fg">{asset.symbol}</h3>
              <p className="text-sm text-muted">{asset.chain}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-fg">{asset.value}</p>
            <div className={`flex items-center space-x-1 text-sm ${
              isPositive ? 'text-success' : 'text-danger'
            }`}>
              {isPositive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span>{Math.abs(asset.changePercent)}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="metric-card cursor-pointer hover:scale-[1.02] transition-transform duration-200"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
            <span className="text-lg font-bold text-accent">{asset.symbol[0]}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-fg">{asset.symbol}</h3>
            <p className="text-sm text-muted">{asset.name}</p>
            <p className="text-xs text-muted bg-surface/50 px-2 py-1 rounded-full mt-1">
              {asset.chain}
            </p>
          </div>
        </div>
        <div className={`status-indicator ${
          isPositive ? 'status-good' : 'status-danger'
        }`}>
          {isPositive ? '+' : ''}{asset.changePercent}%
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted">Balance</span>
          <span className="font-medium text-fg">{asset.balance} {asset.symbol}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted">Value</span>
          <span className="font-semibold text-accent">{asset.value}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted">24h Change</span>
          <div className={`flex items-center space-x-1 ${
            isPositive ? 'text-success' : 'text-danger'
          }`}>
            {isPositive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="font-medium">{asset.change}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
