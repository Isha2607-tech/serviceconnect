import React from 'react';
import { cn } from '../../utils/cn';

const Badge = ({ children, variant = 'primary', className }) => {
  const variants = {
    primary: 'bg-primary-50 text-primary-700 border-primary-100',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    warning: 'bg-amber-50 text-amber-700 border-amber-100',
    danger: 'bg-accent-50 text-accent-700 border-accent-100',
    info: 'bg-sky-50 text-sky-700 border-sky-100',
    neutral: 'bg-slate-50 text-slate-600 border-slate-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
