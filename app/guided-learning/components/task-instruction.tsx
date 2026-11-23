'use client';

import React from 'react';

/**
 * Keep the action visible and the full approved instruction available on demand.
 * This does not rewrite or remove curriculum text, evidence rules, or calculations.
 */
export function TaskInstruction({ text }: { text: string }) {
  const original = (text || '').trim();
  if (!original) return null;

  const wordLimit = 26;
  const words = original.split(/\s+/);
  if (words.length <= wordLimit && original.length <= 210) {
    return <p className="vcep-task-instruction">{original}</p>;
  }

  // Prefer a complete first sentence; otherwise use a word boundary. The entire
  // original instruction remains accessible in an expandable detail.
  const sentence = original.match(/^.{20,200}?[.!?](?=\s|$)/)?.[0];
  const preview = sentence || words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '…' : '');

  return (
    <div className="vcep-task-instruction-wrap">
      <p className="vcep-task-instruction">{preview}</p>
      {preview !== original && (
        <details className="vcep-task-more">
          <summary>Full task instructions</summary>
          <p>{original}</p>
        </details>
      )}
    </div>
  );
}
