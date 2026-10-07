const APP = 'https://app.nuralix.ai';

// Links for one language: `base` is '' for English and '/ar' for Arabic, and prefixes this site's pages.
export function linksFor(base) {
  // Sign-up accepts the page to open once the account exists.
  const signUpThen = (destination) => `${base}/sign-up?returnTo=${encodeURIComponent(destination)}`;

  return {
    home: base || '/',
    signIn: `${base}/sign-in`,
    signUp: `${base}/sign-up`,
    orderKit: signUpThen(`${APP}/health`),
    activateKit: `${APP}/health/activate-kit`,
    geneticAnalysis: signUpThen(`${APP}/genetics?startCheckout=1`),
    familyHub: `${base}/sign-in?returnTo=${encodeURIComponent('https://hospital.nuralix.ai/family')}`,
    familySignUp: signUpThen('https://hospital.nuralix.ai/family'),
    providerPortal: 'https://hospital.nuralix.ai/login',
    founder: `${base}/founder`,
    family: `${base}/family-care`,
    genetics: `${base}/genetics`,
    investors: `${base}/investors`,
    contact: `${base}/contact`,
    privacy: `${base}/privacy`,
    terms: `${base}/terms`,
    email: 'mailto:nour@nuralix.ai',
    linkedIn: 'https://www.linkedin.com/in/noursaif/',
  };
}

export const SOURCES = {
  pharmacogenetics: 'https://doi.org/10.1001/jamanetworkopen.2019.5345',
  kidney: 'https://myadlm.org/science-and-research/scientific-shorts/2011/estimating-gfr-whats-wrong-with-using-serum-creatinine-alone',
  riskScores: 'https://www.genome.gov/Health/Genomics-and-Medicine/Polygenic-risk-scores',
  clopidogrel: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/020839s072lbl.pdf',
  genesight: 'https://genesight.com/cost/',
  genomind: 'https://genomind.com/help/',
};
