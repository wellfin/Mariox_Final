// Three-app product demo ported from the Mario's Software SaaS Platform design
// (mariox-app-demo.jsx). Changes: engine imported instead of read off window,
// the Tweaks editor panel is dropped, and the app vertical comes from a prop.
import React from 'react';
import { useComposition, CompositionStage, Easing, animate } from '@/lib/anim/animations-v3';

// Scene list and playback from the design file's helmet.
const SCENES = '[{"name":"Order","dur":4,"desc":"The customer picks an option and confirms in the customer app"},{"name":"Kitchen","dur":4,"desc":"The request lands in the operator panel, is accepted and the progress bar fills"},{"name":"Dispatch","dur":4,"desc":"The third app takes over: map, live call, player or booking calendar"},{"name":"Delivered","dur":5,"desc":"The camera pulls back to show all three apps with the closing line, then fade"}]';
const PLAYBACK = '{"mode":"loop"}';


const W = 1600, H = 1000;
const BK = '#08070A', IV = '#F4F1EA', GR = '#9B968F', INK = '#141216', LINE = 'rgba(244,241,234,.12)';
const SANS = "Archivo, 'Helvetica Neue', Helvetica, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

const MOTION = {
  enter: (s, e, a = 0, b = 1) => animate({ from: a, to: b, start: s, end: e, ease: Easing.easeOutExpo }),
  draw:  (s, e, a = 0, b = 1) => animate({ from: a, to: b, start: s, end: e, ease: Easing.easeInOutCubic }),
  pop:   (s, e, a = 0, b = 1) => animate({ from: a, to: b, start: s, end: e, ease: Easing.easeOutBack }),
};

