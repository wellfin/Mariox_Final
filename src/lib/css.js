// The design files author every element with an inline CSS string.
// s() turns those strings into React style objects so markup can be ported verbatim.

const cache = new Map();

function camel(prop) {
  if (prop.startsWith('--')) return prop;
  const p = prop.startsWith('-ms-') ? prop.slice(1) : prop;
  return p.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function split(str) {
  const out = [];
  let depth = 0, quote = null, cur = '';
  for (const ch of str) {
    if (quote) {
      if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
    } else if (ch === '(') {
      depth++;
    } else if (ch === ')') {
      depth--;
    } else if (ch === ';' && depth === 0) {
      out.push(cur);
      cur = '';
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out;
}

export function s(str) {
  if (!str) return undefined;
  let hit = cache.get(str);
  if (hit) return hit;
  hit = {};
  for (const decl of split(str)) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (prop) hit[camel(prop)] = val;
  }
  cache.set(str, hit);
  return hit;
}

// style-hover values used by the design. Each becomes a class with !important
// rules so the hover wins over inline styles without mutating them.
export const HOVERS = [
  'border-color:#F04423;color:#F04423',
  'background:#F4F1EA',
  'background:#F04423;color:#08070A',
  'border-color:#F04423',
  'background:#F04423;color:#08070A;padding-left:clamp(18px,3.4vw,56px)',
  'background:#F04423;color:#08070A;padding-left:clamp(16px,3vw,48px)',
  'transform:scale(1.07)',
  'transform:scale(1.06)',
  'color:#F04423',
  'background:#F4F1EA;color:#08070A',
  'background:#F04423',
  'border-color:#F04423;color:#F04423;background:rgba(240,68,35,.08)',
];

export function hoverClass(str) {
  const i = HOVERS.indexOf(str);
  if (i < 0) throw new Error('Unknown hover style: ' + str);
  return 'mxh' + i;
}

export function hoverCss() {
  return HOVERS.map((h, i) => {
    const body = split(h)
      .filter(Boolean)
      .map((d) => d.trim() + ' !important')
      .join(';');
    return '.mxh' + i + ':hover{' + body + '}';
  }).join('\n');
}
