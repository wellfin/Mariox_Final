import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import EstimateForm from '@/components/final/EstimateForm';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { aiServices, groups } from '@/data/final/ai';
import { SITE_URL } from '@/data/site';

// AI hub from the design's `ai.dc.html`: the photo reel hero, the illustrative
// agent run, the service groups, AI by industry, the readiness quiz and the
// AI-sprint enquiry form.

const REEL = [
  ['team-robot-hologram', 'Team and robot reviewing code on a holographic screen', 'Copilots', 'Engineers and AI reviewing the same code, side by side.', 'center'],
  ['robot-arm-brain', 'Robotic arm reaching toward a holographic brain', 'Robotics', 'Machines that see, decide and act.', 'center'],
  ['robot-workflow-office', 'Robot mapping a workflow with an operations team', 'Agents', 'Workflows handed to agents, approved by people.', 'center'],
  ['exoskeleton-lab', 'Engineers fitting a robotic exoskeleton', 'Physical AI', 'Prototypes tested in the lab before the field.', 'center'],
  ['ai-control-room', 'Engineers in an AI control room', 'Infrastructure', 'Models served fast and monitored around the clock.', 'center'],
  ['robot-coder-city', 'Robot and developer coding together', 'Generative AI', 'Code, content and answers generated on your data.', 'center'],
  ['robot-arm-network', 'Robotic arm building a neural network model', 'Machine learning', 'Models trained, tested and shipped to production.', 'center'],
  ['team-building-robot', 'Team assembling a humanoid robot', 'Our team', 'Built by engineers who ship models to production.', 'center 30%'],
  ['robots-with-team', 'Humanoid robots working with a team', 'Automation', 'Repetitive work moved off your team.', 'right center'],
  ['lab-silver-robot', 'Engineers working on a silver humanoid robot', 'R&D', 'Two-week prototypes on your own data.', 'center 30%'],
  ['robot-arm-neural-table', 'Robotic arm over a neural network diagram', 'Production', 'From prototype to live product, evaluated at every step.', 'center'],
];

const DEMOS = [
  { label: 'Finance', task: 'Reconcile October supplier invoices', status: 'Run complete in 6 min', steps: [['Read 1,240 invoice PDFs', 'document-ai'], ['Matched 1,198 to purchase orders', 'erp.lookup'], ['Flagged 42 with price differences', 'rules'], ['Drafted 9 supplier emails, waiting for approval', 'email.draft']] },
  { label: 'Sales', task: 'Qualify yesterday’s 86 inbound leads', status: 'Run complete in 4 min', steps: [['Enriched 86 leads from CRM and web', 'crm.search'], ['Scored and ranked by fit', 'model.score'], ['Booked 12 calls on sales calendars', 'calendar'], ['Logged notes to every CRM record', 'crm.update']] },
  { label: 'Support', task: 'What is our refund policy for B2B orders?', status: 'Answered in 2.1 s', steps: [['Searched 3 policy documents', 'rag.search'], ['Checked the user can see them', 'acl'], ['Answered with 2 cited sources', 'llm'], ['Confidence high, no review needed', 'eval']] },
];

const AI_NEEDS = ['AI agents', 'Chatbot', 'RAG / knowledge search', 'Generative AI', 'Voice agent', 'Document AI', 'Machine learning', 'AI consulting'];

const GROUP_IMG = {
  build: '/assets/ai/lab-silver-robot.jpg',
  gen: '/assets/ai/robot-coder-city.jpg',
  agents: '/assets/ai/robot-arm-neural-table.jpg',
  perceive: '/assets/ai/robots-with-team.jpg',
  data: '/assets/ai/robot-workflow-office.jpg',
  strat: '/assets/ai/ai-control-room.jpg',
};

const PLATFORMS = ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'Meta Llama', 'Mistral', 'Azure OpenAI', 'AWS Bedrock', 'Vertex AI', 'LangChain', 'LlamaIndex', 'pgvector', 'Pinecone'];