// Every name, venue and price below is invented for the demo.
const APPS = {
  astrotalk: {
    cat: 'Astrology', steps: ['Customer app', 'Astrologer panel', 'Live session', 'Billed per minute'], end: ['Three apps.', 'One consultation.'],
    s1: { top: 'Astrologers online · 128', search: 'Search by speciality', title: 'Talk to an astrologer', sub: 'Vedic · Tarot · Numerology', items: [['Acharya Dev', '₹25/min'], ['Meera Shastri', '₹30/min'], ['Pandit Rao', '₹20/min']], c: ['#2B2333', '#2A2530', '#30282A'], bar: ['Wallet ₹500', 'Start call →'], done: 'Connecting…', doneSub: 'Session #2291 · per-minute billing' },
    s2: { brand: 'AstroDesk', nav: ['Sessions', 'Wallet', 'Payouts', 'Reviews'], head: 'Incoming requests', status: '3 astrologers live', card: 'Session #2291', meta: 'Kundli · Hindi', line: ['Audio call · per minute', '₹25/min'], st: ['NEW', 'ACCEPTED', 'LIVE'], btn: ['Accept', 'Accepted'], side: ['Wait 30 sec', 'Connected'] },
    s3: { type: 'call', who: 'Acharya Dev', label: 'Live consultation', rate: 25 }
  },
  uber: {
    cat: 'Ride-hailing', steps: ['Rider app', 'Dispatch', 'Driver app', 'Arrived'], end: ['Three apps.', 'One ride.'],
    s1: { top: 'Pickup · Sector 135', search: 'Where to?', title: 'Choose a ride', sub: 'To Cyber Hub · 22 km', items: [['Mini', '₹389'], ['Sedan', '₹449'], ['SUV', '₹629']], c: ['#1F2630', '#22262C', '#262A30'], bar: ['Mini · ₹389', 'Confirm ride →'], done: 'Finding your driver', doneSub: 'Trip #7710 · matching nearby' },
    s2: { brand: 'Fleet ops', nav: ['Live trips', 'Drivers', 'Surge', 'Payouts'], head: 'Ride requests', status: '412 drivers online', card: 'Trip #7710', meta: 'Sector 135 → Cyber Hub', line: ['Mini · 22 km', '₹389'], st: ['NEW', 'MATCHED', 'EN ROUTE'], btn: ['Assign', 'Assigned'], side: ['Nearest 1.2 km', 'Driver Ravi · 4.9'] },
    s3: { type: 'map', label: 'Driver arriving', from: 'Driver', to: 'Pickup', person: 'Driver · Ravi', dist: '1.2 km', mins: 6 }
  },
  zomato: {
    cat: 'Food delivery', steps: ['Customer app', 'Restaurant panel', 'Rider app', 'Delivered'], end: ['Three apps.', 'One order.'],
    s1: { top: 'Deliver to · Sector 135', search: 'Search dishes', title: 'Spice Route Kitchen', sub: 'North Indian · 25 min', items: [['Paneer tikka bowl', '₹249'], ['Margherita, wood-fired', '₹329'], ['Masala dosa', '₹149']], c: ['#3A2A22', '#2E2A1E', '#33281C'], bar: ['1 item · ₹249', 'Place order →'], done: 'Order placed', doneSub: '#4821 · sent to restaurant' },
    s2: { brand: 'Spice Route', nav: ['Orders', 'Menu', 'Payouts', 'Reviews'], head: 'Live orders', status: 'Kitchen open', card: 'Order #4821', meta: 'Sector 135 · 2.4 km', line: ['1 × Paneer tikka bowl', '₹249'], st: ['NEW', 'PREPARING', 'READY'], btn: ['Accept', 'Accepted'], side: ['Prep 12 min', 'Rider assigned'] },
    s3: { type: 'map', label: 'On the way · #4821', from: 'Spice Route', to: 'Sector 135', person: 'Rider · Aman', dist: '2.4 km', mins: 18 }
  },
  blinkit: {
    cat: 'Quick commerce', steps: ['Customer app', 'Dark-store picking', 'Rider app', 'Delivered'], end: ['Three apps.', 'Ten minutes.'],
    s1: { top: 'Delivery in 10 min', search: 'Search 6,000 products', title: 'Daily essentials', sub: 'Store · Sector 132', items: [['Full cream milk 1L', '₹68'], ['Brown bread', '₹45'], ['Farm eggs ×6', '₹72']], c: ['#22302A', '#2E2A22', '#302C24'], bar: ['3 items · ₹185', 'Pay & order →'], done: 'Order confirmed', doneSub: '#9034 · picking started' },
    s2: { brand: 'Store 132', nav: ['Picking', 'Inventory', 'Riders', 'Slots'], head: 'Pick list', status: 'Avg pick 92 sec', card: 'Order #9034', meta: 'Aisle 2 · 4 · 7', line: ['3 items · 1 bag', '₹185'], st: ['NEW', 'PICKING', 'PACKED'], btn: ['Start pick', 'Picking'], side: ['3 of 3 items', 'Handed to rider'] },
    s3: { type: 'map', label: 'On the way · #9034', from: 'Store 132', to: 'Home', person: 'Rider · Kabir', dist: '1.6 km', mins: 7 }
  },
  practo: {
    cat: 'Healthcare', steps: ['Patient app', 'Clinic dashboard', 'Video consult', 'Prescription sent'], end: ['Three apps.', 'One appointment.'],
    s1: { top: 'Consult online · now', search: 'Search doctors, symptoms', title: 'General physicians', sub: 'Available in 10 min', items: [['Dr. Anika Rao', '₹499'], ['Dr. Vivek Menon', '₹599'], ['Dr. Sara Iqbal', '₹449']], c: ['#1E2A30', '#22282E', '#24282C'], bar: ['Today · 4:30 pm', 'Book consult →'], done: 'Appointment booked', doneSub: 'APT-3381 · video consult' },
    s2: { brand: 'Clinic', nav: ['Appointments', 'Patients', 'Records', 'Billing'], head: 'Today’s queue', status: '6 consults booked', card: 'APT-3381', meta: 'Fever · 3 days', line: ['Video consult · 15 min', '₹499'], st: ['BOOKED', 'CHECKED IN', 'IN CONSULT'], btn: ['Check in', 'Checked in'], side: ['Notes ready', 'Doctor joined'] },
    s3: { type: 'call', who: 'Dr. Anika Rao', label: 'Video consultation', rate: 0 }
  },
  udemy: {
    cat: 'Edtech', steps: ['Learner app', 'Creator studio', 'Course player', 'Certificate'], end: ['Three apps.', 'One course.'],
    s1: { top: 'Learning · 3 in progress', search: 'Search courses', title: 'Product design', sub: '24 courses · beginner to pro', items: [['UX research basics', '₹799'], ['Figma for teams', '₹999'], ['Design systems', '₹1,299']], c: ['#2A2433', '#262A33', '#2C2630'], bar: ['UX research basics', 'Enrol now →'], done: 'You’re enrolled', doneSub: '12 lessons · start anytime' },
    s2: { brand: 'Creator studio', nav: ['Courses', 'Learners', 'Payouts', 'Q&A'], head: 'New enrolments', status: '1,240 learners', card: 'UX research basics', meta: 'Enrolment #5512', line: ['Lifetime access', '₹799'], st: ['NEW', 'ENROLLED', 'LEARNING'], btn: ['Welcome', 'Sent'], side: ['Payout +₹560', 'Lesson 1 started'] },
    s3: { type: 'player', label: 'Lesson 3 of 12', title: 'Interviewing users', next: 'Up next · Synthesis' }
  },
  airbnb: {
    cat: 'Rentals', steps: ['Guest app', 'Host dashboard', 'Booking confirmed', 'Check-in'], end: ['Three apps.', 'One stay.'],
    s1: { top: 'Goa · 12–15 Dec', search: 'Search destinations', title: 'Stays near the beach', sub: '2 guests · 3 nights', items: [['Sea-view studio', '₹4,200/night'], ['Villa with pool', '₹9,800/night'], ['Garden cottage', '₹3,100/night']], c: ['#1E2C2E', '#2A2C22', '#22302A'], bar: ['3 nights · ₹12,600', 'Reserve →'], done: 'Request sent', doneSub: 'BKG-6620 · waiting for host' },
    s2: { brand: 'Host', nav: ['Bookings', 'Calendar', 'Payouts', 'Reviews'], head: 'Booking requests', status: '2 listings live', card: 'BKG-6620', meta: '12–15 Dec · 2 guests', line: ['Sea-view studio · 3 nights', '₹12,600'], st: ['REQUEST', 'ACCEPTED', 'CONFIRMED'], btn: ['Accept', 'Accepted'], side: ['Payment held', 'Guest notified'] },
    s3: { type: 'booking', label: 'Booking confirmed', title: 'Sea-view studio', dates: ['12', '13', '14', '15'] }
  },
  netflix: {
    cat: 'OTT & streaming', steps: ['Viewer app', 'Content CMS', 'Player', 'Watching'], end: ['Three apps.', 'One stream.'],
    s1: { top: 'Profile · Riya', search: 'Search titles', title: 'New this week', sub: 'Series · Films · Docs', items: [['The Long Monsoon', 'S1 · 8 eps'], ['Signal Lost', 'Film · 2h 4m'], ['Coastline', 'Docu · 6 eps']], c: ['#2E2226', '#22262E', '#232A28'], bar: ['Premium plan', 'Play →'], done: 'Starting playback', doneSub: 'Adaptive · 1080p' },
    s2: { brand: 'Content CMS', nav: ['Titles', 'Encoding', 'Rights', 'Analytics'], head: 'Stream health', status: '38k concurrent', card: 'The Long Monsoon · E1', meta: 'DRM · 4 renditions', line: ['Edge cache · Mumbai', '99.98%'], st: ['QUEUED', 'ENCODED', 'STREAMING'], btn: ['Publish', 'Published'], side: ['CDN warm', 'Bitrate adaptive'] },
    s3: { type: 'player', label: 'S1 · E1', title: 'The Long Monsoon', next: 'Next episode in 8 sec' }
  }
};

