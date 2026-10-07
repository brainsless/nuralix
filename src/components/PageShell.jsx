import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

// Header, a titled main area and the footer, for every page that is not the landing page.
export default function PageShell({ content, title, lede, className, children }) {
  return (
    <>
      <Nav nav={content.nav} />
      <main className={className ? `page ${className}` : 'page'} id="top">
        <header className="page-head">
          <h1>{title}</h1>
          {lede && <p>{lede}</p>}
        </header>
        {children}
      </main>
      <Footer footer={content.footer} />
    </>
  );
}
