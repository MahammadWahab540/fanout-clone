import React from 'react';

export interface RuledSectionProps {
  index: string; // e.g. "01 / Proof of Capability"
  title: string;
  statusText?: string;
  children: React.ReactNode;
  className?: string;
}

export const RuledSection: React.FC<RuledSectionProps> = ({
  index,
  title,
  statusText,
  children,
  className = '',
}) => {
  return (
    <section className={`py-12 border-b border-[var(--border-hairline)] ${className}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* The 1px Ruled Section Header (§1.5) */}
        <div className="border-t border-[var(--border-hairline)] pt-3 mb-6 flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
            {index}
          </span>
          {statusText && (
            <span className="text-[11px] font-mono text-[var(--stage-prove-solid)] font-medium">
              {statusText}
            </span>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] tracking-tight mb-8">
          {title}
        </h2>

        {children}
      </div>
    </section>
  );
};
