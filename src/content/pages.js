import en from './en.js';
import { LINKS } from './links.js';
import { privacy, terms } from './legal.js';
import { conditionGroups, traitGroups, responseLevels, therapyConditions } from './genetics-data.js';

// Pages other than the landing page share its header and footer, with section links pointed home.
const nav = {
  ...en.nav,
  home: { href: '/', label: 'Nuralix home' },
  links: en.nav.links.map((link) => ({ ...link, href: `/${link.href}` })),
  switch: undefined,
};
const chrome = { nav, footer: en.footer };
const meta = (title, description) => ({ lang: 'en', dir: 'ltr', title: `${title} | Nuralix`, description });

export const founder = {
  ...chrome,
  meta: meta('Nour Saif, Founder and CEO', 'Nour Saif is the founder and CEO of Nuralix, building living digital health twins for proactive family care.'),
  name: 'Nour Saif',
  role: 'Founder and CEO of Nuralix',
  // Set to a path under /public, such as '/founder.jpg', to show a portrait.
  photo: null,
  mission:
    'Nuralix was created to help families stay closer to the health of the people they love. Care should be intelligent, transparent, and human, from the home to the hospital.',
  about: {
    title: 'About Nour',
    body: 'Nour Saif is a health-tech founder focused on proactive, AI-driven care for families across the Middle East and diaspora communities. She founded Nuralix to close the gap between hospital-grade monitoring and the daily reality of caring for aging parents, chronic conditions, and loved ones at a distance.',
  },
  details: [
    { label: 'Based in', value: 'New York, NY' },
    { label: 'Email', value: 'nour@nuralix.ai', href: LINKS.email },
    { label: 'LinkedIn', value: 'linkedin.com/in/noursaif', href: LINKS.linkedIn },
  ],
};

export const contact = {
  ...chrome,
  meta: meta('Contact', 'Get in touch with the Nuralix team about the family health twin, partnerships, SDK integration, or press enquiries.'),
  title: 'Get in touch.',
  lede: "Have questions about Nuralix, partnerships, or SDK integration? We'd love to hear from you.",
  email: { href: LINKS.email, label: 'nour@nuralix.ai' },
  place: 'Based in New York, New York',
};

export const investors = {
  ...chrome,
  meta: meta('Investors and partners', 'Nuralix is building the AI infrastructure for family health observability. Explore our roadmap, traction, and partnership opportunities.'),
  title: 'Building the AI infrastructure for family health observability.',
  lede: 'Nuralix is positioned at the intersection of AI health agents, digital twins, remote patient monitoring, and hospital intelligence, a category-defining opportunity in proactive care.',
  stats: [
    { value: '12+', label: 'Health signal categories' },
    { value: '2', label: 'Languages supported (AR + EN)' },
    { value: '17', label: 'Product modules across the platform' },
    { value: '100%', label: 'Consent-based and privacy-first' },
  ],
  traction: {
    title: 'Traction and momentum',
    items: [
      { label: 'Unified consumer account', value: 'Live', note: 'One identity across Nuralix Health and Health Hub' },
      { label: 'Founding partner pipeline', value: 'In discussions', note: 'Senior care and clinical pilots' },
      { label: 'Geographic focus', value: 'MENA + Diaspora', note: 'Expanding globally' },
      { label: 'Funding stage', value: 'Pre-seed', note: 'Engaging strategic investors' },
    ],
  },
  roadmap: {
    title: 'Product roadmap',
    phases: [
      {
        title: 'Now',
        status: 'Live',
        items: [
          'Personal health digital twin',
          'Family and caregiver dashboard',
          'Nora AI companion (AR + EN)',
          'Genetics upload and analysis',
          'Wearable and symptom integrations',
          'Medication, fall and alert system',
        ],
      },
      {
        title: 'Next',
        status: 'In build',
        items: [
          'Uploaded medical reports and labs',
          'Risk intelligence and trend analytics',
          'Expanded wearable integrations',
          'Caregiver coordination tools',
        ],
      },
      {
        title: 'Future',
        status: 'Roadmap',
        items: [
          'Camera-based temperature screening',
          'Hospital facial recognition',
          'Patient identity matching at intake',
          'Clinical partner dashboard',
          'Population health insights',
        ],
      },
    ],
  },
  close: {
    body: 'Investor decks, partner briefs, and pilot opportunities available on request.',
    actions: [
      { href: LINKS.contact, label: 'Talk to the founder' },
      { href: LINKS.contact, label: 'Partner with us', quiet: true },
    ],
  },
};

