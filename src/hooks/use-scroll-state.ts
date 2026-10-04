import { useEffect, useState } from "react";

export function useScrollState() {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 18);
      setShowBackToTop(scrollTop > 700);
      setScrollProgress(scrollable > 0 ? Math.min(100, (scrollTop / scrollable) * 100) : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrolled, showBackToTop, scrollProgress };
}
