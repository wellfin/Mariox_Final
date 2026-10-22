import React, { useState } from 'react';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import HireBrief from '@/components/final/HireBrief';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { roles, groups } from '@/data/final/hire';
import { SITE_URL } from '@/data/site';

// Hire page from the design's `hire.dc.html`: browse 30 roles, build a team
// and send the brief.

const TICKER = ['React', 'Node.js', 'Python', 'Flutter', 'Swift', 'Kotlin', 'Java', '.NET', 'Go', 'AWS', 'Kubernetes', 'LLMs', 'Figma', 'Salesforce'];

const MODELS = [
  { t: 'Dedicated developer', tag: 'Full-time', b: 'One engineer working only on your product, full-time, in your tools.', pts: ['40 hours a week', 'Your standups and sprints', 'Monthly billing'] },
  { t: 'Dedicated team', tag: 'Most chosen', b: 'A cross-functional squad with a Mariox delivery lead, shaped to your roadmap.', pts: ['Developers, QA, design, PM', 'Sprint demos and reporting', 'Scale up or down monthly'] },
  { t: 'Staff augmentation', tag: 'Flexible', b: 'Add senior people to your existing team to close a skill gap or hit a deadline.', pts: ['Part-time or full-time', 'Start in 1–2 weeks', 'Replacement if it is not a fit'] },
];

const STEPS = [
  { d: 'Day 1', t: 'Brief', b: 'A 30-minute call on the role, stack, product and time zone.' },
  { d: '48 h', t: 'Profiles', b: 'Hand-picked profiles from our team, matched to your stack.' },
  { d: 'Week 1', t: 'Interview', b: 'You interview and test them. Only your yes moves forward.' },
  { d: 'Week 2', t: 'Onboard', b: 'Access, tools and a first task. First commit in days, not months.' },
  { d: 'Ongoing', t: 'Support', b: 'A delivery lead checks in every month and handles any change.' },
];

const VETTING = [
  { n: '01', t: 'Technical interview', b: 'Senior engineers test depth in the stack, not trivia.' },
  { n: '02', t: 'Live coding', b: 'A real problem solved live, with code review and trade-offs explained.' },
  { n: '03', t: 'System design', b: 'For senior roles: how they would build it, scale it and keep it running.' },
  { n: '04', t: 'Communication', b: 'Spoken and written English, async habits and how they handle ambiguity.' },
];

const COMPARE = [
  { k: 'Time to start', a: '2–4 months', b: '1–2 weeks' },
  { k: 'Recruiting effort', a: 'Sourcing, screening, offers', b: 'Interview pre-vetted profiles' },
  { k: 'If it is not a fit', a: 'Restart the process', b: 'Replacement arranged' },
  { k: 'Scaling', a: 'New hiring round', b: 'Up or down by the month' },
  { k: 'Overheads', a: 'Equipment, benefits, office', b: 'Included' },
  { k: 'Code ownership', a: 'Yours', b: 'Yours, from the first commit' },
];

const FAQ = [
  ['How fast can a developer start?', 'Profiles in 48 hours, start in 1–2 weeks after you approve them.'],
  ['Can I interview the developers?', 'Yes. You interview every engineer and nobody joins without your approval.'],
  ['What if the developer is not a good fit?', 'Tell your delivery lead and we arrange a replacement.'],
  ['Will they work in my time zone?', 'We agree overlap hours at the start, typically 4 or more hours with US, UK, EU or Australian teams.'],
  ['Who owns the code?', 'You do, from the first commit. NDAs and IP assignment are signed before work starts.'],
  ['Can I hire part-time?', 'Yes, through staff augmentation. Dedicated developers and teams are full-time.'],
  ['How is it billed?', 'Monthly, per person. You get a quote once we know the roles, seniority and duration.'],
].map(([q, a]) => ({ q, a }));

const FACTS = [{ k: 'Engineers', v: '100', u: '+' }, { k: 'Profiles in', v: '48', u: 'h' }, { k: 'Start in', v: '1–2', u: 'wk' }, { k: 'Products shipped', v: '300', u: '+' }];