const OUTCOMES = [
  { n: '01', t: 'Hours back', b: 'Agents and automation take the copy-paste work off your team.' },
  { n: '02', t: 'Instant answers', b: 'Customers and staff get answers from your own documents, with sources.' },
  { n: '03', t: 'Fewer errors', b: 'Document AI and checks catch mistakes before they reach the ledger.' },
  { n: '04', t: 'New products', b: 'AI features customers pay for, inside the products you already sell.' },
];

const STEPS = [
  { n: '01', w: '1 week', t: 'Discover', b: 'Pick the task, define “good” and gather sample data.' },
  { n: '02', w: '2 weeks', t: 'Prototype', b: 'A working version on your data, in front of real users.' },
  { n: '03', w: '1–2 weeks', t: 'Evaluate', b: 'Accuracy, latency, cost and safety tests become the release gate.' },
  { n: '04', w: '4–12 weeks', t: 'Productionise', b: 'Security, integrations, scaling and admin controls.' },
  { n: '05', w: 'Ongoing', t: 'Monitor', b: 'Quality, drift and spend tracked and improved.' },
];

const QUIZ = [
  'We have a repetitive task that takes hours every week',
  'The data for that task is digital (not only on paper)',
  'Someone on the team can own the result',
  'We know how we would measure success',
  'Leadership is ready to act on what we learn',
];

const FAQ = [
  ['Where should we start with AI?', 'With one repetitive, measurable task. The two-week sprint proves whether AI can do it well on your data before you invest more.'],
  ['Will our data be used to train public models?', 'No. We use enterprise endpoints that do not train on customer data, or host open models in your own cloud.'],
  ['Which models do you use?', 'OpenAI, Claude, Gemini, Llama and Mistral among others. We pick per task based on evaluation results and cost.'],
  ['How do you stop AI from making things up?', 'Retrieval with citations, confidence thresholds, automated tests and human review for anything risky.'],
  ['Can AI work with our existing systems?', 'Yes. We connect to CRMs, ERPs, helpdesks, databases and internal APIs, and keep existing permissions.'],
  ['What does an AI project cost?', 'It starts with a fixed-price two-week sprint. Pilot and production are priced once the sprint shows what works.'],
].map(([q, a]) => ({ q, a }));

