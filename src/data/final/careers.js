// Open roles for the careers page, from the design's ROLES array.
// Replace these with the live openings; everything on the page is driven by them
// — the headline count, the city filter and the role dropdown on the form.
export const roles = [
 {
  "title": "Business Development Manager",
  "team": "Sales & growth",
  "locs": [
   "Noida",
   "Bangalore"
  ],
  "exp": "2–5 yrs",
  "type": "Full-time",
  "summary": "Grow Mariox by building relationships with founders, CTOs and enterprise teams. Grow Mariox in North America by building relationships with founders, CTOs and enterprise teams.",
  "does": [
   "Find and qualify new client opportunities",
   "Lead discovery calls with our solution architects",
   "Shape proposals and close deals",
   "Grow existing accounts"
  ],
  "needs": [
   "Experience selling software services",
   "Comfort talking technology with CTOs",
   "A network in startups or enterprise IT",
   "Strong presentation skills"
  ],
  "stack": [
   "Consultative sales",
   "CRM",
   "Proposals",
   "Global Market"
  ]
 },
 {
  "title": "Business Development Manager — USA",
  "team": "Sales & growth",
  "locs": [
   "Dallas"
  ],
  "exp": "5–9 yrs",
  "type": "Full-time",
  "summary": "Grow Mariox in North America by building relationships with founders, CTOs and enterprise teams.",
  "does": [
   "Find and qualify new client opportunities",
   "Lead discovery calls with our solution architects",
   "Shape proposals and close deals",
   "Grow existing accounts"
  ],
  "needs": [
   "Experience selling software services in the US",
   "Comfort talking technology with CTOs",
   "A network in startups or enterprise IT",
   "Strong presentation skills"
  ],
  "stack": [
   "Consultative sales",
   "CRM",
   "Proposals",
   "US market"
  ]
 },
 {
  "title": "Business Development Manager — Australia",
  "team": "Sales & growth",
  "locs": [
   "Australia"
  ],
  "exp": "5–9 yrs",
  "type": "Full-time",
  "summary": "Grow Mariox across Australia and New Zealand, close to the clients we already build for there.",
  "does": [
   "Find and qualify new client opportunities",
   "Lead discovery calls with our solution architects",
   "Shape proposals and close deals",
   "Grow existing accounts"
  ],
  "needs": [
   "Experience selling software services in ANZ",
   "Comfort talking technology with CTOs",
   "A network in startups or enterprise IT",
   "Strong presentation skills"
  ],
  "stack": [
   "Consultative sales",
   "CRM",
   "Proposals",
   "ANZ market"
  ]
 }
];

export const teams = ['All'].concat(roles.map((r) => r.team).filter((t, i, a) => a.indexOf(t) === i));
// Only the cities we are actually hiring in, so no filter chip can return nothing.
export const locations = ['All'].concat(
  roles.reduce((all, r) => all.concat(r.locs), []).filter((l, i, a) => a.indexOf(l) === i),
);