function pickApp(tweak) {
  const q = (new URLSearchParams(location.search).get('app') || new URLSearchParams(location.hash.slice(1)).get('app') || '').toLowerCase();
  return APPS[q] ? q : (APPS[tweak] ? tweak : 'zomato');
}

function Mono({ children, style }) {
  return <div style={{ fontFamily: MONO, fontSize: 15, letterSpacing: '.16em', textTransform: 'uppercase', color: GR, ...style }}>{children}</div>;
}

function Phone({ left, top, children }) {
  return (
    <div style={{ position: 'absolute', left, top, width: 380, height: 780, borderRadius: 48, background: '#1C1A1F', padding: 12, boxShadow: '0 40px 80px rgba(0,0,0,.5)' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 38, overflow: 'hidden', background: INK }}>
        <div style={{ position: 'absolute', top: 12, left: '50%', marginLeft: -50, width: 100, height: 26, borderRadius: 14, background: '#000', zIndex: 5 }} />
        {children}
      </div>
    </div>
  );
}

function Screen1({ T, CUES, OR, a }) {
  const s = a.s1, o = CUES.Order;
  const added = MOTION.pop(o + 1.3, o + 1.7)(T);
  const bar = MOTION.enter(o + 1.6, o + 2.3)(T);
  const press = 1 - 0.06 * (MOTION.draw(o + 2.8, o + 2.95)(T) - MOTION.draw(o + 2.95, o + 3.15)(T));
  const done = MOTION.enter(o + 3.2, o + 3.8)(T);
  const sel = added > 0.5;
  return (
    <Phone left={610} top={110}>
      <div style={{ padding: '56px 22px 0', fontFamily: SANS, color: IV }}>
        <Mono style={{ fontSize: 11 }}>{s.top}</Mono>
        <div style={{ marginTop: 14, height: 44, borderRadius: 12, background: 'rgba(244,241,234,.07)', display: 'flex', alignItems: 'center', padding: '0 14px', fontSize: 14, color: GR }}>{s.search}</div>
        <div style={{ marginTop: 22, fontSize: 26, fontWeight: 800, letterSpacing: '-.03em' }}>{s.title}</div>
        <Mono style={{ fontSize: 11, marginTop: 6 }}>{s.sub}</Mono>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {s.items.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: 10, borderRadius: 14, background: 'rgba(244,241,234,.04)', border: `1px solid ${i === 0 && sel ? OR : 'transparent'}` }}>
              <div style={{ width: 64, height: 64, borderRadius: 10, background: s.c[i], backgroundImage: 'repeating-linear-gradient(135deg,rgba(244,241,234,.06) 0 2px,transparent 2px 9px)' }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{m[0]}</div>
                <div style={{ fontSize: 14, color: GR, marginTop: 4 }}>{m[1]}</div>
              </div>
              <div style={{ width: 38, height: 38, borderRadius: 10, border: `1.5px solid ${OR}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 18, color: i === 0 && sel ? BK : OR, background: i === 0 && sel ? OR : 'transparent', transform: i === 0 ? `scale(${0.8 + 0.2 * added})` : 'none' }}>{i === 0 && sel ? '✓' : '+'}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 24, height: 64, borderRadius: 16, background: OR, color: BK, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', fontFamily: SANS, fontWeight: 800, fontSize: 16, transform: `translateY(${(1 - bar) * 120}px) scale(${press})` }}>
        <span>{s.bar[0]}</span><span>{s.bar[1]}</span>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: INK, opacity: done, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, fontFamily: SANS, color: IV }}>
        <div style={{ width: 84, height: 84, borderRadius: '50%', background: OR, transform: `scale(${MOTION.pop(o + 3.3, o + 3.9)(T)})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 34, height: 18, borderLeft: `5px solid ${BK}`, borderBottom: `5px solid ${BK}`, transform: 'rotate(-45deg) translate(3px,-3px)' }} />
        </div>
        <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.03em' }}>{s.done}</div>
        <Mono style={{ fontSize: 11 }}>{s.doneSub}</Mono>
      </div>
    </Phone>
  );
}

