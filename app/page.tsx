'use client';

import { useEffect, useState } from 'react';
import { AppShell } from './components/AppShell';
import { AssetCard } from './components/AssetCard';
import { SecurityStatusIndicator } from './components/SecurityStatusIndicator';
import { NotificationBanner } from './components/NotificationBanner';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { TrendingUp, Shield, ArrowLeftRight, DollarSign } from 'lucide-react';

interface Asset {
  symbol: string;
  name: string;
  balance: string;
  value: string;
  change: string;
  changePercent: number;
  chain: string;
}

interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  changePercent: number;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Dashboard() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [metrics, setMetrics] = useState<DashboardMetric[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading dashboard data
    const loadDashboardData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAssets([
        {
          symbol: 'USDC',
          name: 'USD Coin',
          balance: '1,250.00',
          value: '$1,250.00',
          change: '+$12.50',
          changePercent: 1.01,
          chain: 'Base'
        },
        {
          symbol: 'ETH',
          name: 'Ethereum',
          balance: '0.5',
          value: '$1,125.00',
          change: '-$25.00',
          changePercent: -2.17,
          chain: 'Ethereum'
        },
        {
          symbol: 'WBTC',
          name: 'Wrapped Bitcoin',
          balance: '0.025',
          value: '$1,075.00',
          change: '+$50.00',
          changePercent: 4.88,
          chain: 'Arbitrum'
        }
      ]);

      setMetrics([
        {
          label: 'Total Portfolio',
          value: '$3,450.00',
          change: '+$37.50',
          changePercent: 1.10,
          icon: DollarSign
        },
        {
          label: 'Active Bridges',
          value: '3',
          change: '+1',
          changePercent: 50.0,
          icon: ArrowLeftRight
        },
        {
          label: 'Security Score',
          value: '98/100',
          change: '+2',
          changePercent: 2.08,
          icon: Shield
        }
      ]);

      setIsLoading(false);
    };

    loadDashboardData();
  }, []);

  if (isLoading) {
    return (
      <AppShell>
        <div className="space-y-6">
          {/* Loading skeleton */}
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-surface rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-surface rounded-lg"></div>
              ))}
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-surface rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">
            Welcome to BridgeGuard
          </h1>
          <p className="text-muted max-w-md mx-auto">
            Seamlessly bridge your tokens across chains with post-transaction insurance and real-time security monitoring.
          </p>
          
          {/* Wallet Connection */}
          <div className="mt-6">
            <Wallet>
              <ConnectWallet>
                <div className="flex items-center space-x-3 bg-surface/50 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3">
                  <Avatar className="w-8 h-8" />
                  <Name className="font-medium" />
                </div>
              </ConnectWallet>
            </Wallet>
          </div>
        </div>

        {/* Security Alert */}
        <NotificationBanner
          variant="info"
          title="All Systems Operational"
          message="All integrated bridges are operating normally with no security incidents detected."
        />

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isPositive = metric.changePercent >= 0;
            
            return (
              <div key={index} className="metric-card">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className={`text-sm font-medium ${
                    isPositive ? 'text-success' : 'text-danger'
                  }`}>
                    {isPositive ? '+' : ''}{metric.changePercent}%
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted">{metric.label}</p>
                  <p className="text-2xl font-bold text-fg">{metric.value}</p>
                  <p className={`text-sm ${
                    isPositive ? 'text-success' : 'text-danger'
                  }`}>
                    {metric.change} today
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfolio Overview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-fg">Your Assets</h2>
            <button className="text-sm text-accent hover:text-accent/80 font-medium">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {assets.map((asset, index) => (
              <AssetCard
                key={index}
                asset={asset}
                variant="summary"
                onClick={() => {
                  // Navigate to asset details
                  console.log('Navigate to asset details:', asset.symbol);
                }}
              />
            ))}
          </div>
        </div>

        {/* Bridge Health Status */}
        <div className="metric-card">
          <h3 className="font-semibold text-fg mb-4">Bridge Health Status</h3>
          <div className="space-y-4">
            <SecurityStatusIndicator
              variant="good"
              label="LayerZero Bridge"
              description="Operating normally with 99.9% uptime"
            />
            <SecurityStatusIndicator
              variant="good"
              label="Wormhole Bridge"
              description="All systems operational"
            />
            <SecurityStatusIndicator
              variant="warning"
              label="cBridge"
              description="Experiencing minor delays (avg. 8 min)"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="btn-primary">
            <ArrowLeftRight className="w-4 h-4 mr-2" />
            Bridge Tokens
          </button>
          <button className="btn-secondary">
            <Shield className="w-4 h-4 mr-2" />
            View Security
          </button>
        </div>
      </div>
    </AppShell>
  );
}
