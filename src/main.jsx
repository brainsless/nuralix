import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Landing from './pages/Landing.jsx';
import Branding from './pages/Branding.jsx';
import Founder from './pages/Founder.jsx';
import Contact from './pages/Contact.jsx';
import Investors from './pages/Investors.jsx';
import Family from './pages/Family.jsx';
import Genetics from './pages/Genetics.jsx';
import Legal from './pages/Legal.jsx';
import SignIn from './pages/auth/SignIn.jsx';
import SignUp from './pages/auth/SignUp.jsx';
import ForgotPassword from './pages/auth/ForgotPassword.jsx';
import ResetPassword from './pages/auth/ResetPassword.jsx';
import VerifyEmail from './pages/auth/VerifyEmail.jsx';
import en from './content/en.js';
import ar from './content/ar.js';
import brand from './content/brand.js';
import { pagesFor } from './content/pages.js';
import './styles/base.css';
import './styles/nav.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/footer.css';
import './styles/pages.css';
import './styles/auth.css';
import './styles/arabic.css';
import './styles/branding.css';

const SWITCH = {
  en: { label: 'العربية', lang: 'ar' },
  ar: { label: 'English', lang: 'en' },
};

// The pages that exist in every language, by path, with the content each one renders.
function pageRoutes(locale, base, otherBase) {
  const pages = pagesFor(locale);
  const table = {
    '/founder': [Founder, pages.founder],
    '/contact': [Contact, pages.contact],
    '/investors': [Investors, pages.investors],
    '/family-care': [Family, pages.family],
    '/genetics': [Genetics, pages.genetics],
    '/privacy': [Legal, pages.privacy],
    '/terms': [Legal, pages.terms],
    '/sign-in': [SignIn, pages.auth, pages.auth.meta.signIn],
    '/sign-up': [SignUp, pages.auth, pages.auth.meta.signUp],
    '/forgot-password': [ForgotPassword, pages.auth, pages.auth.meta.forgot],
    '/reset-password': [ResetPassword, pages.auth, pages.auth.meta.reset],
    '/verify-email': [VerifyEmail, pages.auth, pages.auth.meta.verify],
  };

  return Object.fromEntries(Object.entries(table).map(([path, [Page, content, meta = content.meta]]) => {
    // Each page links to itself in the other language, keeping any ?returnTo it was opened with.
    const toOther = { ...SWITCH[locale], href: `${otherBase}${path}${location.search}` };
    const localized = content.nav ? { ...content, nav: { ...content.nav, switch: toOther } } : { ...content, switch: toOther };
    return [`${base}${path}`, { meta, page: <Page content={localized} /> }];
  }));
}

// Only the two landing pages open on the video card that the header rides in. Everywhere else the
// header starts in its settled state.
const routes = {
  '/': { meta: en.meta, page: <Landing content={en} />, opensOnVideo: true },
  '/ar': { meta: ar.meta, page: <Landing content={ar} />, opensOnVideo: true },
  '/branding': { meta: brand.meta, page: <Branding content={brand} /> },
  ...pageRoutes('en', '', '/ar'),
  ...pageRoutes('ar', '/ar', ''),
};

const path = location.pathname.replace(/\/+$/, '') || '/';
const { meta, page, opensOnVideo = false } = routes[path] ?? routes['/'];

// arabic.css keys off html[lang], so the document language is set before the first paint.
document.documentElement.lang = meta.lang;
document.documentElement.dir = meta.dir;
document.documentElement.classList.toggle('settled', !opensOnVideo);
document.title = meta.title;
document.querySelector('meta[name="description"]').content = meta.description;

createRoot(document.getElementById('root')).render(<StrictMode>{page}</StrictMode>);
