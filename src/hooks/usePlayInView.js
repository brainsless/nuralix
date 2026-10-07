import { useEffect, useRef } from 'react';

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

// Plays the videos inside the returned ref only while they are on screen. `allow`, when given, can
// hold a video back even then. Visitors who ask for reduced motion keep the poster frames instead.
export function usePlayInView(allow) {
  const ref = useRef(null);
  const allowRef = useRef(allow);
  allowRef.current = allow;

  useEffect(() => {
    if (matchMedia(REDUCED_MOTION).matches) return undefined;

    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting && (allowRef.current?.(target) ?? true)) target.play().catch(() => {});
        else target.pause();
      }
    }, { threshold: 0.2 });

    ref.current.querySelectorAll('video').forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  return ref;
}
