'use client';

import React from 'react';

/**
 * Every VCEP task starts with one actionable sentence.
 * The approved full instruction is retained, keyboard accessible and expandable.
 * This changes presentation only; it never edits curriculum, fields or submissions.
 */
function briefFirst(instruction: string): string {
  const normalized = instruction.trim();
  const sentence = normalized.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? normalized;
  if (sentence.length <= 145) return sentence;
  const clipped = sentence.slice(0, 142);
  const boundary = clipped.lastIndexOf(' ');
  return clipped.slice(0, boundary >= 90 ? boundary : 142).trimEnd() + '…';
}

export function ConciseTaskInstruction({ instruction }: { instruction: string }) {
  const brief = briefFirst(instruction);
  const hasMore = instruction.trim() !== brief.trim();

  return (
    <div className="vcep-concise-task-instruction" style={{ marginBottom: 14 }}>
      <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.55 }}>
        {brief}
      </p>
      {hasMore && (
        <details style={{ marginTop: 6 }} onClick={(event) => event.stopPropagation()}>
          <summary
            style={{ fontSize: 12, color: '#0F766E', fontWeight: 650, cursor: 'pointer' }}
          >
            Read full task brief
          </summary>
          <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6, margin: '8px 0 0' }}>
            {instruction}
          </p>
        </details>
      )}
    </div>
  );
}