export default function Hire() {
  const [grp, setGrp] = useState('all');
  const [model, setModel] = useState(1);
  const [faqOpen, setFaqOpen] = useState(0);
  const [team, setTeam] = useState({});
  useReveal([grp]);

  const bump = (slug, by) => () => setTeam((t) => {
    const n = Math.max(0, (t[slug] || 0) + by);
    const next = { ...t };
    if (n === 0) delete next[slug]; else next[slug] = n;
    return next;
  });
  const shown = roles.filter((x) => grp === 'all' || x.groupKey === grp);
  const headcount = Object.values(team).reduce((a, b) => a + b, 0);

  return (
    <>
      <Seo
        title="Hire Dedicated Developers & Teams — 30 roles | Mariox Software"
        description="Hire senior engineers, designers and leads from the team behind 300+ products. Profiles in 48 hours, start in 1–2 weeks, you interview everyone."
        canonical={`${SITE_URL}/hire`}
      />
      <JsonLd id="hire-faq" data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }} />

      <Shell>
        <Nav active="hire" ctaHref="#brief" ctaLabel="Hire engineers" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`padding:clamp(130px,13vw,170px) ${PAD} clamp(48px,6vw,90px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr));gap:clamp(36px,5vw,80px);align-items:end`}>
            <El>
              <El as="nav" aria-label="Breadcrumb" css={`display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:clamp(22px,2.6vw,34px);${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>
                <El as="span" css="width:7px;height:7px;background:#F04423;animation:mxPulse 2.4s ease-in-out infinite" />
                <span>Hire resources</span>
              </El>
              <El as="h1" css="margin:0;font-size:clamp(3rem,8.4vw,9rem);line-height:.84;letter-spacing:-.07em;font-weight:500;text-wrap:balance">Hire the team <Em>behind the work</Em><El as="span" css="color:#F04423">.</El></El>
              <El as="p" css="margin:clamp(22px,2.6vw,34px) 0 0;max-width:46ch;font-size:clamp(16px,1.35vw,19px);line-height:1.55;color:#B7B2AA">Senior engineers, designers and leads from the team behind 300+ products. Profiles in 48 hours, start in 1–2 weeks, and you interview everyone.</El>
              <El css="display:flex;flex-wrap:wrap;gap:10px;margin-top:clamp(26px,3vw,40px)">
                <El as="a" href="#brief" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap" hover="background:#F4F1EA;color:#08070A"><span>Get profiles in 48 hours</span> <span>&#8594;</span></El>
                <El as="a" href="#roles" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.3);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap" hover="border-color:#F4F1EA;color:#F4F1EA"><span>Browse {roles.length} roles</span><span>&#8595;</span></El>
              </El>
            </El>
            <El css="display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(244,241,234,.16);border-left:1px solid rgba(244,241,234,.16)">
              {FACTS.map((f) => (
                <El key={f.k} css="border-right:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16);padding:clamp(18px,2.2vw,28px);min-height:150px;display:flex;flex-direction:column;justify-content:space-between;gap:16px">
                  <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{f.k}</El>
                  <El as="span" css="font-size:clamp(2rem,3.8vw,3.4rem);font-weight:300;letter-spacing:-.07em;line-height:.9">{f.v}<El as="span" css="color:#F04423">{f.u}</El></El>
                </El>
              ))}
            </El>
          </El>

          {/* Skills ticker */}
          <El as="section" aria-label="Skills" css="border-top:1px solid rgba(244,241,234,.12);border-bottom:1px solid rgba(244,241,234,.12);padding:20px 0;overflow:hidden">
            <El css="display:flex;width:max-content;animation:mxMarquee 48s linear infinite">
              {[0, 1].map((loop) => (
                <El key={loop} aria-hidden={loop === 1 ? 'true' : undefined} css="display:flex;gap:clamp(30px,4vw,60px);padding-right:clamp(30px,4vw,60px)">
                  {TICKER.map((t) => (
                    <El as="span" key={t} css="display:flex;align-items:center;gap:clamp(30px,4vw,60px);font-size:clamp(1.2rem,2vw,1.8rem);font-weight:500;letter-spacing:-.045em;color:#8E8A85;white-space:nowrap">
                      {t}<El as="span" css="width:8px;height:8px;background:#F04423" />
                    </El>
                  ))}
                </El>
              ))}
            </El>
          </El>

          {/* 02 Roles */}
          <El as="section" id="roles" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(28px,3.4vw,48px)">
              <El as="h2" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">{roles.length} roles. <Em>One bench.</Em></El>
              <El as="p" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Pick a discipline, add the people you need to your team. The brief at the bottom builds itself.</El>
            </El>
            <El css="position:sticky;top:74px;z-index:30;background:rgba(8,7,10,.94);backdrop-filter:blur(12px);display:flex;flex-wrap:wrap;gap:8px;padding:12px 0;border-bottom:1px solid rgba(244,241,234,.14)">
              {[['all', 'All roles']].concat(Object.entries(groups)).map(([k, label]) => {
                const on = grp === k;
                const count = k === 'all' ? roles.length : roles.filter((x) => x.groupKey === k).length;
                return (
                  <El as="button" type="button" key={k} onClick={() => setGrp(k)} aria-pressed={on} css={`cursor:pointer;min-height:40px;white-space:nowrap;display:flex;align-items:center;gap:8px;border-radius:999px;padding:8px 15px;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.25)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};font-family:Geist,sans-serif;font-size:14px;transition:all .25s`}>
                    {label}<El as="span" css={`${MONO};font-size:11px;opacity:.65`}>{count}</El>
                  </El>
                );
              })}
            </El>
            <El css="border-top:1px solid rgba(244,241,234,.16)">
              {shown.map((r) => {
                const n = team[r.slug] || 0;
                return (
                  <El key={r.slug} css={`display:grid;grid-template-columns:48px minmax(0,2fr) minmax(0,2.4fr) auto;gap:10px clamp(16px,2.4vw,32px);align-items:center;padding:clamp(14px,1.6vw,20px) 0;border-bottom:1px solid rgba(244,241,234,.16);background:${n ? 'rgba(240,68,35,.07)' : 'transparent'};transition:background .3s`}>
                    <El as="span" css={`${MONO};font-size:11px;color:#8E8A85`}>{r.n}</El>
                    <El css="display:flex;flex-direction:column;gap:4px">
                      <El as="span" css="font-size:clamp(1.2rem,2vw,1.8rem);font-weight:500;letter-spacing:-.045em;line-height:1">{r.name}</El>
                      <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85`}>{r.group}</El>
                    </El>
                    <El as="span" css="display:flex;flex-wrap:wrap;gap:6px">
                      {r.skills.slice(0, 4).map((s) => <El as="span" key={s} css="border:1px solid rgba(244,241,234,.2);border-radius:999px;padding:5px 11px;font-size:12.5px;color:#D9D5CD">{s}</El>)}
                    </El>
                    <El as="span" css="display:flex;align-items:center;gap:6px">
                      {n > 0 ? (
                        <>
                          <El as="button" type="button" onClick={bump(r.slug, -1)} aria-label={`Remove one ${r.name}`} css="cursor:pointer;width:40px;height:40px;border-radius:50%;border:1px solid rgba(244,241,234,.3);background:transparent;color:#F4F1EA;font-size:18px">&#8722;</El>
                          <El as="span" css={`min-width:22px;text-align:center;${MONO};font-size:14px;color:#F04423`}>{n}</El>
                        </>
                      ) : null}
                      <El as="button" type="button" onClick={bump(r.slug, 1)} aria-label={`Add ${r.name} to your team`} css={`cursor:pointer;min-height:40px;white-space:nowrap;border-radius:999px;padding:0 16px;border:1px solid ${n ? '#F04423' : 'rgba(244,241,234,.3)'};background:${n ? '#F04423' : 'transparent'};color:${n ? '#08070A' : '#F4F1EA'};font-family:Geist,sans-serif;font-size:14px;font-weight:500`}>
                        {n ? '+ Add' : '+ Add'}
                      </El>
                    </El>
                  </El>
                );
              })}
            </El>
          </El>

          {/* 03 Models */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El as="h2" css="margin:0 0 clamp(36px,4.6vw,64px);max-width:16ch;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Three ways <Em>to hire.</Em></El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));border-top:1px solid rgba(8,7,10,.2);border-left:1px solid rgba(8,7,10,.2)">
              {MODELS.map((m, i) => {
                const on = model === i;
                return (
                  <El as="button" type="button" key={m.t} onClick={() => setModel(i)} aria-pressed={on} css={`cursor:pointer;text-align:left;border:0;border-right:1px solid rgba(8,7,10,.2);border-bottom:1px solid rgba(8,7,10,.2);padding:clamp(24px,3vw,44px);min-height:380px;display:flex;flex-direction:column;gap:16px;background:${on ? '#08070A' : 'transparent'};color:${on ? '#F4F1EA' : '#08070A'};font-family:Geist,sans-serif;transition:background .4s,color .4s`}>
                    <El as="span" css={`display:flex;justify-content:space-between;width:100%;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase`}>
                      <El as="span" css="color:#F04423">0{i + 1}</El><El as="span" css="opacity:.7">{m.tag}</El>
                    </El>
                    <El as="span" css="margin-top:auto;font-size:clamp(1.9rem,3vw,2.8rem);line-height:.92;letter-spacing:-.06em;font-weight:500">{m.t}</El>
                    <El as="span" css="font-size:15.5px;line-height:1.5;opacity:.82">{m.b}</El>
                    <El as="span" css="display:flex;flex-direction:column;gap:8px;padding-top:16px;border-top:1px solid rgba(128,124,118,.35);width:100%">
                      {m.pts.map((p) => (
                        <El as="span" key={p} css="display:flex;gap:10px;align-items:baseline;font-size:14.5px"><El as="span" css="width:5px;height:5px;background:#F04423;flex-shrink:0;transform:translateY(-3px)" />{p}</El>
                      ))}
                    </El>
                  </El>
                );
              })}
            </El>
          </El>

          {/* 04 Timeline */}
          <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El as="h2" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Brief to <Em>first commit.</Em></El>
              <El as="p" css="margin:0;max-width:42ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">You interview every engineer. Nobody joins your team without your yes.</El>
            </El>
            <El css="position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:clamp(16px,2vw,28px)">
              {STEPS.map((p, i) => (
                <El key={p.t} data-rv="1" css={`border-top:2px solid ${i === 1 ? '#F04423' : 'rgba(244,241,234,.4)'};padding-top:18px;display:flex;flex-direction:column;gap:10px`}>
                  <El as="span" css="font-size:clamp(2.4rem,4vw,3.6rem);font-weight:300;letter-spacing:-.07em;line-height:.9">{p.d}</El>
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#F04423`}>0{i + 1} &#183; {p.t}</El>
                  <El as="p" css="margin:0;font-size:15px;line-height:1.5;color:#B7B2AA">{p.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 05 Vetting */}
          <El as="section" css={`background:#0E0D11;border-top:1px solid rgba(244,241,234,.08);border-bottom:1px solid rgba(244,241,234,.08);padding:clamp(90px,11vw,170px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(36px,5vw,90px);align-items:start`}>
            <El css="position:sticky;top:110px">
              <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>How we vet</El>
              <El as="h2" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Four gates <Em>before you meet them.</Em></El>
            </El>
            <El css="border-top:1px solid rgba(244,241,234,.16)">
              {VETTING.map((v) => (
                <El key={v.n} data-rv="1" css="display:grid;grid-template-columns:64px 1fr;gap:18px;padding:clamp(20px,2.4vw,30px) 0;border-bottom:1px solid rgba(244,241,234,.16)">
                  <El as="span" css="font-size:clamp(2rem,3.4vw,3rem);font-weight:300;letter-spacing:-.07em;line-height:.9;color:#F04423">{v.n}</El>
                  <El>
                    <El css="font-size:clamp(1.3rem,2vw,1.7rem);font-weight:500;letter-spacing:-.045em">{v.t}</El>
                    <El as="p" css="margin:8px 0 0;max-width:48ch;font-size:15.5px;line-height:1.55;color:#B7B2AA">{v.b}</El>
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* 06 Compare */}
          <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El as="h2" css="margin:0 0 clamp(32px,4vw,56px);font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">In-house hiring, <Em>or Mariox.</Em></El>
            <El role="table" aria-label="Comparison" css="border-top:1px solid rgba(244,241,234,.2)">
              <El role="row" css={`display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr) minmax(0,1fr);gap:16px;padding:14px 0;border-bottom:1px solid rgba(244,241,234,.2);${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>
                <El as="span" role="columnheader" />
                <El as="span" role="columnheader">Hiring in-house</El>
                <El as="span" role="columnheader" css="color:#F04423">Hire from Mariox</El>
              </El>
              {COMPARE.map((c) => (
                <El role="row" key={c.k} css="display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr) minmax(0,1fr);gap:16px;padding:clamp(16px,1.8vw,22px) 0;border-bottom:1px solid rgba(244,241,234,.14);align-items:baseline">
                  <El as="span" role="cell" css="font-size:clamp(1.05rem,1.6vw,1.35rem);font-weight:500;letter-spacing:-.035em">{c.k}</El>
                  <El as="span" role="cell" css="font-size:15px;color:#8E8A85">{c.a}</El>
                  <El as="span" role="cell" css="font-size:15px;font-weight:500">{c.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 07 FAQ */}
          <El as="section" css={`padding:0 ${PAD} clamp(90px,11vw,170px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,72px);align-items:start`}>
            <El as="h2" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Hiring, <Em>answered.</Em></El>
            <El css="grid-column:span 2;min-width:min(100%,300px);border-top:1px solid rgba(244,241,234,.16)">
              {FAQ.map((q, i) => {
                const on = faqOpen === i;
                return (
                  <El key={q.q} css="border-bottom:1px solid rgba(244,241,234,.16)">
                    <El as="button" type="button" onClick={() => setFaqOpen(on ? -1 : i)} aria-expanded={on} css="width:100%;background:transparent;border:0;color:#F4F1EA;cursor:pointer;display:flex;justify-content:space-between;gap:20px;align-items:baseline;padding:clamp(18px,2vw,26px) 0;text-align:left;font-family:Geist,sans-serif;font-size:clamp(1.1rem,1.7vw,1.5rem);font-weight:500;letter-spacing:-.035em">
                      {q.q}<El as="span" css={`${MONO};font-size:18px;color:#F04423`}>{on ? '−' : '+'}</El>
                    </El>
                    {on ? <El as="p" css="margin:0 0 24px;max-width:60ch;font-size:16px;line-height:1.6;color:#B7B2AA">{q.a}</El> : null}
                  </El>
                );
              })}
            </El>
          </El>

          {/* 08 Brief */}
          <HireBrief team={team} bump={bump} headcount={headcount} />

          <Footer />
        </El>
      </Shell>
    </>
  );
}

Hire.bare = true;
