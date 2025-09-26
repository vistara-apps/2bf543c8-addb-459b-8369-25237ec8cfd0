'use client';

import { Shield, AlertTriangle, XCircle, CheckCircle } from 'lucide-react';

interface SecurityStatusIndicatorProps {
  variant: 'good' | 'warning' | 'danger';
  label: string;
  description?: string;
  showIcon?: boolean;
}

export function SecurityStatusIndicator({ 
  variant, 
  label, 
  description, 
  showIcon = true 
}: SecurityStatusIndicatorProps) {
  const getIcon = () => {
    switch (variant) {
      case 'good':
        return <CheckCircle className="w-4 h-4" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />;
      case 'danger':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Shield className="w-4 h-4" />;
    }
  };

  const getStatusClass = () => {
    switch (variant) {
      case 'good':
        return 'status-good';
      case 'warning':
        return 'status-warning';
      case 'danger':
        return 'status-danger';
      default:
        return 'status-good';
    }
  };

  return (
    <div className="flex items-start space-x-3">
      {showIcon && (
        <div className={`${getStatusClass()} p-2 rounded-full`}>
          {getIcon()}
        </div>
      )}
      <div className="flex-1">
        <div className={`${getStatusClass()} inline-flex items-center space-x-2`}>
          {!showIcon && getIcon()}
          <span>{label}</span>
        </div>
        {description && (
          <p className="text-sm text-muted mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}
