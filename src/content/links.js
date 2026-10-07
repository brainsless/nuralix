const SITE = 'https://nuralix.ai';
const APP = 'https://app.nuralix.ai';

// Sign-up accepts the page to open once the account exists, as the live site's own buttons do.
const signUpThen = (destination) => `${SITE}/sign-up?returnTo=${encodeURIComponent(destination)}`;

export const LINKS = {
  signIn: `${SITE}/sign-in`,
  orderKit: signUpThen(`${APP}/health`),
  activateKit: `${APP}/health/activate-kit`,
  geneticAnalysis: signUpThen(`${APP}/genetics?startCheckout=1`),
  contact: `${SITE}/contact`,
  privacy: `${SITE}/privacy`,
  terms: `${SITE}/terms`,
};

export const SOURCES = {
  pharmacogenetics: 'https://doi.org/10.1001/jamanetworkopen.2019.5345',
  kidney: 'https://myadlm.org/science-and-research/scientific-shorts/2011/estimating-gfr-whats-wrong-with-using-serum-creatinine-alone',
  riskScores: 'https://www.genome.gov/Health/Genomics-and-Medicine/Polygenic-risk-scores',
  clopidogrel: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/020839s072lbl.pdf',
  genesight: 'https://genesight.com/cost/',
  genomind: 'https://genomind.com/help/',
};
