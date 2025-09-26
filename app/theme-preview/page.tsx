'use client';

import { useTheme } from '../components/ThemeProvider';
import { AppShell } from '../components/AppShell';
import { AssetCard } from '../components/AssetCard';
import { SecurityStatusIndicator } from '../components/SecurityStatusIndicator';
import { NotificationBanner } from '../components/NotificationBanner';
import { InsuranceToggle } from '../components/InsuranceToggle';

export default function ThemePreview() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'default', name: 'BridgeGuard (Default)' },
    { id: 'base', name: 'Base' },
    { id: 'celo', name: 'Celo' },
    { id: 'solana', name: 'Solana' },
    { id: 'coinbase', name: 'Coinbase' },
  ];

  const sampleAsset = {
    symbol: 'USDC',
    name: 'USD Coin',
    balance: '1,250.00',
    value: '$1,250.00',
    change: '+$12.50',
    changePercent: 1.01,
    chain: 'Base'
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gradient mb-2">
            Theme Preview
          </h1>
          <p className="text-muted">
            Preview different themes for BridgeGuard
          </p>
        </div>

        {/* Theme Selector */}
        <div className="metric-card">
          <h2 className="text-lg font-semibold text-fg mb-4">Select Theme</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => setTheme(themeOption.id as any)}
                className={`p-3 rounded-lg border transition-all duration-200 ${
                  theme === themeOption.id
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-white/10 bg-surface/50 text-fg hover:bg-surface/70'
                }`}
              >
                {themeOption.name}
              </button>
            ))}
          </div>
        </div>

        {/* Component Previews */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-fg">Component Previews</h2>

          {/* Buttons */}
          <div className="metric-card">
            <h3 className="font-semibold text-fg mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
            </div>
          </div>

          {/* Notifications */}
          <div className="space-y-4">
            <NotificationBanner
              variant="info"
              title="Information"
              message="This is an informational message."
            />
            <NotificationBanner
              variant="warning"
              title="Warning"
              message="This is a warning message."
            />
            <NotificationBanner
              variant="error"
              title="Error"
              message="This is an error message."
            />
          </div>

          {/* Asset Card */}
          <AssetCard asset={sampleAsset} variant="summary" />

          {/* Security Indicators */}
          <div className="metric-card">
            <h3 className="font-semibold text-fg mb-4">Security Status</h3>
            <div className="space-y-4">
              <SecurityStatusIndicator
                variant="good"
                label="All Systems Operational"
                description="Everything is working perfectly"
              />
              <SecurityStatusIndicator
                variant="warning"
                label="Minor Issues Detected"
                description="Some services experiencing delays"
              />
              <SecurityStatusIndicator
                variant="danger"
                label="Critical Alert"
                description="Immediate attention required"
              />
            </div>
          </div>

          {/* Insurance Toggle */}
          <InsuranceToggle
            transactionValue={1000}
            onToggle={(enabled, premium) => {
              console.log('Insurance:', enabled, premium);
            }}
          />

          {/* Form Elements */}
          <div className="metric-card">
            <h3 className="font-semibold text-fg mb-4">Form Elements</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Text input"
                className="input-field"
              />
              <select className="select-field">
                <option>Select option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
