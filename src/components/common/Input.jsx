import React from 'react';
import { cn } from '../../utils/cn';

const Input = React.forwardRef(({ className, label, error, helperText, leftIcon, rightIcon, ...props }, ref) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-slate-700 ml-1">
          {label}
        </label>
      )}
      <div className="relative group">
        {leftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 transition-all duration-300',
            'focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 focus:outline-none',
            'placeholder:text-slate-400',
            leftIcon && 'pl-11',
            rightIcon && 'pr-11',
            error && 'border-accent-500 focus:border-accent-500 focus:ring-accent-500/10',
            className
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
            {rightIcon}
          </div>
        )}
      </div>
      {(error || helperText) && (
        <p className={cn('text-xs ml-1', error ? 'text-accent-600' : 'text-slate-500')}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