export default function AiHub({ topIndustries }) {
  const [slide, setSlide] = useState(0);
  const [demo, setDemo] = useState(0);
  const [step, setStep] = useState(0);
  const [grp, setGrp] = useState('agents');
  const [ind, setInd] = useState(topIndustries[0] || 'Fintech');
  const [quiz, setQuiz] = useState({});
  const [faqOpen, setFaqOpen] = useState(0);
  const reelRef = useRef(null);
  useReveal([grp, ind]);

  // The hero reel advances on its own; the agent run ticks through its steps.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => setSlide((i) => (i + 1) % REEL.length), 5200);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    setStep(0);
    const t = setInterval(() => setStep((s) => (s >= DEMOS[demo].steps.length ? 0 : s + 1)), 1400);
    return () => clearInterval(t);
  }, [demo]);

  const score = QUIZ.filter((q, i) => quiz[i] === true).length;
  const answered = Object.keys(quiz).length;
  const verdict = answered === 0
    ? { t: 'Answer five quick questions.', b: 'You will get a recommendation on where to start.', cta: 'Or talk to us now', href: '#start' }
    : score >= 4
      ? { t: 'Ready for an AI sprint.', b: 'You have a task, data and an owner. A two-week sprint can prove value on your data.', cta: 'Book the AI sprint', href: '#start' }
      : score >= 2
        ? { t: 'Start with an AI workshop.', b: 'A short consulting engagement will pick the right first use case and check your data.', cta: 'See AI consulting', href: '/ai/ai-consulting' }
        : { t: 'Start with your data.', b: 'Most AI wins depend on clean, digital data first. We can help you get there.', cta: 'See data for AI', href: '/ai/data-for-ai' };

  const indUses = [];
  aiServices.forEach((s) => s.uses.forEach((u) => { if (u.ind === ind) indUses.push({ t: u.t, svc: s.name, href: `/ai/${s.slug}` }); }));

  return (
    <>
      <Seo
        title={`AI Development Company — ${aiServices.length} AI services | Mariox Software`}
        description="Agents, copilots, generative AI, RAG, voice and vision, connected to your data and evaluated before anything goes live. A working prototype on your data in two weeks."
        canonical={`${SITE_URL}/ai`}
      />
      <JsonLd
        id="ai-faq"
        data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }}
      />

      <Shell>
        <Nav active="ai" ctaHref="#start" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" ref={reelRef} css={`position:relative;overflow:hidden;isolation:isolate;min-height:100svh;padding:clamp(130px,13vw,170px) ${PAD} clamp(28px,3vw,44px);display:flex;flex-direction:column;justify-content:space-between;gap:clamp(36px,5vw,64px)`}>
            <El aria-hidden="true" css="position:absolute;inset:0;z-index:-3;background:#08070A">
              {REEL.map((r, i) => (
                <El key={r[0]} css={`position:absolute;inset:-4%;background-color:#08070A;background-size:cover;background-position:${r[4]};background-image:url("/assets/ai/${r[0]}.jpg");opacity:${i === slide ? 1 : 0};transition:opacity 1.2s ease;will-change:opacity`} />
              ))}
            </El>
            <El aria-hidden="true" css="position:absolute;inset:0;z-index:-2;pointer-events:none;background:linear-gradient(90deg,rgba(8,7,10,.94) 0%,rgba(8,7,10,.82) 34%,rgba(8,7,10,.35) 62%,rgba(8,7,10,.1) 100%),linear-gradient(0deg,rgba(8,7,10,.95) 0%,rgba(8,7,10,0) 34%),linear-gradient(180deg,rgba(8,7,10,.7) 0%,rgba(8,7,10,0) 22%)" />
            <El aria-hidden="true" css="position:absolute;inset:0;z-index:-1;pointer-events:none;background-image:linear-gradient(rgba(244,241,234,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(244,241,234,.045) 1px,transparent 1px);background-size:72px 72px;mask-image:linear-gradient(90deg,transparent 30%,#000 70%);-webkit-mask-image:linear-gradient(90deg,transparent 30%,#000 70%)" />

            <El css="max-width:min(100%,760px)">
              <El css={`display:flex;align-items:center;gap:12px;margin-bottom:clamp(22px,2.6vw,34px);${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>
                <El as="span" css="width:7px;height:7px;background:#F04423;animation:mxPulse 2.4s ease-in-out infinite" />Mariox AI &#183; {aiServices.length} AI services
              </El>
              <El as="h1" css="margin:0;font-size:clamp(3.2rem,9vw,9.6rem);line-height:.84;letter-spacing:-.07em;font-weight:500">AI that ships <Em>to production</Em><El as="span" css="color:#F04423">.</El></El>
              <El as="p" css="margin:clamp(22px,2.6vw,34px) 0 0;max-width:44ch;font-size:clamp(16px,1.35vw,19px);line-height:1.55;color:#B7B2AA">Agents, copilots, generative AI, RAG, voice and vision, connected to your data and evaluated before anything goes live. A working prototype on your data in two weeks.</El>
              <El css="display:flex;flex-wrap:wrap;gap:10px;margin-top:clamp(26px,3vw,40px)">
                <El as="a" href="#start" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap" hover="background:#F4F1EA;color:#08070A"><span>Book a 2-week AI sprint</span> <span>&#8594;</span></El>
                <El as="a" href="#readiness" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.3);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap" hover="border-color:#F4F1EA;color:#F4F1EA">Check your AI readiness</El>
              </El>
            </El>

            <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:20px">
              <El css="display:flex;flex-direction:column;gap:8px;max-width:420px">
                <El as="span" css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px;color:#F04423`}>{REEL[slide][2]}</El>
                <El as="span" css="font-size:clamp(1.15rem,1.7vw,1.5rem);line-height:1.15;letter-spacing:-.035em;font-weight:500;color:#F4F1EA;transition:opacity .5s">{REEL[slide][3]}</El>
              </El>
              <El css="display:flex;flex-direction:column;gap:10px;align-items:flex-end">
                <El css="display:flex;gap:6px">
                  {REEL.map((r, i) => (
                    <El as="button" type="button" key={r[0]} onClick={() => setSlide(i)} aria-label={r[1]} css={`cursor:pointer;width:clamp(30px,3.4vw,52px);height:clamp(30px,3.4vw,52px);padding:0;border:1px solid ${i === slide ? '#F04423' : 'rgba(244,241,234,.25)'};background-color:#141216;background-size:cover;background-position:center;background-image:url("/assets/ai/${r[0]}-thumb.jpg");opacity:${i === slide ? 1 : 0.55};transition:opacity .3s,border-color .3s,transform .3s`} />
                  ))}
                </El>
                <El css={`display:flex;align-items:center;gap:12px;${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px;color:#B7B2AA`}>
                  <span>{String(slide + 1).padStart(2, '0')} / {REEL.length}</span>
                  <El as="span" css="width:120px;height:2px;background:rgba(244,241,234,.2)">
                    <El as="span" css={`display:block;height:100%;width:${Math.round(((slide + 1) / REEL.length) * 100)}%;background:#F04423;transition:width .6s`} />
                  </El>
                </El>
              </El>
            </El>
          </El>

          {/* Agent run */}
          <El as="section" css={`padding:clamp(80px,9vw,140px) ${PAD} 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(32px,5vw,80px);align-items:center`}>
            <El>
              <El css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:11.5px;color:#8E8A85;margin-bottom:18px`}>See an agent work</El>
              <El as="h2" css="margin:0;font-size:clamp(2.4rem,5vw,5rem);line-height:.9;letter-spacing:-.06em;font-weight:500">One task. <Em>Five tools.</Em> One approval.</El>
              <El as="p" css="margin:22px 0 0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Agents read, look up, draft and file across your systems. Anything that spends money or talks to a customer waits for a person to approve it.</El>
            </El>
            <El aria-label="Illustrative agent run" css="border:1px solid rgba(244,241,234,.16);background:#0E0D11">
              <El css={`display:flex;justify-content:space-between;align-items:center;padding:14px 18px;border-bottom:1px solid rgba(244,241,234,.12);${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>
                <El as="span" css="display:flex;gap:6px">
                  <El as="span" css="width:9px;height:9px;background:#F04423" />
                  <El as="span" css="width:9px;height:9px;background:#3A3740" />
                  <El as="span" css="width:9px;height:9px;background:#3A3740" />
                </El>
                <span>Agent run &#183; illustrative</span>
              </El>
              <El css="padding:clamp(20px,2.4vw,30px);display:flex;flex-direction:column;gap:18px;min-height:380px">
                <El css="display:flex;flex-wrap:wrap;gap:6px">
                  {DEMOS.map((d, i) => {
                    const on = i === demo;
                    return <El as="button" type="button" key={d.label} onClick={() => setDemo(i)} css={`cursor:pointer;border-radius:999px;padding:7px 13px;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.25)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};${MONO};font-size:11px;letter-spacing:.08em;text-transform:uppercase`}>{d.label}</El>;
                  })}
                </El>
                <El css={`${MONO};font-size:12px;color:#8E8A85`}>&gt; task</El>
                <El css="font-size:clamp(1.3rem,2.2vw,1.9rem);line-height:1.15;letter-spacing:-.04em;font-weight:500">{DEMOS[demo].task}</El>
                <El css="display:flex;flex-direction:column;border-top:1px solid rgba(244,241,234,.1)">
                  {DEMOS[demo].steps.map((s, i) => {
                    const done = step > i, active = step === i;
                    return (
                      <El key={s[0]} css={`display:grid;grid-template-columns:22px 1fr auto;gap:12px;align-items:baseline;padding:12px 0;border-bottom:1px solid rgba(244,241,234,.08);opacity:${done || active ? 1 : 0.28};transition:opacity .5s`}>
                        <El as="span" css={`${MONO};font-size:13px;color:${done ? '#F04423' : '#8E8A85'}`}>{done ? '✓' : active ? '›' : '·'}</El>
                        <El as="span" css="font-size:15.5px;line-height:1.4">{s[0]}</El>
                        <El as="span" css={`${MONO};font-size:11px;color:#8E8A85`}>{s[1]}</El>
                      </El>
                    );
                  })}
                </El>
                <El css={`margin-top:auto;display:flex;justify-content:space-between;gap:12px;${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85`}>
                  <span>{DEMOS[demo].status}</span><El as="span" css="color:#F04423">Human approval on</El>
                </El>
              </El>
            </El>
          </El>

          {/* Model marquee */}
          <El as="section" aria-label="Models" css="border-top:1px solid rgba(244,241,234,.12);border-bottom:1px solid rgba(244,241,234,.12);padding:20px 0;overflow:hidden;margin-top:clamp(56px,7vw,110px)">
            <El css="display:flex;width:max-content;animation:mxMarquee 40s linear infinite">
              {[0, 1].map((loop) => (
                <El key={loop} aria-hidden={loop === 1 ? 'true' : undefined} css="display:flex;gap:clamp(36px,5vw,72px);padding-right:clamp(36px,5vw,72px)">
                  {PLATFORMS.map((p) => <El as="span" key={p} css="font-size:clamp(1.3rem,2.2vw,2rem);font-weight:500;letter-spacing:-.045em;color:#8E8A85;white-space:nowrap">{p}</El>)}
                </El>
              ))}
            </El>
          </El>

          {/* Image band */}
          <El as="section" aria-label="People and machines" css={`padding:clamp(56px,7vw,110px) ${PAD} 0`}>
            <El css="display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-auto-rows:clamp(150px,16vw,250px);gap:clamp(8px,1vw,14px)">
              <El data-rv="1" css="grid-column:span 7;grid-row:span 2;position:relative;overflow:hidden;background:#141216 center/cover no-repeat;background-image:url('/assets/ai/team-building-robot.jpg')">
                <El css="position:absolute;left:0;right:0;bottom:0;padding:clamp(18px,2.4vw,32px);background:linear-gradient(to top,rgba(8,7,10,.92),rgba(8,7,10,0))">
                  <El css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:10px`}>People + machines</El>
                  <El css="max-width:20ch;font-size:clamp(1.6rem,3.2vw,3rem);line-height:.95;letter-spacing:-.055em;font-weight:500">AI does the repetitive work. <Em>Your team does the rest.</Em></El>
                </El>
              </El>
              <El data-rv="1" css="grid-column:span 5;position:relative;overflow:hidden;background:#141216 center/cover no-repeat;background-image:url('/assets/ai/robot-arm-brain.jpg')" />
              <El data-rv="1" css="grid-column:span 5;position:relative;overflow:hidden;background:#141216 center/cover no-repeat;background-image:url('/assets/ai/exoskeleton-lab.jpg')">
                <El as="span" css={`position:absolute;left:14px;bottom:12px;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#F4F1EA;background:rgba(8,7,10,.7);padding:6px 9px`}>Engineers in the loop</El>
              </El>
            </El>
          </El>

          {/* 02 Outcomes */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD};margin-top:clamp(56px,7vw,110px)`}>
            <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>Where AI pays off first</El>
            <El as="h2" data-rv="1" css="margin:0 0 clamp(36px,4.6vw,64px);max-width:18ch;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Less busywork. <Em>Faster everything.</Em></El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));border-top:1px solid rgba(8,7,10,.2)">
              {OUTCOMES.map((o) => (
                <El key={o.n} data-rv="1" css="padding:clamp(24px,3vw,40px) clamp(0px,2vw,28px) clamp(24px,3vw,40px) 0;border-bottom:1px solid rgba(8,7,10,.2);display:flex;flex-direction:column;gap:12px">
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;color:#F04423`}>{o.n}</El>
                  <El as="h3" css="margin:0;font-size:clamp(1.8rem,3vw,2.8rem);line-height:.95;letter-spacing:-.06em;font-weight:500">{o.t}</El>
                  <El as="p" css="margin:0;font-size:15.5px;line-height:1.5;color:#4A4741">{o.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 03 AI services */}
          <El as="section" id="services" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">{aiServices.length} AI services. <Em>One team.</Em></El>
              <El as="p" data-rv="1" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Pick a discipline to see what is in it. Every service has its own page with deliverables, use cases, stack and timelines.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(28px,4vw,64px);align-items:start">
              <El css="display:flex;flex-direction:column;border-top:1px solid rgba(244,241,234,.16)">
                {Object.entries(groups).map(([k, name]) => {
                  const on = grp === k;
                  const count = String(aiServices.filter((x) => x.groupKey === k).length).padStart(2, '0');
                  return (
                    <El as="button" type="button" key={k} onClick={() => setGrp(k)} onMouseEnter={() => setGrp(k)} css={`cursor:pointer;background:transparent;border:0;border-bottom:1px solid rgba(244,241,234,.16);padding:clamp(16px,1.8vw,22px) 0;display:flex;justify-content:space-between;align-items:baseline;gap:12px;text-align:left;color:${on ? '#F04423' : '#F4F1EA'};font-family:Geist,sans-serif;font-size:clamp(1.4rem,2.4vw,2.2rem);font-weight:500;letter-spacing:-.05em;transition:color .25s,padding-left .4s;padding-left:${on ? '12px' : '0px'}`}>
                      <span>{name}</span><El as="span" css={`${MONO};font-size:11px;color:#8E8A85`}>{count}</El>
                    </El>
                  );
                })}
              </El>
              <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:clamp(10px,1.2vw,16px)">
                <El css={`grid-column:1 / -1;aspect-ratio:21/8;position:relative;overflow:hidden;background-color:#141216;background-position:center;background-size:cover;background-image:url("${GROUP_IMG[grp] || GROUP_IMG.agents}")`}>
                  <El css="position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,7,10,.85),rgba(8,7,10,.1) 70%)" />
                  <El css="position:absolute;left:clamp(18px,2.4vw,30px);bottom:clamp(16px,2vw,26px);font-size:clamp(1.6rem,3vw,2.8rem);font-weight:500;letter-spacing:-.055em;line-height:.95">{groups[grp]}</El>
                </El>
                {aiServices.filter((x) => x.groupKey === grp).map((x) => (
                  <El as={Link} key={x.slug} href={`/ai/${x.slug}`} css="border:1px solid rgba(244,241,234,.16);padding:clamp(20px,2.4vw,30px);min-height:220px;display:flex;flex-direction:column;gap:12px;transition:background .45s,color .45s,border-color .45s" hover="background:#F04423;color:#08070A;border-color:#F04423">
                    <El css={`display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;opacity:.7`}><span>{x.n}</span><span>&#8599;</span></El>
                    <El as="h3" css="margin:auto 0 0;font-size:clamp(1.4rem,2.2vw,2rem);line-height:.95;letter-spacing:-.05em;font-weight:500">{x.name}</El>
                    <El as="p" css="margin:0;font-size:14.5px;line-height:1.45;opacity:.78">{x.hook}</El>
                  </El>
                ))}
              </El>
            </El>
          </El>

          {/* 04 By industry */}
          <El as="section" css={`background:#0E0D11;border-top:1px solid rgba(244,241,234,.08);border-bottom:1px solid rgba(244,241,234,.08);padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El as="h2" data-rv="1" css="margin:0 0 clamp(28px,3.4vw,44px);font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">AI in <Em color="#F04423">{ind}</Em>.</El>
            <El css="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:clamp(24px,3vw,40px)">
              {topIndustries.map((t) => {
                const on = ind === t;
                return <El as="button" type="button" key={t} onClick={() => setInd(t)} css={`cursor:pointer;min-height:44px;border-radius:999px;padding:9px 16px;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.25)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};font-family:Geist,sans-serif;font-size:14px;transition:all .25s`}>{t}</El>;
              })}
            </El>
            <El css="border-top:1px solid rgba(244,241,234,.16)">
              {indUses.slice(0, 8).map((u) => (
                <El as={Link} key={u.t} href={u.href} css="display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr) auto;gap:10px clamp(16px,3vw,40px);align-items:baseline;padding:clamp(16px,1.8vw,22px) 0;border-bottom:1px solid rgba(244,241,234,.16);transition:padding-left .4s,color .25s" hover="padding-left:12px;color:#F04423">
                  <El as="span" css="font-size:clamp(1.2rem,2vw,1.8rem);font-weight:500;letter-spacing:-.045em">{u.t}</El>
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85`}>{u.svc}</El>
                  <span>&#8599;</span>
                </El>
              ))}
            </El>
          </El>

          {/* 05 Process */}
          <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El as="h2" data-rv="1" css="margin:0 0 clamp(36px,4.6vw,64px);max-width:16ch;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Evaluated before <Em>it is scaled.</Em></El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:clamp(16px,2vw,28px)">
              {STEPS.map((p, i) => (
                <El key={p.n} data-rv="1" css={`border-top:2px solid ${i === 2 ? '#F04423' : 'rgba(244,241,234,.4)'};padding-top:18px;display:flex;flex-direction:column;gap:10px`}>
                  <El css={`display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}><El as="span" css="color:#F04423">{p.n}</El><span>{p.w}</span></El>
                  <El as="h3" css="margin:0;font-size:clamp(1.4rem,2vw,1.9rem);letter-spacing:-.05em;font-weight:500">{p.t}</El>
                  <El as="p" css="margin:0;font-size:15px;line-height:1.5;color:#B7B2AA">{p.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 06 Readiness */}
          <El as="section" id="readiness" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(36px,5vw,80px);align-items:start`}>
            <El>
              <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>AI readiness check &#183; 30 seconds</El>
              <El as="h2" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Are you <Em>ready for AI?</Em></El>
              <El css="margin-top:clamp(28px,3.4vw,44px);border-top:1px solid rgba(8,7,10,.2)">
                {QUIZ.map((t, i) => {
                  const a = quiz[i];
                  const btn = (val, label) => (
                    <El as="button" type="button" onClick={() => setQuiz((s) => ({ ...s, [i]: val }))} css={`cursor:pointer;min-width:56px;min-height:44px;border-radius:999px;border:1px solid ${a === val ? '#08070A' : 'rgba(8,7,10,.25)'};background:${a === val ? '#08070A' : 'transparent'};color:${a === val ? '#F4F1EA' : '#08070A'};font-family:Geist,sans-serif;font-size:14px`}>{label}</El>
                  );
                  return (
                    <El key={t} css="display:flex;justify-content:space-between;align-items:center;gap:18px;padding:16px 0;border-bottom:1px solid rgba(8,7,10,.14)">
                      <El as="span" css="font-size:clamp(15.5px,1.3vw,18px);line-height:1.35">{t}</El>
                      <El as="span" css="display:flex;gap:6px;flex-shrink:0">{btn(true, 'Yes')}{btn(false, 'No')}</El>
                    </El>
                  );
                })}
              </El>
            </El>
            <El css="position:sticky;top:110px;background:#08070A;color:#F4F1EA;padding:clamp(26px,3vw,44px);display:flex;flex-direction:column;gap:20px;min-height:420px">
              <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>Your result</El>
              <El css="font-size:clamp(5rem,10vw,9rem);font-weight:300;letter-spacing:-.08em;line-height:.8">{score}<El as="span" css="font-size:.35em;color:#8E8A85">/5</El></El>
              <El css="height:6px;background:rgba(244,241,234,.1)"><El css={`height:100%;width:${(score / 5) * 100}%;background:#F04423;transition:width .6s cubic-bezier(.2,.8,.2,1)`} /></El>
              <El css="font-size:clamp(1.5rem,2.4vw,2.1rem);line-height:1.05;letter-spacing:-.05em;font-weight:500;margin-top:10px">{verdict.t}</El>
              <El as="p" css="margin:0;font-size:15.5px;line-height:1.5;color:#B7B2AA">{verdict.b}</El>
              <El as={verdict.href.startsWith('#') ? 'a' : Link} href={verdict.href} css="margin-top:auto;align-self:flex-start;display:flex;align-items:center;gap:12px;background:#F04423;color:#08070A;padding:16px 22px;border-radius:999px;font-size:15px;font-weight:500">{verdict.cta} <span>&#8594;</span></El>
            </El>
          </El>

          {/* 09 FAQ */}
          <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,72px);align-items:start`}>
            <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">AI, <Em>answered.</Em></El>
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

          {/* 10 Start */}
          <El as="section" id="start" css={`background-color:#0E0D11;background-image:linear-gradient(90deg,rgba(8,7,10,.96) 0%,rgba(8,7,10,.88) 55%,rgba(8,7,10,.7) 100%),url('/assets/ai/robots-with-team.jpg');background-size:cover;background-position:center;border-top:1px solid rgba(244,241,234,.08);padding:clamp(90px,11vw,170px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:clamp(36px,5vw,80px);align-items:start`}>
            <El>
              <El as="h2" css="margin:0;font-size:clamp(2.6rem,6vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Have an AI idea? <Em color="#F04423">Let&#8217;s test it.</Em></El>
              <El as="p" css="margin:22px 0 0;max-width:40ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Tell us the task you want AI to do. An AI architect replies within one business day with a sprint plan. NDA on request.</El>
              <El css="display:flex;flex-direction:column;gap:8px;margin-top:28px;font-size:15px">
                <El as="a" href="mailto:admin@marioxsoftware.com">admin@marioxsoftware.com</El>
                <El as="a" href="tel:+919599287045">+91 95992 87045</El>
              </El>
            </El>
            <EstimateForm
              id="ai-estimate"
              title="Book a 2-week AI sprint"
              source="ai-hub"
              subject="AI sprint"
              needs={AI_NEEDS}
              needsLabel="Interested in"
              messageLabel="What should the AI do?"
              messagePlaceholder="e.g. Answer customer questions from our product manuals"
              dark
            />
          </El>

          <Footer />
        </El>
      </Shell>
    </>
  );
}

AiHub.bare = true;

export async function getStaticProps() {
  const seen = [];
  aiServices.forEach((s) => s.uses.forEach((u) => { if (seen.indexOf(u.ind) < 0) seen.push(u.ind); }));
  const topIndustries = ['Fintech', 'Healthcare', 'E-commerce', 'Enterprise', 'Logistics', 'Education', 'Insurance', 'Real estate', 'Retail', 'Manufacturing', 'Banking', 'Legal'].filter((x) => seen.indexOf(x) >= 0);
  return { props: { topIndustries } };
}
