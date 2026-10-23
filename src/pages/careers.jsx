import React, { useEffect, useState } from 'react';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import ApplyForm from '@/components/final/ApplyForm';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { roles, teams, locations } from '@/data/final/careers';
import { SITE_URL } from '@/data/site';

// Careers page from the design's `Mariox Careers`: the open roles table with
// filters, life at Mariox, how we hire, the offices and the application form.

const FACTS = [
  { v: '2016', k: 'Founded' },
  { v: '100+', k: 'In-house team' },
  { v: '4', k: 'Offices' },
  { v: '300+', k: 'Products shipped' },
];

const PHOTOS = [
  ['team-office-group.png', 'center 40%', 'One team, one floor'],
  ['team-office-seated.png', 'center 35%', 'Sprint reviews'],
  ['team-offsite-group.png', 'center 35%', 'Annual offsite'],
  ['office-workspace.png', 'center 50%', 'The studio'],
  ['team-night-out.png', 'center 30%', 'Team night out'],
  ['office-meeting-room.png', 'center 50%', 'Planning room'],
];

const WHY = [
  { n: '01', t: 'Real products, real users', b: 'Work on products for clients like Airwallex, Zeller and HotDoc, not internal demos.' },
  { n: '02', t: 'Learn from seniors', b: 'Code reviews and pairing with engineers who have shipped 300+ products.' },
  { n: '03', t: 'Own what you build', b: 'Small teams and clear ownership. Your name is on the release.' },
  { n: '04', t: 'A modern stack', b: 'React, Next.js, Node, Flutter, AWS, and AI in production with LLMs.' },
  { n: '05', t: 'Global from day one', b: 'Work directly with client teams in the US, UK, Australia and India.' },
  { n: '06', t: 'A clear path up', b: 'Regular reviews and a path from engineer to lead to architect.' },
];

const PROCESS = [
  { n: '01', t: 'Apply', b: 'Send your CV and a few lines on what you want to work on.', when: 'Day 0' },
  { n: '02', t: 'Intro call', b: '30 minutes with someone from the team you would join.', when: 'Within 5 days' },
  { n: '03', t: 'Skill round', b: 'A practical task or pairing session close to real work.', when: 'Week 2' },
  { n: '04', t: 'Meet the team', b: 'Talk to the people you would work with and ask anything.', when: 'Week 2–3' },
  { n: '05', t: 'Offer', b: 'A clear written offer and a start date that suits you.', when: 'Within 3 weeks' },
];

const OFFICES = [
  ['Noida', 'Uttar Pradesh, India', 'Headquarters', 'Asia/Kolkata'],
  ['Bangalore', 'Karnataka, India', 'Engineering', 'Asia/Kolkata'],
  ['Dallas', 'Texas, USA', 'North America', 'America/Chicago'],
  ['Australia', 'Asia-Pacific', 'Client team', 'Australia/Sydney'],
];

const FAQ = [
  ['Do I need to match every requirement?', 'No. If you meet most of them and can show work you are proud of, apply.'],
  ['How long does hiring take?', 'Usually two to three weeks from application to offer. We tell you at each step what comes next.'],
  ['Can I apply for more than one role?', 'Yes. Pick the closest one and mention the others in your message.'],
  ['Are roles remote?', 'It depends on the role. Each listing shows the office it is based in.'],
  ['No role fits me. Can I still apply?', 'Yes. Choose “General application” or write to career@marioxsoftware.com with the kind of work you want to do.'],
];

function LocalTime({ tz }) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      try { setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: tz })); } catch (e) { setTime(''); }
    };
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, [tz]);
  return <El as="span">{time || '--:--'} local</El>;
}

