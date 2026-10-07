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
import { auth, contact, family, founder, genetics, investors, legal } from './content/pages.js';
import './styles/base.css';
import './styles/nav.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/footer.css';
import './styles/pages.css';
import './styles/auth.css';
import './styles/arabic.css';
import './styles/branding.css';

// Only the two landing pages open on the video card that the header rides in. Everywhere else the
// header starts in its settled state.
const routes = {
  '/': { meta: en.meta, page: <Landing content={en} />, opensOnVideo: true },
  '/ar': { meta: ar.meta, page: <Landing content={ar} />, opensOnVideo: true },
  '/branding': { meta: brand.meta, page: <Branding content={brand} /> },
  '/founder': { meta: founder.meta, page: <Founder content={founder} /> },
  '/contact': { meta: contact.meta, page: <Contact content={contact} /> },
  '/investors': { meta: investors.meta, page: <Investors content={investors} /> },
  '/family-care': { meta: family.meta, page: <Family content={family} /> },
  '/genetics': { meta: genetics.meta, page: <Genetics content={genetics} /> },
  '/privacy': { meta: legal.privacy.meta, page: <Legal content={legal.privacy} /> },
  '/terms': { meta: legal.terms.meta, page: <Legal content={legal.terms} /> },
  '/sign-in': { meta: auth.signIn.meta, page: <SignIn content={auth} /> },
  '/sign-up': { meta: auth.signUp.meta, page: <SignUp content={auth} /> },
  '/forgot-password': { meta: auth.forgot.meta, page: <ForgotPassword content={auth} /> },
  '/reset-password': { meta: auth.reset.meta, page: <ResetPassword content={auth} /> },
  '/verify-email': { meta: auth.verify.meta, page: <VerifyEmail content={auth} /> },
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
