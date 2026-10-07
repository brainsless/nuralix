import en from './en.js';
import { linksFor } from './links.js';

const LINKS = linksFor('');

export default {
  meta: {
    lang: 'en',
    dir: 'ltr',
    title: 'Nuralix brand guidelines',
    description: 'Logo files, colours, type, imagery and voice for Nuralix.',
  },

  nav: {
    home: { href: '/', label: 'Nuralix home' },
    sectionsLabel: 'Brand sections',
    links: [
      { href: '#logo', label: 'Logo' },
      { href: '#colour', label: 'Colour' },
      { href: '#type', label: 'Type' },
      { href: '#imagery', label: 'Imagery' },
      { href: '#motion', label: 'Motion' },
      { href: '#voice', label: 'Voice' },
    ],
    cta: { href: LINKS.orderKit, label: 'Order your kit' },
    menuLabel: 'Menu',
  },

  intro: {
    title: 'Brand guidelines',
    body: 'Everything needed to show Nuralix correctly: the logo files, the colours, the typefaces, the footage and how we write.',
  },

  logo: {
    title: 'Logo',
    body: 'Two overlapping rings: you and the living model of your health. Use the supplied files. Never redraw or retype the logo.',
    variants: [
      { name: 'Primary logo', use: 'The default. Use wherever there is room.', file: 'logo' },
      { name: 'Logomark', use: 'Avatars, favicons and tight spaces.', file: 'mark' },
      { name: 'Wordmark', use: 'When the rings already appear nearby.', file: 'wordmark' },
    ],
    tones: [
      { key: 'ink', label: 'Ink on Paper' },
      { key: 'paper', label: 'Paper on Ink' },
    ],
    download: 'Download SVG',
    copy: 'Copy SVG',
    copied: 'Copied',
  },

  spacing: {
    title: 'Clear space and minimum size',
    body: 'Keep the dashed area empty. It is measured in ring diameters (x). Never show a logo narrower than its minimum width.',
    clear: 'Clear space',
    minimum: 'Minimum width',
    items: [
      { name: 'Primary logo', file: 'logo', clear: 1, min: 72 },
      { name: 'Logomark', file: 'mark', clear: 0.5, min: 20 },
      { name: 'Wordmark', file: 'wordmark', clear: 1, min: 48 },
    ],
  },

  colour: {
    title: 'Colour',
    body: 'A cool, clinical white with one teal accent. Reagent is for links and small labels only, never for large fills.',
    copied: 'Copied',
    swatches: [
      { name: 'Paper', hex: '#F4F7F6', use: 'Page background', dark: false },
      { name: 'Panel', hex: '#E4EEEC', use: 'Cards and highlighted columns', dark: false },
      { name: 'Line', hex: '#D6DFDE', use: 'Hairline rules', dark: false },
      { name: 'Slate', hex: '#5A6B6F', use: 'Secondary text. 5.17:1 on Paper', dark: true },
      { name: 'Reagent', hex: '#0E6F6A', use: 'Links and labels. 5.57:1 on Paper', dark: true },
      { name: 'Ink', hex: '#0C1B1E', use: 'Text and buttons. 16.36:1 on Paper', dark: true },
      { name: 'Alert', hex: '#A4341F', use: 'Form errors only', dark: true },
    ],
  },

  type: {
    title: 'Type',
    body: 'Titles are set light and large with tight tracking. Arabic is never tracked: it is a joined script.',
    faces: [
      {
        name: 'Host Grotesk',
        role: 'Latin titles (Light) and text (Regular, Medium)',
        sample: 'An AI that knows your DNA.',
        className: 'face-grotesk',
      },
      {
        name: 'Geist Mono',
        role: 'Small labels and table headings',
        sample: 'FAMILY · DISEASE · MEDICATION · TRAITS',
        className: 'face-mono',
      },
      {
        name: 'Thmanyah Serif Display',
        role: 'Arabic titles (Regular)',
        sample: 'ذكاء اصطناعي يعرف حمضك النووي.',
        className: 'face-ar-serif',
        lang: 'ar',
      },
      {
        name: 'Thmanyah Sans',
        role: 'Arabic text (Light, Regular, Medium)',
        sample: 'اعرف ما تحمله قبل أن تُنجب.',
        className: 'face-ar-sans',
        lang: 'ar',
      },
    ],
    scaleTitle: 'Scale',
    scale: [
      { name: 'Title', spec: 'Host Grotesk Light, -0.035em, 1.02 line height', className: 'scale-title', sample: 'Stop guessing.' },
      { name: 'Statement', spec: 'Host Grotesk Light, -0.03em, 1.1 line height', className: 'scale-statement', sample: 'Nuralix AI watches every day.' },
      { name: 'Body', spec: 'Host Grotesk Regular, 17px, 1.55 line height', className: 'scale-body', sample: 'See what you carry before you have kids.' },
      { name: 'Label', spec: 'Geist Mono Medium, 11.5px, uppercase, 0.08em', className: 'scale-label', sample: 'The AI watches' },
    ],
  },

  imagery: {
    title: 'Imagery',
    body: 'Daylight, glass and hands. Footage is pale and close up, and always plays at real speed.',
    clips: ['hero', 'family', 'disease', 'medication', 'traits'],
    rules: {
      do: ['Pale aqua, white and skin tones', 'Macro shots of glass, liquid and hands', 'Calm movement, shallow focus'],
      dont: ['Dark labs or neon lighting', 'Spinning DNA helices and holograms', 'Posed stock models in lab coats'],
    },
  },

  motion: {
    title: 'Motion',
    body: 'Footage is the only thing that moves. Words stay where they are.',
    rules: {
      do: ['Let the video carry the movement', 'Scroll at the speed of the hand', 'Change state at once, without a transition'],
      dont: [
        'Text that fades, slides or dissolves into other text',
        'Pinned or snapping scroll sections',
        'Footage slowed down in editing: it reads as a lagging page',
      ],
    },
  },

  voice: {
    title: 'Voice',
    body: 'Say what the person gets, in the fewest words that are still true.',
    rules: [
      {
        rule: 'Lead with the outcome, not the sample or the method.',
        do: "You can pass on a disease you don't have.",
        dont: 'One spit test. 2,000+ health checks.',
      },
      {
        rule: 'Say AI plainly. It is the product.',
        do: 'Nuralix AI watches every day.',
        dont: 'Personalized health intelligence powered by your biology.',
      },
      {
        rule: 'State the price flat. No reassurance clauses.',
        do: '$249. Includes 6 months of AI monitoring.',
        dont: 'Then $20 a month, only if you choose to continue.',
      },
      {
        rule: 'No mirrored slogans.',
        do: 'An AI that knows your DNA, watches your body, and warns you early.',
        dont: 'Your DNA says what to track. Nuralix tracks it.',
      },
      {
        rule: 'One idea per screen. The disclaimer lives in the footer.',
        do: '84 traits covering food, fitness, sleep and skin.',
        dont: 'A paragraph that explains, qualifies and disclaims in the same breath.',
      },
    ],
  },

  usage: {
    title: 'Logo rules',
    do: [
      'Use the SVG files from this page',
      'Ink on light backgrounds, Paper on dark ones',
      'Keep the clear space on every side',
    ],
    dont: [
      'Stretch, rotate or outline the logo',
      'Recolour it in Reagent or any other colour',
      'Place it on busy footage without a plain area behind it',
      'Type the name in another font and call it the logo',
    ],
  },

  labels: { do: 'Do', dont: "Don't" },

  footer: en.footer,
};
