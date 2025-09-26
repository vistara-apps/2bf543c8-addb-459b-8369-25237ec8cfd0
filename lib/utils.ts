import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatNumber(
  amount: number,
  decimals: number = 2,
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
}

export function formatTokenAmount(
  amount: string | number,
  decimals: number = 18,
  displayDecimals: number = 4
): string {
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  const divisor = Math.pow(10, decimals);
  const formatted = numAmount / divisor;
  
  return formatNumber(formatted, displayDecimals);
}

export function calculateInsurancePremium(
  transactionValue: number,
  premiumRate: number = 0.005
): number {
  return transactionValue * premiumRate;
}

export function getSecurityScoreColor(score: number): string {
  if (score >= 95) return 'text-success';
  if (score >= 85) return 'text-warning';
  return 'text-danger';
}

export function getSecurityScoreVariant(score: number): 'good' | 'warning' | 'danger' {
  if (score >= 95) return 'good';
  if (score >= 85) return 'warning';
  return 'danger';
}

export function formatTimeAgo(timestamp: string | Date): string {
  const now = new Date();
  const time = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - time.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} days ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  return `${diffInMonths} months ago`;
}

export function truncateAddress(
  address: string,
  startLength: number = 6,
  endLength: number = 4
): string {
  if (address.length <= startLength + endLength) {
    return address;
  }
  
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
}

export function validateTransactionAmount(
  amount: string,
  balance: string,
  minAmount: number = 0
): { isValid: boolean; error?: string } {
  const numAmount = parseFloat(amount);
  const numBalance = parseFloat(balance.replace(/,/g, ''));

  if (isNaN(numAmount) || numAmount <= minAmount) {
    return {
      isValid: false,
      error: `Amount must be greater than ${minAmount}`,
    };
  }

  if (numAmount > numBalance) {
    return {
      isValid: false,
      error: 'Insufficient balance',
    };
  }

  return { isValid: true };
}

export function generateTransactionId(): string {
  return `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generatePolicyId(): string {
  return `pol_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