function Screen2({ T, CUES, OR, a }) {
  const s = a.s2, k = CUES.Kitchen;
  const card = MOTION.enter(k + 0.4, k + 1.0)(T);
  const accept = MOTION.draw(k + 1.5, k + 1.7)(T);
  const prog = MOTION.draw(k + 1.8, k + 3.6)(T);
  const ready = prog >= 1;
  const acc = accept > 0.5;
  return (
    <div style={{ position: 'absolute', left: 1900, top: 160, width: 1000, height: 680, borderRadius: 28, background: '#1C1A1F', padding: 14, boxShadow: '0 40px 80px rgba(0,0,0,.5)' }}>
      <div style={{ width: '100%', height: '100%', borderRadius: 18, background: INK, display: 'grid', gridTemplateColumns: '200px 1fr', overflow: 'hidden', fontFamily: SANS, color: IV }}>
        <div style={{ borderRight: `1px solid ${LINE}`, padding: 26, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.02em' }}>{s.brand}</div>
          {s.nav.map((l, i) => <Mono key={l} style={{ fontSize: 12, color: i === 0 ? IV : GR }}>{l}</Mono>)}
        </div>
        <div style={{ padding: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.03em' }}>{s.head}</div>
            <Mono style={{ fontSize: 12 }}>{s.status}</Mono>
          </div>
          <div style={{ marginTop: 26, borderRadius: 16, border: `1px solid ${ready ? 'rgba(244,241,234,.2)' : OR}`, padding: 24, opacity: card, transform: `translateY(${(1 - card) * -40}px)` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <span style={{ background: OR, color: BK, fontFamily: MONO, fontSize: 11, letterSpacing: '.14em', padding: '5px 9px', fontWeight: 500 }}>{ready ? s.st[2] : acc ? s.st[1] : s.st[0]}</span>
                <span style={{ fontSize: 22, fontWeight: 800 }}>{s.card}</span>
              </div>
              <Mono style={{ fontSize: 12 }}>{s.meta}</Mono>
            </div>
            <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', fontSize: 17 }}>
              <span>{s.line[0]}</span><span style={{ color: GR }}>{s.line[1]}</span>
            </div>
            <div style={{ marginTop: 22, height: 8, borderRadius: 4, background: 'rgba(244,241,234,.08)', overflow: 'hidden' }}>
              <div style={{ width: `${prog * 100}%`, height: '100%', background: OR }} />
            </div>
            <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
              <div style={{ padding: '14px 26px', borderRadius: 10, background: acc ? 'rgba(244,241,234,.08)' : OR, color: acc ? GR : BK, fontWeight: 800, fontSize: 15 }}>{acc ? s.btn[1] : s.btn[0]}</div>
              <div style={{ padding: '14px 26px', borderRadius: 10, border: `1px solid ${LINE}`, color: GR, fontSize: 15 }}>{ready ? s.side[1] : s.side[0]}</div>
            </div>
          </div>
          {[0, 1].map(i => <div key={i} style={{ marginTop: 16, height: 64, borderRadius: 14, border: `1px solid ${LINE}`, opacity: 0.5 }} />)}
        </div>
      </div>
    </div>
  );
}

const ROUTE = [[60, 470], [150, 420], [150, 300], [260, 250], [260, 140], [310, 100]];
function along(p) {
  const segs = []; let total = 0;
  for (let i = 1; i < ROUTE.length; i++) { const d = Math.hypot(ROUTE[i][0] - ROUTE[i - 1][0], ROUTE[i][1] - ROUTE[i - 1][1]); segs.push(d); total += d; }
  let t = p * total;
  for (let i = 0; i < segs.length; i++) {
    if (t <= segs[i]) { const f = t / segs[i]; return [ROUTE[i][0] + (ROUTE[i + 1][0] - ROUTE[i][0]) * f, ROUTE[i][1] + (ROUTE[i + 1][1] - ROUTE[i][1]) * f]; }
    t -= segs[i];
  }
  return ROUTE[ROUTE.length - 1];
}

function MapScreen({ T, CUES, OR, s }) {
  const d = CUES.Dispatch;
  const draw = MOTION.draw(d + 0.2, d + 1.2)(T);
  const ride = MOTION.draw(d + 1.0, CUES.Delivered + 0.6)(T);
  const [rx, ry] = along(ride);
  const eta = Math.max(1, Math.round(s.mins - (s.mins - 1) * ride));
  const pts = ROUTE.map(p => p.join(',')).join(' ');
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#0F0E12' }}>
      <svg width="356" height="560" style={{ position: 'absolute', top: 0, left: 0 }}>
        {Array.from({ length: 9 }).map((_, i) => <line key={'v' + i} x1={i * 45} y1="0" x2={i * 45} y2="560" stroke="rgba(244,241,234,.06)" />)}
        {Array.from({ length: 13 }).map((_, i) => <line key={'h' + i} x1="0" y1={i * 45} x2="356" y2={i * 45} stroke="rgba(244,241,234,.06)" />)}
        <polyline points={pts} fill="none" stroke="rgba(244,241,234,.18)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={pts} fill="none" stroke={OR} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - draw} />
        <rect x={ROUTE[0][0] - 9} y={ROUTE[0][1] - 9} width="18" height="18" fill={IV} />
        <circle cx={ROUTE[5][0]} cy={ROUTE[5][1]} r="11" fill="none" stroke={IV} strokeWidth="3" />
        <circle cx={rx} cy={ry} r={14 + 3 * Math.sin(T * 6)} fill={OR} opacity=".25" />
        <circle cx={rx} cy={ry} r="9" fill={OR} />
      </svg>
      <div style={{ position: 'absolute', top: 60, left: 18, background: BK, border: `1px solid ${LINE}`, borderRadius: 12, padding: '10px 14px', fontFamily: SANS, color: IV }}>
        <Mono style={{ fontSize: 10 }}>Arriving in</Mono>
        <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.03em', marginTop: 2 }}>{eta} min</div>
      </div>
      <div style={{ position: 'absolute', left: 14, right: 14, bottom: 22, borderRadius: 18, background: '#1C1A1F', padding: 20, fontFamily: SANS, color: IV }}>
        <Mono style={{ fontSize: 10, color: OR }}>{s.label}</Mono>
        <div style={{ fontSize: 19, fontWeight: 800, marginTop: 8, letterSpacing: '-.02em' }}>{s.from} → {s.to}</div>
        <div style={{ marginTop: 14, height: 6, borderRadius: 3, background: 'rgba(244,241,234,.08)', overflow: 'hidden' }}><div style={{ width: `${ride * 100}%`, height: '100%', background: OR }} /></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: 13, color: GR }}><span>{s.person}</span><span>{s.dist}</span></div>
      </div>
    </div>
  );
}

function CallScreen({ T, CUES, OR, s }) {
  const d = CUES.Dispatch;
  const on = MOTION.enter(d + 0.2, d + 0.9)(T);
  const secs = Math.max(0, Math.floor((T - d - 0.6) * 18));
  const mm = String(Math.floor(secs / 60)).padStart(2, '0'), ss = String(secs % 60).padStart(2, '0');
  const bill = s.rate ? Math.ceil(Math.max(secs, 1) / 60) * s.rate : 0;
  const initials = s.who.split(' ').map(w => w[0]).slice(0, 2).join('');
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#0F0E12', fontFamily: SANS, color: IV, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 110 }}>
      <Mono style={{ fontSize: 11, color: OR, opacity: on }}>{s.label}</Mono>
      <div style={{ position: 'relative', marginTop: 40, width: 170, height: 170 }}>
        {[0, 1, 2].map(i => {
          const ph = ((T * 0.8 + i / 3) % 1);
          return <div key={i} style={{ position: 'absolute', inset: -ph * 60, borderRadius: '50%', border: `2px solid ${OR}`, opacity: (1 - ph) * 0.5 * on }} />;
        })}
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#2A2530', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 54, fontWeight: 800, letterSpacing: '-.04em', transform: `scale(${MOTION.pop(d + 0.1, d + 0.8)(T)})` }}>{initials}</div>
      </div>
      <div style={{ marginTop: 36, fontSize: 26, fontWeight: 800, letterSpacing: '-.03em', opacity: on }}>{s.who}</div>
      <div style={{ marginTop: 10, fontFamily: MONO, fontSize: 30, letterSpacing: '.08em', opacity: on }}>{mm}:{ss}</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 44, marginTop: 26, opacity: on }}>
        {Array.from({ length: 16 }).map((_, i) => <div key={i} style={{ width: 6, borderRadius: 3, background: OR, height: 8 + 30 * Math.abs(Math.sin(T * 5 + i * 0.7)) }} />)}
      </div>
      <div style={{ position: 'absolute', left: 14, right: 14, bottom: 22, borderRadius: 18, background: '#1C1A1F', padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Mono style={{ fontSize: 10 }}>{s.rate ? 'Billed so far' : 'Prescription'}</Mono>
          <div style={{ fontSize: 22, fontWeight: 800, marginTop: 6 }}>{s.rate ? `₹${bill}` : (T > CUES.Delivered ? 'Sent to app' : 'Drafting…')}</div>
        </div>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: OR, display: 'flex', alignItems: 'center', justifyContent: 'center', color: BK, fontWeight: 800, fontSize: 13, fontFamily: MONO }}>END</div>
      </div>
    </div>
  );
}

