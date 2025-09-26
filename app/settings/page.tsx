'use client';

import { useState } from 'react';
import { AppShell } from '../components/AppShell';
import { useTheme } from '../components/ThemeProvider';
import { Bell, Shield, Palette, User, ExternalLink } from 'lucide-react';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    security: true,
    transactions: true,
    marketing: false,
  });

  const themes = [
    { id: 'default', name: 'BridgeGuard (Default)', description: 'Professional finance theme' },
    { id: 'base', name: 'Base', description: 'Official Base theme' },
    { id: 'celo', name: 'Celo', description: 'Celo ecosystem theme' },
    { id: 'solana', name: 'Solana', description: 'Solana ecosystem theme' },
    { id: 'coinbase', name: 'Coinbase', description: 'Coinbase brand theme' },
  ];

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gradient mb-2">
            Settings
          </h1>
          <p className="text-muted">
            Customize your BridgeGuard experience
          </p>
        </div>

        {/* Profile Section */}
        <div className="metric-card">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold text-fg">Profile</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted mb-2">
                Display Name
              </label>
              <input
                type="text"
                placeholder="Enter your display name"
                className="input-field"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-muted mb-2">
                Email (for notifications)
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input-field"
              />
            </div>
          </div>
        </div>

        {/* Theme Selection */}
        <div className="metric-card">
          <div className="flex items-center space-x-3 mb-4">
            <Palette className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold text-fg">Theme</h2>
          </div>
          
          <div className="space-y-3">
            {themes.map((themeOption) => (
              <label
                key={themeOption.id}
                className="flex items-center space-x-3 p-3 bg-surface/50 rounded-lg cursor-pointer hover:bg-surface/70 transition-colors duration-200"
              >
                <input
                  type="radio"
                  name="theme"
                  value={themeOption.id}
                  checked={theme === themeOption.id}
                  onChange={(e) => setTheme(e.target.value as any)}
                  className="w-4 h-4 text-accent bg-surface border-white/20 focus:ring-accent/50"
                />
                <div className="flex-1">
                  <div className="font-medium text-fg">{themeOption.name}</div>
                  <div className="text-sm text-muted">{themeOption.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Notification Settings */}
        <div className="metric-card">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold text-fg">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Security Alerts</h3>
                <p className="text-sm text-muted">Get notified about bridge security issues</p>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, security: !prev.security }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                  notifications.security ? 'bg-accent' : 'bg-surface border border-white/20'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    notifications.security ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Transaction Updates</h3>
                <p className="text-sm text-muted">Get notified about your bridge transactions</p>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, transactions: !prev.transactions }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                  notifications.transactions ? 'bg-accent' : 'bg-surface border border-white/20'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    notifications.transactions ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Marketing Updates</h3>
                <p className="text-sm text-muted">Receive updates about new features</p>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, marketing: !prev.marketing }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                  notifications.marketing ? 'bg-accent' : 'bg-surface border border-white/20'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    notifications.marketing ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="metric-card">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold text-fg">Security</h2>
          </div>
          
          <div className="space-y-4">
            <button className="w-full text-left p-3 bg-surface/50 rounded-lg hover:bg-surface/70 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fg">Insurance Policies</h3>
                  <p className="text-sm text-muted">View and manage your active insurance policies</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted" />
              </div>
            </button>

            <button className="w-full text-left p-3 bg-surface/50 rounded-lg hover:bg-surface/70 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fg">Transaction History</h3>
                  <p className="text-sm text-muted">View all your bridge transactions</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted" />
              </div>
            </button>

            <button className="w-full text-left p-3 bg-surface/50 rounded-lg hover:bg-surface/70 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fg">Security Audit Reports</h3>
                  <p className="text-sm text-muted">View security audit reports for all bridges</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted" />
              </div>
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button className="btn-primary w-full">
          Save Settings
        </button>

        {/* App Info */}
        <div className="text-center text-sm text-muted">
          <p>BridgeGuard v1.0.0</p>
          <p>Built on Base • Powered by OnchainKit</p>
        </div>
      </div>
    </AppShell>
  );
}
