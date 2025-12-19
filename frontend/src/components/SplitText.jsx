import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag = "p",
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts?.status === "loaded") {
      setFontsLoaded(true);
    } else {
      document.fonts?.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;

      const el = ref.current;

      if (el._split) {
        el._split.revert();
        el._split = null;
      }

      const split = new SplitType(el, {
        types: splitType,
        tagName: "span"
      });

      el._split = split;

      const targets =
        splitType === "chars"
          ? split.chars
          : splitType === "words"
          ? split.words
          : split.lines;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start: `top ${(1 - threshold) * 100}%${rootMargin}`,
            once: true
          },
          onComplete: () => {
            onLetterAnimationComplete?.();
          }
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === el) st.kill();
        });
        split.revert();
      };
    },
    { dependencies: [text, fontsLoaded], scope: ref }
  );

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      className={`split-parent inline-block overflow-hidden ${className}`}
      style={{ textAlign }}
    >
      {text}
    </Tag>
  );
};

export default SplitText;
