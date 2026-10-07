import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Landing from './pages/Landing.jsx';
import Branding from './pages/Branding.jsx';
import en from './content/en.js';
import ar from './content/ar.js';
import brand from './content/brand.js';
import './styles/base.css';
import './styles/nav.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/footer.css';
import './styles/arabic.css';
import './styles/branding.css';

const routes = {
  '/': { meta: en.meta, page: <Landing content={en} /> },
  '/ar': { meta: ar.meta, page: <Landing content={ar} /> },
  // No opening video here, so the header starts in its settled state.
  '/branding': { meta: brand.meta, page: <Branding content={brand} />, settled: true },
};

const path = location.pathname.replace(/\/+$/, '') || '/';
const { meta, page, settled = false } = routes[path] ?? routes['/'];

// arabic.css keys off html[lang], so the document language is set before the first paint.
document.documentElement.lang = meta.lang;
document.documentElement.dir = meta.dir;
document.documentElement.classList.toggle('settled', settled);
document.title = meta.title;
document.querySelector('meta[name="description"]').content = meta.description;

createRoot(document.getElementById('root')).render(<StrictMode>{page}</StrictMode>);
