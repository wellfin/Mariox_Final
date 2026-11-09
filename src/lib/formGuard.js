import { useCallback, useRef } from 'react';

// Second layer of bot protection, next to the hidden "company" trap.
//
// A person has to read the labels, click a field and type a name, an email and
// a phone number — that never happens in under a second. A script that loads
// the page, fills every input from a dictionary and submits does it almost
// instantly. So each form reports how long it was on screen before the submit,
// and /api/contact drops anything impossibly fast the same silent way it drops
// a filled honeypot.
//
// Nothing is rendered and nothing is asked of the visitor, so there is no
// puzzle to solve, no third-party script and nothing to fail on a slow phone.
export function useFilledIn() {
  const mounted = useRef(null);
  if (mounted.current === null) mounted.current = Date.now();
  return useCallback(() => Date.now() - mounted.current, []);
}
