import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'stage' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  loading = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'h-7 px-2.5 text-xs',
    md: 'h-8 px-3 text-xs',
    lg: 'h-10 px-4 text-sm',
  };

  let variantClasses = '';
  switch (variant) {
    case 'primary':
      // Tactile commit button with 2px collapsing lower edge (§4.1)
      variantClasses =
        'bg-[var(--action-primary-bg)] text-[var(--action-primary-fg)] border border-[var(--action-primary-edge)] shadow-[0_2px_0_var(--action-primary-edge)] hover:bg-[var(--action-primary-bg-hover)] active:translate-y-[2px] active:shadow-none';
      break;

    case 'secondary':
      variantClasses =
        'bg-[var(--action-secondary-bg)] text-[var(--text-primary)] border border-[var(--border-default)] shadow-[var(--shadow-raised)] hover:bg-[var(--action-secondary-bg-hover)] active:translate-y-[1px]';
      break;

    case 'ghost':
      variantClasses =
        'bg-transparent text-[var(--text-secondary)] hover:bg-[var(--action-ghost-bg-hover)] hover:text-[var(--text-primary)] active:translate-y-[1px]';
      break;

    case 'danger':
      variantClasses =
        'bg-[var(--status-danger-solid)] text-white border border-[var(--status-danger-solid)] hover:opacity-90 active:translate-y-[1px]';
      break;

    case 'stage':
      variantClasses =
        'bg-[var(--stage-learn-tint)] text-[var(--stage-learn-solid)] border border-[var(--stage-learn-line)] hover:bg-[var(--stage-learn-line)] active:translate-y-[1px]';
      break;
  }

  const disabledClasses = disabled || loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  return (
    <button
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center font-medium rounded-[var(--radius-control)] transition-all select-none ${sizeClasses[size]} ${variantClasses} ${disabledClasses} ${className}`}
      {...props}
    >
      {loading ? <span className="opacity-75">Loading...</span> : children}
    </button>
  );
};