export default function Careers() {
  const [team, setTeam] = useState('All');
  const [loc, setLoc] = useState('All');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(-1);
  const [faqOpen, setFaqOpen] = useState(0);
  const [wide, setWide] = useState(true);
  const [role, setRole] = useState('General application');
  const [office, setOffice] = useState('Open to any');
  useReveal([team, loc, q, open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)');
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  const query = q.trim().toLowerCase();
  const list = roles
    .map((r, i) => ({ ...r, i }))
    .filter((r) => (team === 'All' || r.team === team)
      && (loc === 'All' || r.locs.includes(loc))
      && (!query || `${r.title} ${r.team} ${r.stack.join(' ')}`.toLowerCase().includes(query)));
  const filtered = team !== 'All' || loc !== 'All' || !!query;

  const applyTo = (r) => () => {
    setRole(r.title);
    setOffice(r.locs[0]);
    const el = document.getElementById('apply');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  const chip = (on) => `cursor:pointer;min-height:40px;white-space:nowrap;border-radius:999px;padding:8px 15px;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.25)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};font-family:Geist,sans-serif;font-size:14px;transition:all .25s`;
  const roleOptions = ['General application'].concat(roles.map((r) => r.title)).concat(['Internship / graduate']);

  return (
    <>
      <Seo
        title={`Careers at Mariox Software — ${roles.length} open positions`}
        description="Join 100+ in-house engineers, designers and AI specialists building products for global clients since 2016. See open roles and apply at career@marioxsoftware.com."
        canonical={`${SITE_URL}/careers`}
      />
      <JsonLd
        id="careers-jobs"
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Open positions at Mariox Software',
          itemListElement: roles.map((r, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'JobPosting',
              title: r.title,
              description: r.summary,
              employmentType: r.type === 'Full-time' ? 'FULL_TIME' : r.type,
              hiringOrganization: { '@type': 'Organization', name: 'Mariox Software', sameAs: SITE_URL },
              jobLocation: r.locs.map((city) => ({ '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: city } })),
            },
          })),
        }}
      />
      <JsonLd id="careers-faq" data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }} />

      <Shell>
        <Nav active="careers" ctaHref="#apply" ctaLabel="Apply now" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`position:relative;min-height:100svh;display:grid;grid-template-rows:1fr auto;padding:130px ${PAD} clamp(24px,3vw,40px);overflow:hidden;isolation:isolate`}>
            <El aria-hidden="true" css="position:absolute;inset:-4% 0;z-index:-2;background:#08070A url('/assets/company/team-office-group.png') center 40%/cover no-repeat" />
            <El aria-hidden="true" css="position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(8,7,10,.94) 0%,rgba(8,7,10,.78) 40%,rgba(8,7,10,.3) 100%),linear-gradient(0deg,#08070A 0%,rgba(8,7,10,0) 38%)" />
            <El css="align-self:center;max-width:1100px">
              <El css={`display:flex;align-items:center;gap:12px;${MONO};font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#D9D5CD;margin-bottom:clamp(22px,3vw,36px)`}>
                <El as="span" css="width:8px;height:8px;background:#F04423;animation:mxPulse 2.4s ease-in-out infinite" />
                <span>We are hiring &#183; {roles.length} open positions</span>
              </El>
              <El as="h1" css="margin:0;font-size:clamp(3.4rem,10vw,10.5rem);line-height:.84;letter-spacing:-.075em;font-weight:500">
                <El as="span" css="display:block">Build what</El>
                <El as="span" css="display:block">comes next.</El>
                <El as="span" css="display:block;font-family:'Instrument Serif',serif;font-weight:400;letter-spacing:-.035em;color:#F04423">With us.</El>
              </El>
              <El as="p" css="margin:clamp(24px,3vw,40px) 0 0;max-width:46ch;font-size:clamp(16px,1.35vw,19px);line-height:1.55;color:#D9D5CD;text-wrap:pretty">Since 2016, 100+ in-house engineers, designers and AI specialists have shipped 300+ products from our offices in Noida, Bangalore, Dallas and Australia.</El>
              <El css="display:flex;flex-wrap:wrap;gap:12px;margin-top:clamp(28px,3.4vw,44px)">
                <El as="a" href="#roles" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 26px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F4F1EA;color:#08070A">See open roles <span>&#8595;</span></El>
                <El as="a" href="mailto:career@marioxsoftware.com" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.35);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:border-color .3s" hover="border-color:#F4F1EA;color:#F4F1EA">career@marioxsoftware.com</El>
              </El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));border-top:1px solid rgba(244,241,234,.2);margin-top:clamp(40px,5vw,64px)">
              {FACTS.map((x) => (
                <El key={x.k} css="padding:18px clamp(0px,1.4vw,22px) 0 0;display:flex;flex-direction:column;gap:6px">
                  <El as="span" css="font-size:clamp(2rem,3.4vw,3.2rem);font-weight:300;letter-spacing:-.07em;line-height:1">{x.v}</El>
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#B7B2AA`}>{x.k}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 02 Open positions */}
          <El as="section" id="roles" css={`background:#08070A;padding:clamp(80px,9vw,140px) ${PAD} clamp(100px,12vw,190px)`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(32px,4vw,56px)">
              <El>
                <El css={`display:flex;align-items:center;gap:10px;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:16px`}>
                  <El as="span" css="width:8px;height:8px;border-radius:50%;background:#F04423;animation:mxPulse 2s ease-in-out infinite" />Open roles
                </El>
                <El as="h2" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.06em;font-weight:500">{roles.length} open <Em>positions.</Em></El>
              </El>
              <El as="p" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">These are the jobs we are hiring for right now. Click a position for the full description, or press Apply to go straight to the form.</El>
            </El>

            <El css="position:sticky;top:64px;z-index:5;background:rgba(8,7,10,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);display:flex;flex-direction:column;gap:12px;padding:16px 0;border-bottom:1px solid rgba(244,241,234,.14)">
              <El css="display:flex;flex-wrap:wrap;gap:7px;align-items:center">
                <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;min-width:64px`}>Team</El>
                {teams.map((t) => (
                  <El as="button" type="button" key={t} aria-pressed={team === t} onClick={() => { setTeam(t); setOpen(-1); }} css={chip(team === t)}>
                    {t} <El as="span" css="opacity:.6;margin-left:4px">{t === 'All' ? roles.length : roles.filter((r) => r.team === t).length}</El>
                  </El>
                ))}
              </El>
              <El css="display:flex;flex-wrap:wrap;gap:7px;align-items:center;justify-content:space-between">
                <El css="display:flex;flex-wrap:wrap;gap:7px;align-items:center">
                  <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;min-width:64px`}>City</El>
                  {locations.map((l) => (
                    <El as="button" type="button" key={l} aria-pressed={loc === l} onClick={() => { setLoc(l); setOpen(-1); }} css={chip(loc === l)}>{l}</El>
                  ))}
                </El>
                <El as="label" css="display:flex;align-items:center;gap:10px;border:1px solid rgba(244,241,234,.22);border-radius:999px;padding:0 16px;min-height:42px;min-width:min(100%,240px)">
                  <El as="span" aria-hidden="true" css="width:9px;height:9px;border:1.5px solid #8E8A85;border-radius:50%" />
                  <input type="search" value={q} onChange={(e) => { setQ(e.target.value); setOpen(-1); }} placeholder="Search roles or skills" aria-label="Search roles" style={{ flex: 1, minWidth: 0, background: 'transparent', border: 0, outline: 'none', color: '#F4F1EA', fontFamily: 'Geist, sans-serif', fontSize: 14, padding: '9px 0' }} />
                </El>
              </El>
            </El>

            <El css="font-size:14.5px;color:#8E8A85;padding:14px 0">
              {list.length ? `${list.length} ${list.length === 1 ? 'role' : 'roles'}${filtered ? ' match' : ' open right now'}` : ''}
            </El>

            {wide ? (
              <El css={`display:grid;grid-template-columns:minmax(0,2.4fr) minmax(0,1fr) minmax(0,1fr) minmax(0,.8fr) 210px;gap:24px;padding:12px 0;border-top:1px solid rgba(244,241,234,.16);${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>
                <span>Position</span><span>Team</span><span>Location</span><span>Experience</span><span />
              </El>
            ) : null}

            <El css="border-top:1px solid rgba(244,241,234,.16)">
              {list.map((r) => {
                const on = open === r.i;
                return (
                  <El as="article" key={r.title} css="border-bottom:1px solid rgba(244,241,234,.16)">
                    <El role="button" tabIndex={0} aria-expanded={on} onClick={() => setOpen(on ? -1 : r.i)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(on ? -1 : r.i); } }} css={`cursor:pointer;display:grid;grid-template-columns:${wide ? 'minmax(0,2.4fr) minmax(0,1fr) minmax(0,1fr) minmax(0,.8fr) 210px' : 'minmax(0,1fr) auto'};gap:10px 24px;align-items:center;padding:clamp(18px,2.2vw,28px) 0`}>
                      <El as="span" css="display:flex;flex-direction:column;gap:6px;min-width:0">
                        <El as="span" css="font-size:clamp(1.25rem,2.2vw,2rem);font-weight:500;letter-spacing:-.045em;line-height:1.05">{r.title}</El>
                        {!wide ? <El as="span" css="font-size:14px;color:#B7B2AA">{r.team} &#183; {r.locs.join(' / ')} &#183; {r.exp}</El> : null}
                      </El>
                      {wide ? <El as="span" css="font-size:15px;color:#D9D5CD">{r.team}</El> : null}
                      {wide ? <El as="span" css="font-size:15px;color:#D9D5CD">{r.locs.join(' / ')}</El> : null}
                      {wide ? <El as="span" css="font-size:15px;color:#D9D5CD">{r.exp}</El> : null}
                      <El as="span" css="display:flex;align-items:center;justify-content:flex-end;gap:10px">
                        <El as="button" type="button" onClick={(e) => { e.stopPropagation(); applyTo(r)(); }} css="cursor:pointer;border:0;background:#F04423;color:#08070A;padding:12px 18px;min-height:44px;border-radius:999px;font-family:Geist,sans-serif;font-size:14px;font-weight:500;white-space:nowrap">Apply</El>
                        <El as="span" aria-hidden="true" css={`width:44px;height:44px;flex-shrink:0;border-radius:50%;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.3)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#F4F1EA'};display:flex;align-items:center;justify-content:center;font-size:18px;transition:all .25s`}>{on ? '−' : '+'}</El>
                      </El>
                    </El>
                    {on ? (
                      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:clamp(24px,3.4vw,56px);padding:0 0 clamp(36px,4vw,56px) clamp(0px,3vw,44px)">
                        <El css="display:flex;flex-direction:column;gap:20px">
                          <El as="p" css="margin:0;font-size:clamp(1.15rem,1.6vw,1.45rem);line-height:1.35;letter-spacing:-.025em;text-wrap:pretty">{r.summary}</El>
                          <El css="display:flex;flex-wrap:wrap;gap:7px">
                            {r.stack.map((t) => <El as="span" key={t} css="border:1px solid rgba(244,241,234,.25);border-radius:999px;padding:6px 12px;font-size:13px;color:#D9D5CD">{t}</El>)}
                          </El>
                          <El css={`display:flex;flex-wrap:wrap;gap:8px 20px;${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85`}>
                            <span>{r.type}</span><span>{r.locs.join(' / ')}</span><span>{r.exp}</span>
                          </El>
                        </El>
                        <El>
                          <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:10px`}>What you will do</El>
                          {r.does.map((d) => (
                            <El key={d} css="display:flex;gap:12px;align-items:baseline;padding:10px 0;border-bottom:1px solid rgba(244,241,234,.12);font-size:15px;line-height:1.45;color:#D9D5CD">
                              <El as="span" css="width:5px;height:5px;background:#F04423;flex-shrink:0;transform:translateY(-3px)" />{d}
                            </El>
                          ))}
                        </El>
                        <El css="display:flex;flex-direction:column;gap:22px">
                          <El>
                            <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:10px`}>What we look for</El>
                            {r.needs.map((d) => (
                              <El key={d} css="display:flex;gap:12px;align-items:baseline;padding:10px 0;border-bottom:1px solid rgba(244,241,234,.12);font-size:15px;line-height:1.45;color:#D9D5CD">
                                <El as="span" css="width:5px;height:5px;border:1px solid #F04423;flex-shrink:0;transform:translateY(-3px)" />{d}
                              </El>
                            ))}
                          </El>
                          <El as="button" type="button" onClick={applyTo(r)} css="align-self:flex-start;cursor:pointer;border:0;display:flex;align-items:center;gap:12px;background:#F04423;color:#08070A;padding:16px 24px;border-radius:999px;font-family:Geist,sans-serif;font-size:15px;font-weight:500">Apply for this role <span>&#8594;</span></El>
                        </El>
                      </El>
                    ) : null}
                  </El>
                );
              })}
            </El>

            {!list.length ? (
              <El css="padding:clamp(40px,5vw,80px) 0;display:flex;flex-direction:column;gap:14px;align-items:flex-start">
                <El css="font-size:clamp(1.6rem,3vw,2.6rem);font-weight:500;letter-spacing:-.05em">No role matches that.</El>
                <El as="button" type="button" onClick={() => { setTeam('All'); setLoc('All'); setQ(''); }} css="cursor:pointer;background:transparent;border:0;color:#F04423;font-family:Geist,sans-serif;font-size:15px;border-bottom:1px solid #F04423;padding:0 0 4px">Show all roles</El>
              </El>
            ) : null}
          </El>

          {/* 03 Life */}
          <El as="section" aria-label="Life at Mariox" css="background:#08070A;padding:0 0 clamp(70px,8vw,120px);overflow:hidden">
            <El css="display:flex;width:max-content;gap:clamp(10px,1.2vw,16px);animation:mxMarquee 70s linear infinite">
              {PHOTOS.concat(PHOTOS).map((p, i) => (
                <El key={p[0] + i} aria-hidden={i >= PHOTOS.length ? 'true' : undefined} css="width:clamp(260px,30vw,460px);flex-shrink:0;display:flex;flex-direction:column;gap:10px">
                  <El css={`aspect-ratio:3/2;background:#141216 center/cover no-repeat;background-image:url('/assets/company/${p[0]}');background-position:${p[1]}`} />
                  <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{p[2]}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 04 Statement */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(100px,12vw,200px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:clamp(24px,4vw,64px)">
              <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55`}>Who we hire</El>
              <El as="p" data-rv="1" css="grid-column:span 3;min-width:min(100%,300px);margin:0;font-size:clamp(2rem,4.6vw,4.8rem);line-height:1.02;letter-spacing:-.055em;font-weight:500;text-wrap:pretty">
                We hire people who <Em>finish things,</Em> ask good questions and care what happens after launch. Titles matter less than the work you are proud of.
              </El>
            </El>
          </El>

          {/* 05 Why Mariox */}
          <El as="section" id="why" css={`background:#F4F1EA;color:#08070A;padding:0 ${PAD} clamp(100px,12vw,190px)`}>
            <El as="h2" data-rv="1" css="margin:0 0 clamp(36px,4.6vw,64px);font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Why engineers <Em>stay.</Em></El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));border-top:1px solid rgba(8,7,10,.2);border-left:1px solid rgba(8,7,10,.2)">
              {WHY.map((w) => (
                <El key={w.n} data-rv="1" css="border-right:1px solid rgba(8,7,10,.2);border-bottom:1px solid rgba(8,7,10,.2);padding:clamp(24px,3vw,40px);min-height:230px;display:flex;flex-direction:column;gap:12px">
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;color:#F04423`}>{w.n}</El>
                  <El as="h3" css="margin:auto 0 0;font-size:clamp(1.4rem,2.2vw,2rem);line-height:1;letter-spacing:-.05em;font-weight:500">{w.t}</El>
                  <El as="p" css="margin:0;font-size:15px;line-height:1.5;color:#4A4741">{w.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 06 Hiring process */}
          <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">How we <Em>hire.</Em></El>
              <El as="p" data-rv="1" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Five steps, two to three weeks, and you always know what comes next.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:clamp(16px,2vw,28px)">
              {PROCESS.map((p, i) => (
                <El key={p.n} data-rv="1" css={`border-top:2px solid ${i === 2 ? '#F04423' : 'rgba(244,241,234,.4)'};padding-top:18px;display:flex;flex-direction:column;gap:10px`}>
                  <El css={`display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}><El as="span" css="color:#F04423">{p.n}</El><span>{p.when}</span></El>
                  <El as="h3" css="margin:0;font-size:clamp(1.4rem,2vw,1.9rem);letter-spacing:-.05em;font-weight:500">{p.t}</El>
                  <El as="p" css="margin:0;font-size:15px;line-height:1.5;color:#B7B2AA">{p.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 07 Offices */}
          <El as="section" css={`padding:0 ${PAD} clamp(90px,11vw,170px)`}>
            <El as="h2" data-rv="1" css="margin:0 0 clamp(28px,3.4vw,44px);font-size:clamp(2rem,4vw,3.6rem);letter-spacing:-.055em;font-weight:500">Where you would <Em>sit.</Em></El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));border-top:1px solid rgba(244,241,234,.16);border-left:1px solid rgba(244,241,234,.16)">
              {OFFICES.map((o, i) => {
                const count = roles.filter((r) => r.locs.includes(o[0])).length;
                return (
                  <El key={o[0]} data-rv="1" css="border-right:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16);padding:clamp(22px,2.6vw,34px);min-height:230px;display:flex;flex-direction:column;gap:14px">
                    <El css={`display:flex;justify-content:space-between;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>
                      <span>0{i + 1} &#183; {o[2]}</span><LocalTime tz={o[3]} />
                    </El>
                    <El as="h3" css="margin:auto 0 0;font-size:clamp(1.6rem,2.6vw,2.4rem);line-height:1;letter-spacing:-.055em;font-weight:500">{o[0]}</El>
                    <El as="span" css="font-size:14.5px;color:#B7B2AA">{o[1]}</El>
                    <El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#F04423`}>{count} open {count === 1 ? 'role' : 'roles'}</El>
                  </El>
                );
              })}
            </El>
          </El>

          {/* 08 Early careers */}
          <El as="section" css={`background:#F04423;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(32px,5vw,90px);align-items:end">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.8rem,7vw,7.4rem);line-height:.84;letter-spacing:-.07em;font-weight:500">Just starting <Em>out?</Em></El>
              <El css="display:flex;flex-direction:column;gap:22px">
                <El as="p" data-rv="1" css="margin:0;max-width:46ch;font-size:clamp(16px,1.35vw,19px);line-height:1.5">We take interns and graduates in engineering, design and QA. You work on real client products from your first month, with a senior mentor reviewing your work.</El>
                <El as="button" type="button" onClick={() => { setRole('Internship / graduate'); const el = document.getElementById('apply'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} css="align-self:flex-start;cursor:pointer;border:0;display:flex;align-items:center;gap:12px;background:#08070A;color:#F4F1EA;padding:18px 26px;border-radius:999px;font-family:Geist,sans-serif;font-size:15px;font-weight:500">Apply as a graduate <span>&#8594;</span></El>
              </El>
            </El>
          </El>

          {/* 09 Apply */}
          <El as="section" id="apply" css={`background:#08070A;padding:clamp(100px,12vw,190px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:clamp(36px,5vw,80px);align-items:start">
              <El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.8rem,7vw,7.2rem);line-height:.84;letter-spacing:-.07em;font-weight:500">Say <Em>hello.</Em></El>
                <El as="p" data-rv="1" css="margin:22px 0 0;max-width:42ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">We reply to every application. Send the form and email your CV to career@marioxsoftware.com so it reaches the same thread.</El>
                <El css="display:flex;flex-direction:column;gap:8px;margin-top:28px;font-size:15px">
                  <El as="a" href="mailto:career@marioxsoftware.com">career@marioxsoftware.com</El>
                  <El as="a" href="tel:+919599287045">+91 95992 87045</El>
                </El>
              </El>
              <ApplyForm roleOptions={roleOptions} role={role} office={office} onRoleChange={setRole} onOfficeChange={setOffice} />
            </El>
          </El>

          {/* 10 FAQ */}
          <El as="section" css={`padding:0 ${PAD} clamp(90px,11vw,170px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,72px);align-items:start`}>
            <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Applying, <Em>answered.</Em></El>
            <El css="grid-column:span 2;min-width:min(100%,300px);border-top:1px solid rgba(244,241,234,.16)">
              {FAQ.map(([question, answer], i) => {
                const on = faqOpen === i;
                return (
                  <El key={question} css="border-bottom:1px solid rgba(244,241,234,.16)">
                    <El as="button" type="button" onClick={() => setFaqOpen(on ? -1 : i)} aria-expanded={on} css="width:100%;background:transparent;border:0;color:#F4F1EA;cursor:pointer;display:flex;justify-content:space-between;gap:20px;align-items:baseline;padding:clamp(18px,2vw,26px) 0;text-align:left;font-family:Geist,sans-serif;font-size:clamp(1.1rem,1.7vw,1.5rem);font-weight:500;letter-spacing:-.035em">
                      {question}<El as="span" css={`${MONO};font-size:18px;color:#F04423`}>{on ? '−' : '+'}</El>
                    </El>
                    {on ? <El as="p" css="margin:0 0 24px;max-width:60ch;font-size:16px;line-height:1.6;color:#B7B2AA">{answer}</El> : null}
                  </El>
                );
              })}
            </El>
          </El>

          <Footer />
        </El>
      </Shell>
    </>
  );
}

Careers.bare = true;
