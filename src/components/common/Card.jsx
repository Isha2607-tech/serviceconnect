import React from 'react';
import { cn } from '../../utils/cn';

const Card = ({ className, children, hover = true, glass = false, ...props }) => {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300',
        glass ? 'glass-card' : 'bg-white border-slate-100 shadow-premium',
        hover && 'hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
