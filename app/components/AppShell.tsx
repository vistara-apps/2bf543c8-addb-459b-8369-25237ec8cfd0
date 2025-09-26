'use client';

import { ReactNode } from 'react';
import { Shield, ArrowLeftRight, BarChart3, Settings2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default' | 'glass';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: BarChart3 },
    { name: 'Bridge', href: '/bridge', icon: ArrowLeftRight },
    { name: 'Security', href: '/security', icon: Shield },
    { name: 'Settings', href: '/settings', icon: Settings2 },
  ];

  const containerClass = variant === 'glass' 
    ? 'glass-card min-h-screen' 
    : 'min-h-screen bg-bg';

  return (
    <div className={containerClass}>
      {/* Header */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-screen-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-bg" />
              </div>
              <h1 className="text-xl font-bold text-gradient">BridgeGuard</h1>
            </div>
            <div className="text-sm text-muted">
              Secure • Insured • Monitored
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-md mx-auto px-4 py-6">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-screen-md mx-auto px-4">
          <div className="flex items-center justify-around py-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'text-accent bg-accent/10' 
                      : 'text-muted hover:text-fg hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Bottom padding to account for fixed navigation */}
      <div className="h-20"></div>
    </div>
  );
}
