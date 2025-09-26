'use client';

import { useState, useEffect } from 'react';
import { AppShell } from '../components/AppShell';
import { SecurityStatusIndicator } from '../components/SecurityStatusIndicator';
import { NotificationBanner } from '../components/NotificationBanner';
import { Shield, AlertTriangle, Activity, Clock } from 'lucide-react';

interface SecurityEvent {
  id: string;
  bridge: string;
  type: 'info' | 'warning' | 'critical';
  title: string;
  description: string;
  timestamp: string;
  resolved: boolean;
}

interface BridgeStatus {
  name: string;
  status: 'good' | 'warning' | 'danger';
  uptime: string;
  lastIncident: string;
  securityScore: number;
  totalVolume: string;
}

export default function SecurityPage() {
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([]);
  const [bridgeStatuses, setBridgeStatuses] = useState<BridgeStatus[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSecurityData = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setSecurityEvents([
        {
          id: '1',
          bridge: 'LayerZero',
          type: 'info',
          title: 'Routine Security Audit Completed',
          description: 'Monthly security audit completed successfully with no issues found.',
          timestamp: '2 hours ago',
          resolved: true
        },
        {
          id: '2',
          bridge: 'cBridge',
          type: 'warning',
          title: 'Increased Transaction Times',
          description: 'Bridge experiencing higher than normal transaction confirmation times.',
          timestamp: '6 hours ago',
          resolved: false
        },
        {
          id: '3',
          bridge: 'Wormhole',
          type: 'info',
          title: 'Protocol Upgrade Completed',
          description: 'Successfully upgraded to v2.1.4 with enhanced security features.',
          timestamp: '1 day ago',
          resolved: true
        }
      ]);

      setBridgeStatuses([
        {
          name: 'LayerZero',
          status: 'good',
          uptime: '99.98%',
          lastIncident: '45 days ago',
          securityScore: 98,
          totalVolume: '$2.4B'
        },
        {
          name: 'Wormhole',
          status: 'good',
          uptime: '99.95%',
          lastIncident: '12 days ago',
          securityScore: 96,
          totalVolume: '$1.8B'
        },
        {
          name: 'cBridge',
          status: 'warning',
          uptime: '99.87%',
          lastIncident: '3 days ago',
          securityScore: 94,
          totalVolume: '$1.2B'
        },
        {
          name: 'Hop Protocol',
          status: 'good',
          uptime: '99.92%',
          lastIncident: '28 days ago',
          securityScore: 95,
          totalVolume: '$890M'
        }
      ]);

      setIsLoading(false);
    };

    loadSecurityData();
  }, []);

  if (isLoading) {
    return (
      <AppShell>
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-surface rounded w-1/3"></div>
          <div className="h-16 bg-surface rounded"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-surface rounded-lg"></div>
            ))}
          </div>
        </div>
      </AppShell>
    );
  }

  const activeIncidents = securityEvents.filter(event => !event.resolved && event.type !== 'info');

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gradient mb-2">
            Security Center
          </h1>
          <p className="text-muted">
            Real-time monitoring and security status of all integrated bridges
          </p>
        </div>

        {/* Security Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="metric-card">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-success/20 to-success/30 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-success" />
              </div>
              <div className="text-sm font-medium text-success">+2</div>
            </div>
            <div>
              <p className="text-sm text-muted">Overall Security Score</p>
              <p className="text-2xl font-bold text-fg">96/100</p>
              <p className="text-sm text-success">Excellent</p>
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-warning/20 to-warning/30 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div className="text-sm font-medium text-warning">1</div>
            </div>
            <div>
              <p className="text-sm text-muted">Active Incidents</p>
              <p className="text-2xl font-bold text-fg">{activeIncidents.length}</p>
              <p className="text-sm text-warning">Minor issues</p>
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <div className="text-sm font-medium text-success">99.9%</div>
            </div>
            <div>
              <p className="text-sm text-muted">Network Uptime</p>
              <p className="text-2xl font-bold text-fg">99.93%</p>
              <p className="text-sm text-success">Last 30 days</p>
            </div>
          </div>
        </div>

        {/* Active Alerts */}
        {activeIncidents.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-fg">Active Security Alerts</h2>
            {activeIncidents.map((event) => (
              <NotificationBanner
                key={event.id}
                variant={event.type as 'warning'}
                title={`${event.bridge}: ${event.title}`}
                message={event.description}
                dismissible={false}
              />
            ))}
          </div>
        )}

        {/* Bridge Status Overview */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-fg">Bridge Status Overview</h2>
          <div className="space-y-4">
            {bridgeStatuses.map((bridge, index) => (
              <div key={index} className="metric-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <SecurityStatusIndicator
                      variant={bridge.status}
                      label={bridge.name}
                      showIcon={true}
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-fg">{bridge.securityScore}/100</div>
                    <div className="text-xs text-muted">Security Score</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted">Uptime</p>
                    <p className="font-medium text-fg">{bridge.uptime}</p>
                  </div>
                  <div>
                    <p className="text-muted">Last Incident</p>
                    <p className="font-medium text-fg">{bridge.lastIncident}</p>
                  </div>
                  <div>
                    <p className="text-muted">Total Volume</p>
                    <p className="font-medium text-fg">{bridge.totalVolume}</p>
                  </div>
                  <div>
                    <p className="text-muted">Status</p>
                    <p className={`font-medium capitalize ${
                      bridge.status === 'good' ? 'text-success' :
                      bridge.status === 'warning' ? 'text-warning' : 'text-danger'
                    }`}>
                      {bridge.status === 'good' ? 'Operational' : 
                       bridge.status === 'warning' ? 'Degraded' : 'Down'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Security Events */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-fg">Recent Security Events</h2>
          <div className="space-y-3">
            {securityEvents.map((event) => (
              <div key={event.id} className="metric-card">
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    event.type === 'critical' ? 'bg-danger' :
                    event.type === 'warning' ? 'bg-warning' : 'bg-primary'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-fg">{event.bridge}</h4>
                      <div className="flex items-center space-x-2 text-xs text-muted">
                        <Clock className="w-3 h-3" />
                        <span>{event.timestamp}</span>
                      </div>
                    </div>
                    <h5 className="text-sm font-medium text-fg mb-1">{event.title}</h5>
                    <p className="text-sm text-muted">{event.description}</p>
                    {event.resolved && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success/20 text-success">
                          Resolved
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Tips */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <h4 className="font-medium text-primary mb-2">🔒 Security Best Practices</h4>
          <ul className="text-sm text-primary/80 space-y-1">
            <li>• Always verify bridge contract addresses before transactions</li>
            <li>• Enable notifications for security alerts</li>
            <li>• Consider insurance for high-value transfers</li>
            <li>• Monitor bridge health before large transactions</li>
            <li>• Keep transaction records for potential insurance claims</li>
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