function PlayerScreen({ T, CUES, OR, s }) {
  const d = CUES.Dispatch;
  const on = MOTION.enter(d + 0.2, d + 0.9)(T);
  const prog = MOTION.draw(d + 0.6, CUES.Delivered + 1.2)(T);
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#0F0E12', fontFamily: SANS, color: IV }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 70, height: 220, background: '#1F1B22', overflow: 'hidden', opacity: on }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(135deg,rgba(244,241,234,.05) 0 2px,transparent 2px 12px)', transform: `translateX(${-T * 12 % 24}px)` }} />
        <div style={{ position: 'absolute', left: '50%', top: '50%', width: 64, height: 64, marginLeft: -32, marginTop: -32, borderRadius: '50%', background: 'rgba(8,7,10,.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', gap: 6 }}><div style={{ width: 7, height: 24, background: IV }} /><div style={{ width: 7, height: 24, background: IV }} /></div>
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 5, background: 'rgba(244,241,234,.15)' }}><div style={{ width: `${prog * 100}%`, height: '100%', background: OR }} /></div>
      </div>
      <div style={{ padding: '316px 22px 0', opacity: on }}>
        <Mono style={{ fontSize: 11, color: OR }}>{s.label}</Mono>
        <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.03em', marginTop: 10 }}>{s.title}</div>
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 12, borderRadius: 12, background: 'rgba(244,241,234,.04)' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', border: `2px solid ${i === 0 ? OR : 'rgba(244,241,234,.3)'}`, background: i === 0 && prog > 0.9 ? OR : 'transparent' }} />
              <div style={{ height: 10, borderRadius: 5, background: 'rgba(244,241,234,.14)', width: [160, 130, 180][i] }} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 14, right: 14, bottom: 22, borderRadius: 18, background: '#1C1A1F', padding: 18 }}>
        <Mono style={{ fontSize: 10 }}>{s.next}</Mono>
      </div>
    </div>
  );
}

