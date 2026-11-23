'use client';

import React from 'react';

/**
 * Shared TaskCard instruction display for every VCEP session.
 * Keep the actionable brief visible, while preserving the full curriculum
 * instruction for students who need a little more detail.
 *
 * Never hides assessment restrictions, case data or the working controls:
 * this component replaces only the plain descriptive sentence inside cards.
 */
export function FocusedTaskInstruction({ instruction }: { instruction: string }) {
  const full = instruction.trim();
  const words = full.split(/\s+/).filter(Boolean);
  const clipped = words.length > 19;
  const preview = clipped ? words.slice(0, 19).join(' ').replace(/[,:;]$/, '') + '…' : full;

  return (
    <div className="vcep-task-instruction">
      <p style={{ fontSize: '13.5px', color: '#475569', margin: '0 0 8px', lineHeight: 1.5 }}>
        {preview}
      </p>
      {clipped && (
        <details
          className="vcep-task-instruction-more"
          onClick={(event) => event.stopPropagation()}
          style={{ margin: '0 0 12px', fontSize: '12.5px', color: '#0F766E' }}
        >
          <summary style={{ cursor: 'pointer', fontWeight: 650, width: 'fit-content' }}>
            Read complete task instructions
          </summary>
          <p style={{ color: '#475569', margin: '8px 0', lineHeight: 1.6 }}>
            {full}
          </p>
        </details>
      )}
    </div>
  );
}