export const family = {
  ...chrome,
  meta: meta('Family', 'One place for your own health information and the relatives who have chosen to share theirs with you.'),
  title: 'Your health and your family, one sign-in.',
  lede: 'Nuralix Health gives you one place for your own information and the relatives who have chosen to share health information with you.',
  actions: [
    { href: LINKS.familyHub, label: 'Open Family in Health Hub' },
    { href: LINKS.familySignUp, label: 'Create your Nuralix account', quiet: true },
  ],
  steps: {
    title: 'Before web access',
    items: [
      'Create or sign in to your Nuralix account once.',
      'Open Family and accept or send an invitation.',
      'Confirm the sharing permissions for each family member.',
    ],
  },
  points: [
    { title: 'Create one account', body: 'Create your Nuralix account on the web or in the mobile app.' },
    { title: 'Connect your family', body: 'Invite relatives and choose exactly what each person can share.' },
    { title: 'Monitor with context', body: 'Review shared wellness, alerts, medications, and recent changes on web or mobile.' },
  ],
  fine: ['Hospital staff should use the ', { href: LINKS.providerPortal, label: 'Provider Portal' }, '.'],
};

export const genetics = {
  ...chrome,
  meta: meta('Genetics', 'What Nuralix checks in your DNA: 46 conditions, 84 traits, medication response and carrier status.'),
  title: 'Everything Nuralix checks in your DNA.',
  lede: 'From one saliva kit, or a DNA file you already have.',
  counts: [
    { value: '46', label: 'conditions' },
    { value: '84', label: 'traits' },
    { value: '4', label: 'medication response levels' },
    { value: `${therapyConditions.length}`, label: 'conditions with targeted therapies' },
  ],
  conditions: { title: 'Conditions', body: 'Your genetic risk compared with average, in six areas.', groups: conditionGroups },
  traits: { title: 'Traits', body: 'What your DNA says about everyday habits.', groups: traitGroups },
  medication: {
    title: 'Medication response',
    body: 'Each relevant medication gets one of four levels, with a CPIC clinical-evidence level.',
    levels: responseLevels,
  },
  therapies: {
    title: 'Therapies by gene and disease',
    body: 'When a confirmed pathogenic variant is found, Nuralix can surface approved targeted and gene therapies for discussion with a clinician.',
    items: therapyConditions,
  },
  close: {
    title: 'Start with a kit or a file.',
    actions: [
      { href: LINKS.orderKit, label: 'Order your kit · $249' },
      { href: LINKS.geneticAnalysis, label: 'Genetic analysis · $49.99', quiet: true },
    ],
    note: 'Upload a 23andMe export (ZIP or TXT), an AncestryDNA TXT file, or a VCF file.',
  },
  fine: 'All outputs are informational health insights, not medical diagnoses or prescriptions. Polygenic risk and trait scores are marker-panel based and reported as research-informed. Targeted therapies surface only from a confirmed pathogenic variant and generally require a matching diagnosis. A qualified clinician should confirm findings and prescribe any treatment.',
};

export const legal = {
  privacy: { ...chrome, meta: meta(privacy.title, privacy.description), ...privacy },
  terms: { ...chrome, meta: meta(terms.title, terms.description), ...terms },
};

const authMeta = (title) => meta(title, 'One secure account opens Health Hub on the web and your Nuralix mobile app.');

export const auth = {
  home: nav.home,
  pitch: en.hero.title,
  providerNote: ['Hospital staff use the separate ', { href: LINKS.providerPortal, label: 'Provider Portal' }, '.'],
  signIn: {
    meta: authMeta('Sign in'),
    title: 'Sign in',
    lede: 'Use the same email and password you use in the Nuralix mobile app.',
  },
  signUp: {
    meta: authMeta('Create your account'),
    title: 'Create your account',
    lede: 'One account for Nuralix Health, Health Hub on the web, and the mobile app.',
  },
  forgot: {
    meta: authMeta('Reset your password'),
    title: 'Reset your password',
    lede: 'Enter your email and we will send you a reset link.',
  },
  reset: {
    meta: authMeta('Choose a new password'),
    title: 'Choose a new password',
    lede: 'This updates the password used across Nuralix.',
  },
  verify: {
    meta: authMeta('Email verification'),
    verified: {
      title: 'Email verified',
      lede: 'You can now sign in once and continue to Nuralix Health on the web or mobile app.',
    },
    expired: {
      title: 'Verification link expired',
      lede: 'Request a new verification email by signing in again.',
    },
  },
};
