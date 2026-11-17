import React, { useState } from 'react';
import { ProofCell, Button, Surface, RuledSection } from './ds';
import { Capability } from './domain/types';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const sampleCapabilities: Capability[] = [
    {
      id: 'cap-1',
      index: '01',
      title: 'Distributed Storage & WAL Engine',
      summary: 'LSM compaction, MemTables, and append-only disk structures.',
      stages: [
        { stage: 'learn', state: 'done' },
        { stage: 'practice', state: 'done' },
        { stage: 'build', state: 'done' },
        { stage: 'review', state: 'verified' },
        { stage: 'prove', state: 'verified' },
      ],
      statusText: 'Proven (Third-party signed)',
    },
    {
      id: 'cap-2',
      index: '02',
      title: 'FlashAttention-2 CUDA Kernel',
      summary: 'Tiling, SRAM IO-awareness, and online softmax scaling.',
      stages: [
        { stage: 'learn', state: 'done' },
        { stage: 'practice', state: 'done' },
        { stage: 'build', state: 'active', progress: 75 },
        { stage: 'review', state: 'available' },
        { stage: 'prove', state: 'locked' },
      ],
      statusText: 'Build · 75%',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      {/* 48px Top Navigation Bar */}
      <header className="sticky top-0 z-50 h-12 border-b border-[var(--border-hairline)] bg-[var(--bg-canvas)]/90 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* The 5-Bar Ladder Mark */}
            <div className="flex items-end gap-[2px] h-4 w-5">
              <div className="w-0.8 h-1.5 bg-[var(--stage-learn-solid)]"></div>
              <div className="w-0.8 h-2 bg-[var(--stage-practice-solid)]"></div>
              <div className="w-0.8 h-2.5 bg-[var(--stage-build-solid)]"></div>
              <div className="w-0.8 h-3 bg-[var(--stage-review-solid)]"></div>
              <div className="w-0.8 h-3.5 bg-[var(--stage-prove-solid)]"></div>
            </div>
            <span className="text-sm font-semibold tracking-tight">Pathwisse / Fanout</span>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[var(--bg-subtle)] border border-[var(--border-hairline)] text-[var(--text-tertiary)]">
              ProofOS v1.0
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </Button>
            <Button variant="primary" size="sm">
              Request Review →
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Section 01 */}
        <RuledSection
          index="01 / Capability Trail"
          title="Verifiable Engineering Capabilities"
          statusText="● Telemetry Active"
        >
          <div className="space-y-4">
            {sampleCapabilities.map((cap) => (
              <Surface key={cap.id} variant="default" padding="md" className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[var(--text-tertiary)]">{cap.index}</span>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">{cap.title}</h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{cap.summary}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 p-1 rounded bg-[var(--bg-subtle)] border border-[var(--border-hairline)]">
                    {cap.stages.map((st) => (
                      <ProofCell
                        key={st.stage}
                        stage={st.stage}
                        state={st.state}
                        progress={st.progress}
                        size="md"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-[var(--text-secondary)] min-w-[120px] text-right">
                    {cap.statusText}
                  </span>
                </div>
              </Surface>
            ))}
          </div>
        </RuledSection>

        {/* Section 02: Notched Verified Evidence */}
        <RuledSection
          index="02 / Verified Evidence Record"
          title="Third-Party Attested Work"
        >
          <Surface variant="default" notched padding="lg" className="max-w-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-hairline)] mb-3">
              <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase">
                RECORD ID: EV-014
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--stage-prove-tint)] text-[var(--stage-prove-text)] font-semibold border border-[var(--stage-prove-line)]">
                Verified Sign-Off ✓
              </span>
            </div>
            <h4 className="text-base font-semibold">Distributed LSM Compaction & WAL Fuzzing Suite</h4>
            <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
              Passed 14/14 automated crash consistency simulations. Code reviewed and signed off by Infrastructure Staff Mentor.
            </p>
            <div className="mt-4 pt-3 border-t border-[var(--border-hairline)] flex items-center justify-between text-xs font-mono">
              <span className="text-[var(--text-tertiary)]">Score: 88/100 (Top 8%)</span>
              <Button variant="secondary" size="sm">
                View Artifacts →
              </Button>
            </div>
          </Surface>
        </RuledSection>
      </main>
    </div>
  );
};
export default App;
