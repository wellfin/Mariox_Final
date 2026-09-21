import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import El from './El';
import { MONO } from './ui';
import ContactForm from './ContactForm';
import { isolateScroll } from '@/lib/fx';

export default function ContactModal({ open, onClose, cityName }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const [mounted, setMounted] = useState(false);
  const boxRef = useRef(null);
  useEffect(() => setMounted(true), []);
  useEffect(() => (open && mounted ? isolateScroll(boxRef.current) : undefined), [open, mounted]);

  if (!open || !mounted) return null;
  // Portal to <body> so the dialog sits above the sticky header, not inside <main>.
  return createPortal(
    <El ref={boxRef} role="dialog" aria-modal="true" aria-label="Contact Mariox" css="position:fixed;inset:0;z-index:9995;font-family:'Schibsted Grotesk','Helvetica Neue',Helvetica,sans-serif;color:#F4F1EA;display:flex;align-items:flex-start;justify-content:center;overflow-y:auto;padding:clamp(16px,5vh,60px) clamp(12px,3vw,40px)">
      <El onClick={onClose} css="position:fixed;inset:0;background:rgba(8,7,10,.78);backdrop-filter:blur(10px)" />
      <El css="position:relative;width:min(720px,100%);background:#08070A;border:1px solid rgba(244,241,234,.16);padding:clamp(24px,4vw,56px)">
        <El
          as="button"
          type="button"
          onClick={onClose}
          aria-label="Close"
          data-cursor="1"
          css={`position:absolute;top:14px;right:14px;cursor:pointer;background:transparent;border:1px solid rgba(244,241,234,.22);color:#F4F1EA;width:38px;height:38px;${MONO};font-size:16px;line-height:1;transition:border-color .3s,color .3s`}
          hover="border-color:#F04423;color:#F04423"
        >
          &times;
        </El>
        <ContactForm cityName={cityName} title="Get in touch" id="enquiry-modal" compact panel={false} />
      </El>
    </El>,
    document.body
  );
}
