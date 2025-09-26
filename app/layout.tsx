import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BridgeGuard - Secure Cross-Chain Token Bridging',
  description: 'Seamlessly bridge your tokens across chains with post-transaction insurance and real-time security monitoring.',
  keywords: ['bridge', 'cross-chain', 'tokens', 'insurance', 'security', 'Base', 'DeFi'],
  authors: [{ name: 'BridgeGuard Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
