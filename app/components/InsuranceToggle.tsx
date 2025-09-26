'use client';

import { Shield, DollarSign } from 'lucide-react';
import { useState } from 'react';

interface InsuranceToggleProps {
  variant?: 'default';
  transactionValue: number;
  onToggle: (enabled: boolean, premium: number) => void;
}

export function InsuranceToggle({ 
  variant = 'default', 
  transactionValue,
  onToggle 
}: InsuranceToggleProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  
  // Calculate premium as 0.5% of transaction value
  const premium = transactionValue * 0.005;
  const coverageAmount = transactionValue;

  const handleToggle = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    onToggle(newState, newState ? premium : 0);
  };

  return (
    <div className="metric-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isEnabled 
              ? 'bg-accent/20 text-accent' 
              : 'bg-surface text-muted'
          }`}>
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-fg">Post-Transaction Insurance</h3>
            <p className="text-sm text-muted">Protect your bridged assets</p>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
            isEnabled ? 'bg-accent' : 'bg-surface border border-white/20'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
              isEnabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {isEnabled && (
        <div className="space-y-3 animate-slide-up">
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Insurance Details</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Coverage Amount:</span>
                <span className="font-medium text-fg">${coverageAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Premium (0.5%):</span>
                <span className="font-medium text-accent">${premium.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Coverage Period:</span>
                <span className="font-medium text-fg">30 days</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted">
            Insurance covers losses due to bridge exploits or failures after successful transaction completion.
          </p>
        </div>
      )}
    </div>
  );
}
