import React from 'react';
import { StageName, CellState } from '../domain/types';

export interface ProofCellProps {
  stage: StageName;
  state: CellState;
  progress?: number; // 0 to 100 for active state
  size?: 'sm' | 'md' | 'lg'; // 16px, 24px, 32px
  label?: string;
  onClick?: () => void;
  selected?: boolean;
}

const STAGE_GLYPHS: Record<StageName, string> = {
  learn: '📖',
  practice: '○',
  build: '⚏',
  review: '✎',
  prove: '✓',
};

const SIZE_CLASSES = {
  sm: 'w-4 h-4 text-[9px] rounded-[1px]',
  md: 'w-6 h-6 text-xs rounded-[var(--radius-mark)]',
  lg: 'w-8 h-8 text-sm rounded-[var(--radius-mark)]',
};

export const ProofCell: React.FC<ProofCellProps> = ({
  stage,
  state,
  progress = 50,
  size = 'md',
  label,
  onClick,
  selected = false,
}) => {
  const sizeClass = SIZE_CLASSES[size];
  const glyph = STAGE_GLYPHS[stage];
  const accessibleName = label || `${stage}: ${state}`;

  // Base state classes according to design.md §4.2
  let stateStyle = '';
  let content = <span className="relative z-10 leading-none">{glyph}</span>;

  switch (state) {
    case 'locked':
      stateStyle = 'border border-dashed border-[var(--text-disabled)] text-[var(--text-disabled)] bg-transparent';
      content = <span className="opacity-40 leading-none">–</span>;
      break;

    case 'available':
      stateStyle = 'border border-[var(--stage-' + stage + '-solid)] text-[var(--stage-' + stage + '-solid)] bg-transparent';
      break;

    case 'active':
      const fillHeight = Math.max(12, Math.min(100, progress));
      stateStyle = 'border border-[var(--stage-' + stage + '-solid)] text-[var(--stage-' + stage + '-text)] relative overflow-hidden';
      content = (
        <>
          <div
            className="absolute bottom-0 left-0 right-0 bg-[var(--stage-${stage}-tint)] border-t border-[var(--stage-${stage}-solid)] transition-all duration-150"
            style={{ height: `${fillHeight}%` }}
          />
          <span className="relative z-10 leading-none font-bold text-[10px]">{fillHeight}%</span>
        </>
      );
      break;

    case 'done':
      stateStyle = 'border border-[var(--stage-' + stage + '-solid)] bg-[var(--stage-' + stage + '-tint)] text-[var(--stage-' + stage + '-text)]';
      break;

    case 'verified':
      stateStyle = 'bg-[var(--stage-' + stage + '-solid)] text-white border-transparent shadow-xs';
      break;
  }

  const selectedRing = selected ? 'ring-2 ring-[var(--focus-ring)] ring-offset-1' : '';

  if (onClick && state !== 'locked') {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={accessibleName}
        className={`inline-flex items-center justify-center font-semibold transition-transform active:translate-y-[1px] ${sizeClass} ${stateStyle} ${selectedRing}`}
      >
        {content}
      </button>
    );
  }

  return (
    <div
      aria-label={accessibleName}
      role="img"
      className={`inline-flex items-center justify-center font-semibold ${sizeClass} ${stateStyle} ${selectedRing}`}
    >
      {content}
    </div>
  );
};
