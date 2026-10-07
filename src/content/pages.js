import en from './en.js';
import ar from './ar.js';
import textEn from './pages.en.js';
import textAr from './pages.ar.js';
import * as dataEn from './genetics-data.en.js';
import * as dataAr from './genetics-data.ar.js';
import { privacy, terms } from './legal.js';
import { linksFor } from './links.js';

// The base is the path prefix of a language's pages.
const LOCALES = {
  en: { base: '', lang: 'en', dir: 'ltr', landing: en, text: textEn, data: dataEn },
  ar: { base: '/ar', lang: 'ar', dir: 'rtl', landing: ar, text: textAr, data: dataAr },
};

// Turns ['before ', 'label', ' after'] into text with the middle part linked.
const linked = ([before, label, after], href) => [before, { href, label }, after];

// Every page other than the landing page, in one language.
export function pagesFor(locale) {
  const { base, lang, dir, landing, text, data } = LOCALES[locale];
  const links = linksFor(base);
  const home = { href: links.home, label: landing.nav.home.label };

  // These pages share the landing page's header and footer, with its section links pointed home.
  const chrome = {
    nav: {
      ...landing.nav,
      home,
      links: landing.nav.links.map((link) => ({ ...link, href: `${links.home}${link.href}` })),
      switch: undefined,
    },
    footer: landing.footer,
  };
  const meta = (title, description) => ({ lang, dir, title: `${title} | Nuralix`, description });

  const { founder, contact, investors, family, genetics, auth } = text;

  return {
    founder: {
      ...chrome,
      meta: meta(founder.title, founder.description),
      name: founder.name,
      role: founder.role,
      photo: '/founder.jpg',
      mission: founder.mission,
      about: { title: founder.aboutTitle, body: founder.about },
      details: [
        { label: founder.basedIn, value: founder.place },
        { label: founder.email, value: 'nour@nuralix.ai', href: links.email },
        { label: founder.linkedIn, value: 'linkedin.com/in/noursaif', href: links.linkedIn },
      ],
    },

    contact: {
      ...chrome,
      meta: meta(contact.metaTitle, contact.description),
      title: contact.title,
      lede: contact.lede,
      email: { href: links.email, label: 'nour@nuralix.ai' },
      place: contact.place,
    },

    investors: {
      ...chrome,
      meta: meta(investors.metaTitle, investors.description),
      title: investors.title,
      lede: investors.lede,
      stats: investors.stats,
      traction: { title: investors.tractionTitle, items: investors.traction },
      roadmap: { title: investors.roadmapTitle, phases: investors.phases },
      close: {
        body: investors.close,
        actions: [
          { href: links.contact, label: investors.talk },
          { href: links.contact, label: investors.partner, quiet: true },
        ],
      },
    },

    family: {
      ...chrome,
      meta: meta(family.metaTitle, family.description),
      title: family.title,
      lede: family.lede,
      actions: [
        { href: links.familyHub, label: family.open },
        { href: links.familySignUp, label: family.create, quiet: true },
      ],
      steps: { title: family.stepsTitle, items: family.steps },
      points: family.points,
      fine: linked(family.staff, links.providerPortal),
    },

    genetics: {
      ...chrome,
      meta: meta(genetics.metaTitle, genetics.description),
      title: genetics.title,
      lede: genetics.lede,
      counts: ['46', '84', `${data.responseLevels.length}`, `${data.therapyConditions.length}`].map((value, i) => ({
        value,
        label: genetics.counts[i],
      })),
      conditions: { title: genetics.conditionsTitle, body: genetics.conditionsBody, groups: data.conditionGroups },
      traits: { title: genetics.traitsTitle, body: genetics.traitsBody, groups: data.traitGroups },
      medication: { title: genetics.medicationTitle, body: genetics.medicationBody, levels: data.responseLevels },
      therapies: { title: genetics.therapiesTitle, body: genetics.therapiesBody, items: data.therapyConditions },
      close: {
        title: genetics.closeTitle,
        actions: [
          { href: links.orderKit, label: genetics.order },
          { href: links.geneticAnalysis, label: genetics.analysis, quiet: true },
        ],
        note: genetics.formats,
      },
      fine: genetics.fine,
    },

    // The legal text exists in English only; other languages get a notice above it.
    privacy: { ...chrome, meta: meta(privacy.title, privacy.description), ...privacy, notice: text.legal.notice },
    terms: { ...chrome, meta: meta(terms.title, terms.description), ...terms, notice: text.legal.notice },

    auth: {
      ...auth,
      base,
      home,
      pitch: landing.hero.title,
      providerNote: linked(auth.staff, links.providerPortal),
      links: { terms: links.terms, privacy: links.privacy },
      meta: {
        signIn: meta(auth.signIn.title, auth.description),
        signUp: meta(auth.signUp.title, auth.description),
        forgot: meta(auth.forgot.title, auth.description),
        reset: meta(auth.reset.title, auth.description),
        verify: meta(auth.verify.metaTitle, auth.description),
      },
    },
  };
}
