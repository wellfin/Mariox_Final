import React, { forwardRef } from 'react';
import { s, hoverClass } from '@/lib/css';

// Renders any tag with the design's inline CSS string (`css`) and optional
// `hover` string, mirroring the design file's style / style-hover attributes.
const El = forwardRef(function El({ as: Tag = 'div', css, hover, style, className, ...rest }, ref) {
  const cls = [className, hover ? hoverClass(hover) : null].filter(Boolean).join(' ') || undefined;
  const st = css ? (style ? { ...s(css), ...style } : s(css)) : style;
  return <Tag ref={ref} style={st} className={cls} {...rest} />;
});

export default El;
