import { LINKS, SOURCES } from './links.js';

const PITCH = 'An AI that knows your DNA, watches your body, and warns you early.';

export default {
  meta: {
    lang: 'en',
    dir: 'ltr',
    title: 'Nuralix: the AI that knows your DNA',
    description:
      'An AI that knows your DNA, watches your body and warns you early. One saliva kit, 2,000+ DNA checks, then daily monitoring of your wearable, labs and medications.',
  },

  nav: {
    home: { href: '#top', label: 'Nuralix, back to top' },
    sectionsLabel: 'Sections',
    links: [
      { href: '#reports', label: 'What you get' },
      { href: '#tracking', label: 'The AI' },
      { href: '#compare', label: 'Compare' },
      { href: '#price', label: 'Price' },
    ],
    switch: { href: '/ar', label: 'العربية', lang: 'ar' },
    account: [{ href: LINKS.signIn, label: 'Sign in' }],
    secondary: { href: LINKS.activateKit, label: 'Activate a kit' },
    cta: { href: LINKS.orderKit, label: 'Order your kit' },
    menuLabel: 'Menu',
  },

  hero: {
    title: PITCH,
    cta: { href: LINKS.orderKit, label: 'Order your kit · $249' },
  },

  // Each id is the name of the report's clip in /media.
  reportsLabel: 'Reports',
  reports: [
    {
      id: 'family',
      label: 'Family',
      title: "You can pass on a disease you don't have.",
      body: ['Check if you carry common inherited conditions before you have kids. Compare privately with your partner.'],
    },
    {
      id: 'disease',
      label: 'Disease',
      title: 'Heart disease and cancer run in families. See your inherited risk.',
      body: [
        "Your genetic risk compared with average for 46 conditions, including heart disease, diabetes, cancer and Alzheimer's.",
      ],
    },
    {
      id: 'medication',
      label: 'Medication',
      title: 'The wrong medication can do nothing, or harm you.',
      body: [
        'See which medications your genes affect, each graded on clinical evidence. A ',
        { href: SOURCES.pharmacogenetics, label: 'study of 7.7 million US veterans' },
        ' estimated 99% carry a gene change that matters.',
      ],
    },
    {
      id: 'traits',
      label: 'Traits',
      title: 'What your DNA says about food, sleep and training.',
      body: ['84 traits covering food, fitness, sleep and skin.'],
    },
  ],

  counts: [
    { value: '2,000+', label: 'DNA checks from one saliva sample' },
    { value: '46', label: 'conditions' },
    { value: '84', label: 'traits' },
    { value: '4', label: 'medication response levels' },
  ],
  countsFine:
    'Relative risk, not a diagnosis. A clear carrier result lowers the chance; it does not rule it out. Do not change medication on genetic results alone.',

  tracking: {
    statement: 'A checkup sees you once a year. Nuralix AI watches every day.',
    from: 'Nora',
    alerts: [
      {
        source: 'Medication',
        title: 'A medication on your list may not suit your genes.',
        action: 'Show this to your prescriber before your next refill.',
      },
      {
        source: 'Labs',
        title: 'Your LDL is up, and your genetic heart risk is high.',
        action: 'Raise it at your next visit.',
      },
      {
        source: 'Wearable',
        title: 'Your steps were lower on 3 days this week.',
        action: 'Get back to your usual walking rhythm.',
      },
    ],
    fine: 'Example alerts. Nora is the Nuralix AI assistant.',
  },

  compare: {
    title: 'What "normal" on a test doesn\'t tell you.',
    items: [
      {
        title: 'Normal for most, not for you.',
        body: 'Kidney function can fall by half before a standard blood test leaves the normal range.',
      },
      {
        title: "DNA can't tell you when.",
        body: "Your DNA reads the same at 22 and at 98, so it can't say when trouble starts.",
      },
      {
        title: 'Neither knows your prescriptions.',
        body: 'The FDA warns that a common anti-clotting drug works less well in people with two faulty gene copies.',
      },
    ],
    fine: [
      'Sources: ',
      { href: SOURCES.kidney, label: 'ADLM' },
      ', ',
      { href: SOURCES.riskScores, label: 'NIH' },
      ', ',
      { href: SOURCES.clopidogrel, label: 'FDA' },
      '.',
    ],
  },

  trust: {
    title: 'Your DNA is the one password you can never change.',
    items: [
      { title: 'Never shared', body: 'Raw DNA is never shared. Family sees only what you choose.' },
      { title: 'Never sold', body: 'Not sold to advertisers or data brokers. Encrypted in transit and at rest.' },
      { title: 'Yours to delete', body: 'Delete your files and results any time.' },
    ],
  },

  price: {
    amount: '$249',
    terms: 'Includes 6 months of AI monitoring.',
    includes: [
      'Saliva kit and 2,000+ DNA checks',
      'Medication response, disease risk, carrier and trait reports',
      '6 months of AI monitoring and alerts',
    ],
    cta: { href: LINKS.orderKit, label: 'Order your kit' },
    others: [
      { ask: 'Already have a kit?', href: LINKS.activateKit, label: 'Activate a kit' },
      { ask: 'Already have a DNA file?', href: LINKS.geneticAnalysis, label: 'Genetic analysis · $49.99' },
    ],
    fine: [
      'A clinician-ordered medication-response test alone costs up to $330 to $599 (',
      { href: SOURCES.genesight, label: 'GeneSight' },
      ', ',
      { href: SOURCES.genomind, label: 'Genomind' },
      ').',
    ],
  },

  faq: {
    title: 'Questions',
    items: [
      { q: 'What do I get for $249?', a: 'A saliva kit, four reports and 6 months of AI monitoring.' },
      {
        q: 'What does the AI do?',
        a: 'It learns your normal, compares it with your DNA, and alerts you when something moves.',
      },
      {
        q: 'I already have a kit. How do I start?',
        a: 'Activate it with your kit activation code, then follow the instructions that came with it.',
      },
      {
        q: 'I already have 23andMe or AncestryDNA data. Do I need the kit?',
        a: 'No. Choose Genetic analysis and upload your file. Some reports may be less complete.',
      },
      { q: 'Who can see my DNA?', a: 'You decide. Raw DNA is never shared, and family sees only the summaries you choose.' },
    ],
  },

  // Section links carry the page path so they also work from the brand page.
  footer: {
    pitch: PITCH,
    cta: { href: LINKS.orderKit, label: 'Order your kit · $249' },
    secondary: { href: LINKS.activateKit, label: 'Activate a kit' },
    linksLabel: 'Footer',
    columns: [
      {
        title: 'Product',
        links: [
          { href: LINKS.genetics, label: 'Genetics' },
          { href: LINKS.family, label: 'Family' },
          { href: '/#tracking', label: 'The AI' },
          { href: '/#price', label: 'Price' },
        ],
      },
      {
        title: 'Account',
        links: [
          { href: LINKS.signIn, label: 'Sign in' },
          { href: LINKS.activateKit, label: 'Activate a kit' },
          { href: LINKS.geneticAnalysis, label: 'Genetic analysis' },
        ],
      },
      {
        title: 'Company',
        links: [
          { href: LINKS.founder, label: 'Founder' },
          { href: LINKS.investors, label: 'Investors' },
          { href: '/branding', label: 'Brand guidelines' },
          { href: LINKS.contact, label: 'Contact' },
          { href: LINKS.privacy, label: 'Privacy' },
          { href: LINKS.terms, label: 'Terms' },
          { href: '/ar', label: 'العربية', lang: 'ar' },
        ],
      },
    ],
    disclaimer:
      'Nuralix is not a medical device. It does not diagnose, treat, cure or prevent any condition, and it does not replace professional medical judgement. Genetic insights are informational and are not a substitute for clinical genetic testing or counselling.',
    city: 'New York',
  },
};
