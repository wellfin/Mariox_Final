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
  'transform:scale(1.08)',
  // Home v4
  'border-color:#F4F1EA;color:#F4F1EA',
  'color:#F04423;padding-left:14px',
  'background:#08070A;color:#F4F1EA;padding-left:clamp(14px,2vw,30px);padding-right:clamp(14px,2vw,30px)',
  'color:#08070A;background:#F4F1EA',
];

// Hover values a newer design introduces get a deterministic hashed class
// instead of a build error: the rule ships with the rest from the server and is
// injected once in the browser for client-side navigation.
const extra = new Map();

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36);
}

function rule(cls, str) {
  const body = split(str).filter(Boolean).map((d) => d.trim() + ' !important').join(';');
  return '.' + cls + ':hover{' + body + '}';
}

export function hoverClass(str) {
  const i = HOVERS.indexOf(str);
  if (i >= 0) return 'mxh' + i;
  const cls = 'mxx' + hash(str);
  if (!extra.has(cls)) {
    extra.set(cls, str);
    if (typeof document !== 'undefined') {
      let tag = document.getElementById('mx-hover-extra');
      if (!tag) { tag = document.createElement('style'); tag.id = 'mx-hover-extra'; document.head.appendChild(tag); }
      tag.appendChild(document.createTextNode(rule(cls, str)));
    }
  }
  return cls;
}

export function hoverCss() {
  return HOVERS.map((h, i) => rule('mxh' + i, h))
    .concat(Array.from(extra, ([cls, str]) => rule(cls, str)))
    .join('\n');
}
