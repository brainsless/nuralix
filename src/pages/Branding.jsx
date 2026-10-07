import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import CopyButton from '../components/CopyButton.jsx';

const logoUrl = (file, tone) => `/brand/${file}-${tone}.svg`;

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not load ${url}`);
  return response.text();
}

function DoDont({ labels, lists }) {
  return (
    <div className="do-dont">
      {['do', 'dont'].map((kind) => (
        <div key={kind} className={kind}>
          <h3>{labels[kind]}</h3>
          <ul>
            {lists[kind].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Branding({ content }) {
  const { nav, intro, logo, spacing, colour, type, imagery, motion, voice, usage, labels, footer } = content;

  return (
    <>
      <Nav nav={nav} />

      <main className="brand" id="top">
        <header className="brand-intro">
          <h1>{intro.title}</h1>
          <p>{intro.body}</p>
        </header>

        <section id="logo">
          <div className="brand-head">
            <h2>{logo.title}</h2>
            <p>{logo.body}</p>
          </div>
          <div className="logo-grid">
            {logo.variants.flatMap((variant) =>
              logo.tones.map((tone) => {
                const url = logoUrl(variant.file, tone.key);
                return (
                  <figure key={url} className={`logo-card on-${tone.key}`}>
                    <div className="logo-stage">
                      <img src={url} alt={`${variant.name}, ${tone.label}`} className={`logo-${variant.file}`} />
                    </div>
                    <figcaption>
                      <div>
                        <strong>{variant.name}</strong>
                        <span>{tone.label}. {variant.use}</span>
                      </div>
                      <div className="logo-actions">
                        <a className="chip" href={url} download>{logo.download}</a>
                        <CopyButton
                          className="chip"
                          getText={() => fetchText(url)}
                          label={logo.copy}
                          copiedLabel={logo.copied}
                        />
                      </div>
                    </figcaption>
                  </figure>
                );
              }),
            )}
          </div>
        </section>

        <section id="spacing">
          <div className="brand-head">
            <h2>{spacing.title}</h2>
            <p>{spacing.body}</p>
          </div>
          <ul className="spaces">
            {spacing.items.map((item) => (
              <li key={item.file}>
                <div className="space-stage">
                  <div className="space-box" data-clear={`${item.clear}x`} style={{ '--clear': item.clear }}>
                    <img src={logoUrl(item.file, 'ink')} alt="" className={`logo-${item.file}`} />
                  </div>
                </div>
                <strong>{item.name}</strong>
                <span>{spacing.clear}: {item.clear}x</span>
                <span className="space-min">
                  {spacing.minimum}: {item.min}px
                  <img src={logoUrl(item.file, 'ink')} alt="" width={item.min} />
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section id="usage">
          <div className="brand-head">
            <h2>{usage.title}</h2>
          </div>
          <DoDont labels={labels} lists={usage} />
        </section>

        <section id="colour">
          <div className="brand-head">
            <h2>{colour.title}</h2>
            <p>{colour.body}</p>
          </div>
          <ul className="swatches">
            {colour.swatches.map((swatch) => (
              <li key={swatch.hex}>
                <CopyButton
                  className={swatch.dark ? 'swatch dark' : 'swatch'}
                  style={{ background: swatch.hex }}
                  getText={() => swatch.hex}
                  label={swatch.hex}
                  copiedLabel={colour.copied}
                />
                <strong>{swatch.name}</strong>
                <span>{swatch.use}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="type">
          <div className="brand-head">
            <h2>{type.title}</h2>
            <p>{type.body}</p>
          </div>
          <ul className="faces">
            {type.faces.map((face) => (
              <li key={face.name}>
                <p className={`face-sample ${face.className}`} lang={face.lang} dir={face.lang ? 'rtl' : undefined}>
                  {face.sample}
                </p>
                <strong>{face.name}</strong>
                <span>{face.role}</span>
              </li>
            ))}
          </ul>
          <h3 className="brand-sub">{type.scaleTitle}</h3>
          <ul className="scale">
            {type.scale.map((step) => (
              <li key={step.name}>
                <div>
                  <strong>{step.name}</strong>
                  <span>{step.spec}</span>
                </div>
                <p className={step.className}>{step.sample}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="imagery">
          <div className="brand-head">
            <h2>{imagery.title}</h2>
            <p>{imagery.body}</p>
          </div>
          <ul className="stills">
            {imagery.clips.map((clip) => (
              <li key={clip}>
                <img src={`/media/${clip}.jpg`} alt="" loading="lazy" />
              </li>
            ))}
          </ul>
          <DoDont labels={labels} lists={imagery.rules} />
        </section>

        <section id="motion">
          <div className="brand-head">
            <h2>{motion.title}</h2>
            <p>{motion.body}</p>
          </div>
          <DoDont labels={labels} lists={motion.rules} />
        </section>

        <section id="voice">
          <div className="brand-head">
            <h2>{voice.title}</h2>
            <p>{voice.body}</p>
          </div>
          <ul className="voice">
            {voice.rules.map((item) => (
              <li key={item.rule}>
                <h3>{item.rule}</h3>
                <p className="do"><span>{labels.do}</span>{item.do}</p>
                <p className="dont"><span>{labels.dont}</span>{item.dont}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer footer={footer} />
    </>
  );
}