function BookingScreen({ T, CUES, OR, s }) {
  const d = CUES.Dispatch;
  const on = MOTION.enter(d + 0.2, d + 0.9)(T);
  const days = Array.from({ length: 21 }).map((_, i) => 5 + i);
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#0F0E12', fontFamily: SANS, color: IV, padding: '70px 22px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, opacity: on }}>
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: OR, transform: `scale(${MOTION.pop(d + 0.3, d + 0.9)(T)})` }} />
        <Mono style={{ fontSize: 11, color: OR }}>{s.label}</Mono>
      </div>
      <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.03em', marginTop: 16, opacity: on }}>{s.title}</div>
      <Mono style={{ fontSize: 11, marginTop: 6, opacity: on }}>December</Mono>
      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6 }}>
        {days.map((n, i) => {
          const hit = s.dates.includes(String(n));
          const p = hit ? MOTION.enter(d + 0.8 + s.dates.indexOf(String(n)) * 0.25, d + 1.3 + s.dates.indexOf(String(n)) * 0.25)(T) : 0;
          return <div key={i} style={{ height: 40, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, background: hit ? `rgba(240,68,35,${p})` : 'rgba(244,241,234,.04)', color: hit && p > 0.5 ? BK : GR }}>{n}</div>;
        })}
      </div>
      <div style={{ position: 'absolute', left: 14, right: 14, bottom: 22, borderRadius: 18, background: '#1C1A1F', padding: 20 }}>
        <Mono style={{ fontSize: 10 }}>Check-in</Mono>
        <div style={{ fontSize: 19, fontWeight: 800, marginTop: 8 }}>{T > CUES.Delivered ? 'Door code sent · 3 pm' : 'Host preparing'}</div>
      </div>
    </div>
  );
}

