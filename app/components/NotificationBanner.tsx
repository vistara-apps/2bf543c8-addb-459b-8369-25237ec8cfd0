'use client';

import { X, Info, AlertTriangle, XCircle } from 'lucide-react';
import { useState } from 'react';

interface NotificationBannerProps {
  variant: 'info' | 'warning' | 'error';
  title: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function NotificationBanner({ 
  variant, 
  title, 
  message, 
  dismissible = true,
  onDismiss 
}: NotificationBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const getIcon = () => {
    switch (variant) {
      case 'info':
        return <Info className="w-5 h-5" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5" />;
      case 'error':
        return <XCircle className="w-5 h-5" />;
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case 'info':
        return 'bg-primary/10 border-primary/20 text-primary';
      case 'warning':
        return 'bg-warning/10 border-warning/20 text-warning';
      case 'error':
        return 'bg-danger/10 border-danger/20 text-danger';
    }
  };

  return (
    <div className={`rounded-lg border p-4 ${getVariantClass()} animate-slide-up`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm opacity-90 mt-1">{message}</p>
        </div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1 hover:bg-white/10 rounded-md transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
