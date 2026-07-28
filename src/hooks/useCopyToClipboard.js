import { useState } from 'react';

export function useCopyToClipboard(resetDelay = 1500) {
  const [copiedValue, setCopiedValue] = useState(null);

  const copy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
      setTimeout(() => setCopiedValue((current) => (current === value ? null : current)), resetDelay);
    } catch {
      // Clipboard access denied or unavailable — silently ignore.
    }
  };

  return { copiedValue, copy };
}