function Screen3({ T, CUES, OR, a }) {
  const s = a.s3;
  const C = { map: MapScreen, call: CallScreen, player: PlayerScreen, booking: BookingScreen }[s.type] || MapScreen;
  return <Phone left={3810} top={110}><C T={T} CUES={CUES} OR={OR} s={s} /></Phone>;
}

function Camera({ T, CUES, children }) {
  const toK = MOTION.draw(CUES.Kitchen - 0.5, CUES.Kitchen + 0.4)(T);
  const toD = MOTION.draw(CUES.Dispatch - 0.5, CUES.Dispatch + 0.4)(T);
  const out = MOTION.draw(CUES.Delivered + 0.6, CUES.Delivered + 1.8)(T);
  const back = MOTION.draw(CUES.Delivered + 4.2, CUES.Delivered + 5)(T);
  const sc = 1 + (1 / 3 - 1) * out;
  const tx = -1600 * (toK + toD) * (1 - out);
  const ty = ((H - H / 3) / 2) * out + Math.sin(T * 0.4) * 6;
  return <div style={{ position: 'absolute', left: 0, top: 0, width: 4800, height: H, transformOrigin: '0 0', transform: `translate(${tx}px, ${ty}px) scale(${sc})`, opacity: 1 - back }}>{children}</div>;
}

