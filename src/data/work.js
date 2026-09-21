import { workContent } from './workContent';
import { caseStudies } from './caseStudies';
import { featuredWork } from './site';

export const workFilters = [
  { label: 'All', value: 'all' },
  { label: 'FinTech', value: 'fintech' },
  { label: 'EdTech', value: 'edtech' },
  { label: 'E-Commerce', value: 'e-comm' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'CMS', value: 'cms' },
];

const clip = (text, max = 170) => {
  if (!text || text.length <= max) return text || '';
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
};

export const slugFromUrl = (url) => url.replace(/^\/case-study\//, '');

// One entry per case study, in the live site's order, shaped for the design's work cards.
export function getWorkList() {
  return workContent.map((w, i) => {
    const slug = slugFromUrl(w.projectUrl);
    const cs = caseStudies[slug];
    const feat = featuredWork.find((f) => f.url === w.projectUrl);
    const [sector, scope] = w.projectType.split('|').map((x) => x.trim());
    const firstPara = cs && cs.sections && cs.sections[0] && cs.sections[0].paragraphs ? cs.sections[0].paragraphs[0] : '';
    return {
      n: String(i + 1).padStart(2, '0'),
      slug,
      name: w.projectName,
      sector: sector.replace(/­/g, ''),
      scope: scope || '',
      tags: w.filterTags.split(' '),
      url: w.projectUrl,
      img: (feat && feat.img) || w.projectThumb,
      body: feat ? feat.body : clip((firstPara || '').replace(/­/g, '')),
      stack: feat ? feat.stack : scope ? scope.split('+').map((x) => x.trim()) : [],
    };
  });
}
