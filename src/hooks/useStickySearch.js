import { useState, useEffect } from "react";

export function useStickySearch(heroId = "hero") {
  const [showStickySearch, setShowStickySearch] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const hero = document.getElementById(heroId);
      if (!hero) return;
      const heroHeight = hero.offsetHeight;
      setShowStickySearch(window.scrollY > heroHeight);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroId]);

  return showStickySearch;
}
