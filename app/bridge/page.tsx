'use client';

import { AppShell } from '../components/AppShell';
import { BridgeForm } from '../components/BridgeForm';
import { SecurityStatusIndicator } from '../components/SecurityStatusIndicator';
import { NotificationBanner } from '../components/NotificationBanner';

export default function BridgePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gradient mb-2">
            Cross-Chain Bridge
          </h1>
          <p className="text-muted">
            Securely transfer your tokens across different blockchain networks
          </p>
        </div>

        {/* Security Status */}
        <NotificationBanner
          variant="info"
          title="Bridge Security Active"
          message="Real-time monitoring enabled. You'll be alerted of any security issues."
        />

        {/* Bridge Form */}
        <BridgeForm />

        {/* Available Bridges */}
        <div className="metric-card">
          <h3 className="font-semibold text-fg mb-4">Available Bridges</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-surface/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <SecurityStatusIndicator
                  variant="good"
                  label="LayerZero"
                  showIcon={false}
                />
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-fg">Fee: 0.1%</p>
                <p className="text-xs text-muted">~2-3 min</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-surface/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <SecurityStatusIndicator
                  variant="good"
                  label="Wormhole"
                  showIcon={false}
                />
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-fg">Fee: 0.15%</p>
                <p className="text-xs text-muted">~3-5 min</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-surface/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <SecurityStatusIndicator
                  variant="warning"
                  label="cBridge"
                  showIcon={false}
                />
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-fg">Fee: 0.08%</p>
                <p className="text-xs text-muted">~5-8 min</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bridge Tips */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <h4 className="font-medium text-primary mb-2">💡 Bridge Tips</h4>
          <ul className="text-sm text-primary/80 space-y-1">
            <li>• Always double-check the destination address</li>
            <li>• Consider insurance for large transactions</li>
            <li>• Monitor bridge health before transferring</li>
            <li>• Keep transaction receipts for insurance claims</li>
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
