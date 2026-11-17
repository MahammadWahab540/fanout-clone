import React from 'react';

export interface SurfaceProps {
  children: React.ReactNode;
  variant?: 'default' | 'flat' | 'inset' | 'raised';
  notched?: boolean; // Reserved strictly for verified evidence (§1.5, §4.8)
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Surface: React.FC<SurfaceProps> = ({
  children,
  variant = 'default',
  notched = false,
  className = '',
  padding = 'md',
}) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
  };

  let bgClass = 'bg-[var(--bg-surface)]';
  if (variant === 'inset') bgClass = 'bg-[var(--bg-inset)]';
  if (variant === 'flat') bgClass = 'bg-[var(--bg-subtle)]';

  const elevationClass = variant === 'raised' ? 'shadow-[var(--shadow-raised)]' : '';

  // The Folded Notch (12px top-right corner cut) (§1.5)
  const notchStyle: React.CSSProperties = notched
    ? {
        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
        position: 'relative',
      }
    : {};

  return (
    <div
      style={notchStyle}
      className={`rounded-[var(--radius-surface)] border border-[var(--border-default)] ${bgClass} ${elevationClass} ${paddingClasses[padding]} ${className}`}
    >
      {notched && (
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-3 h-3 bg-[var(--border-default)] pointer-events-none"
          style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
        />
      )}
      {children}
    </div>
  );
};
