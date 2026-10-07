import { Fragment, useEffect, useRef, useState } from 'react';
import { usePlayInView } from '../hooks/usePlayInView.js';
import Counts from './Counts.jsx';
import Rich from './Rich.jsx';

const WIDE = '(min-width: 821px)';
const clamp01 = (value) => Math.min(1, Math.max(0, value));

function reportClass(index, active) {
  if (index === active) return 'report on';
  return index < active ? 'report past' : 'report';
}

// On wide screens the section pins for a long runway and scrolling steps through the reports, so it
// cannot be scrolled past. Narrow screens show the same reports as a plain stack of cards.
export default function Reports({ label, reports, counts, fine }) {
  const runwayRef = useRef(null);
  const [active, setActive] = useState(0);

  // Pinned, only the current report's clip plays. As cards, each plays while it is on screen.
  const activeRef = useRef(active);
  activeRef.current = active;
  const isCurrentClip = (video) => !matchMedia(WIDE).matches || Number(video.dataset.index) === activeRef.current;
  const stageRef = usePlayInView(isCurrentClip);

  useEffect(() => {
    if (!matchMedia(WIDE).matches) return;
    stageRef.current.querySelectorAll('video').forEach((video) => {
      if (Number(video.dataset.index) === active) video.play().catch(() => {});
      else video.pause();
    });
  }, [active, stageRef]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const runway = runwayRef.current;
      const box = runway.getBoundingClientRect();
      const travel = box.height - innerHeight;
      if (travel <= 0) return;

      // The stage arrives as an inset card and opens to the full width as it reaches the top.
      runway.style.setProperty('--open', clamp01(1 - box.top / (innerHeight * 0.6)).toFixed(4));
      setActive(Math.min(reports.length - 1, Math.floor(clamp01(-box.top / travel) * reports.length)));
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    addEventListener('scroll', request, { passive: true });
    addEventListener('resize', request);
    update();
    return () => {
      removeEventListener('scroll', request);
      removeEventListener('resize', request);
      cancelAnimationFrame(frame);
    };
  }, [reports.length]);

  // Each report owns an equal share of the runway; a tab scrolls to the middle of its share.
  const goTo = (index) => {
    const runway = runwayRef.current;
    const box = runway.getBoundingClientRect();
    const travel = box.height - innerHeight;
    scrollTo({ top: scrollY + box.top + ((index + 0.5) / reports.length) * travel });
  };

  return (
    <section className="reports" id="reports">
      <div className="report-runway" ref={runwayRef} style={{ '--steps': reports.length }}>
        <div className="report-stage" ref={stageRef}>
          <div className="report-tabs" role="group" aria-label={label}>
            {reports.map((report, i) => (
              <button key={report.id} type="button" aria-pressed={i === active} onClick={() => goTo(i)}>
                {report.label}
              </button>
            ))}
          </div>

          {reports.map((report, i) => (
            <article key={report.id} className={reportClass(i, active)}>
              <video
                data-index={i}
                src={`/media/${report.id}.mp4`}
                poster={`/media/${report.id}.jpg`}
                preload="none"
                muted
                loop
                playsInline
                aria-hidden="true"
              />
              <div className="report-copy">
                {/* Each word sits in its own mask so the headline can rise into place word by word. */}
                <h2 aria-label={report.title}>
                  {report.title.split(' ').map((word, w) => (
                    <Fragment key={w}>
                      <span className="word-mask" aria-hidden="true">
                        <span className="word" style={{ '--w': w }}>{word}</span>
                      </span>
                      {' '}
                    </Fragment>
                  ))}
                </h2>
                <p><Rich parts={report.body} /></p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Counts counts={counts} />
      <p className="fine">{fine}</p>
    </section>
  );
}