function Chrome({ T, CUES, OR, a }) {
  const p = MOTION.enter(0.1, 0.8)(T);
  const back = MOTION.draw(CUES.Delivered + 4.2, CUES.Delivered + 5)(T);
  const end = MOTION.enter(CUES.Delivered + 1.6, CUES.Delivered + 2.3)(T);
  const ats = [CUES.Order + 0.4, CUES.Kitchen + 0.4, CUES.Dispatch + 0.4, CUES.Delivered + 0.6];
  return (
    <>
      <div style={{ position: 'absolute', left: 80, top: 52, display: 'flex', alignItems: 'center', gap: 14, opacity: p * (1 - back) }}>
        <div style={{ width: 16, height: 16, background: OR }} />
        <Mono style={{ color: IV }}>How we’d build it · {a.cat}</Mono>
      </div>
      <Mono style={{ position: 'absolute', right: 80, top: 52, opacity: p * (1 - back) }}>Mariox Software</Mono>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 150, textAlign: 'center', opacity: end * (1 - back), transform: `translateY(${(1 - end) * 20}px)`, fontFamily: SANS, fontWeight: 800, fontSize: 64, letterSpacing: '-.045em', color: IV }}>
        {a.end[0]} <span style={{ color: OR }}>{a.end[1]}</span>
      </div>
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 52, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, opacity: 1 - back }}>
        {a.steps.map((l, i) => {
          const on = MOTION.draw(ats[i], ats[i] + 0.6)(T);
          return (
            <div key={i}>
              <div style={{ height: 3, background: 'rgba(244,241,234,.14)', overflow: 'hidden' }}><div style={{ width: `${on * 100}%`, height: '100%', background: OR }} /></div>
              <Mono style={{ marginTop: 14, color: on > 0.5 ? IV : GR }}>{String(i + 1).padStart(2, '0')} {l}</Mono>
            </div>
          );
        })}
      </div>
    </>
  );
}

function Demo({ app, accent }) {
  const { T, CUES } = useComposition();
  const OR = accent || '#F04423';
  const key = pickApp(app);
  const a = APPS[key];
  return (
    <div data-screen-label={`${key} · t=${Math.floor(T)}s`} style={{ position: 'absolute', inset: 0, background: BK, overflow: 'hidden' }}>
      <Camera T={T} CUES={CUES}>
        <Screen1 T={T} CUES={CUES} OR={OR} a={a} />
        <Screen2 T={T} CUES={CUES} OR={OR} a={a} />
        <Screen3 T={T} CUES={CUES} OR={OR} a={a} />
      </Camera>
      <Chrome T={T} CUES={CUES} OR={OR} a={a} />
    </div>
  );
}

// app: astrotalk | uber | zomato | blinkit | practo | udemy | airbnb | netflix
export default function MarioxAppDemo({ app = 'zomato', accent = '#F04423', chrome = false }) {
  return (
    <CompositionStage width={W} height={H} scenes={SCENES} playback={PLAYBACK} bg={BK} chrome={chrome}>
      <Demo app={app} accent={accent} />
    </CompositionStage>
  );
}

export const APP_KEYS = Object.keys(APPS);
export const APP_LABELS = Object.fromEntries(Object.keys(APPS).map((k) => [k, APPS[k].cat]));
