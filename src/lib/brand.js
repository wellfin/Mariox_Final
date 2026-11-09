// Each proposal carries the company's own brand colour. The concept pages
// derive a deep background, a glow and a readable text colour from it, the way
// the design's `mix()` helper did.

const parse = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

export const isHex = (v) => /^#[0-9a-f]{6}$/i.test(v || '');

export const brandOf = (p) => (isHex(p && p.brand) ? p.brand : '#F04423');

// `a` is how much of `hex` survives; the rest comes from `to`.
export function mix(hex, to, a) {
  const A = parse(hex);
  const B = parse(to);
  return `rgb(${A.map((v, i) => Math.round(v * a + B[i] * (1 - a))).join(',')})`;
}

export function luminance(hex) {
  const v = parse(hex).map((x) => x / 255);
  return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
}

// Everything the concept pages need from one brand colour.
export function palette(p) {
  const brand = brandOf(p);
  const lum = luminance(brand);
  return {
    brand,
    accent: brand,
    onAccent: lum > 0.5 ? '#08070A' : '#F4F1EA',
    // A very dark brand reads as black on black, so lift it towards ivory.
    accentText: lum < 0.18 ? mix(brand, '#F4F1EA', 0.45) : brand,
    deep: mix(brand, '#08070A', 0.16),
    deepCard: mix(brand, '#08070A', 0.22),
    glow: `radial-gradient(circle,${mix(brand, '#08070A', 0.9)} 0%,rgba(8,7,10,0) 65%)`,
    glowCorner: `radial-gradient(circle at 80% 0%,${mix(brand, '#08070A', 0.7)} 0%,rgba(8,7,10,0) 60%)`,
  };
}
