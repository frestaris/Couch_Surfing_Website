import { useState, useEffect } from "react";

export function useStickySearch(heroId = "hero") {
  const [showStickySearch, setShowStickySearch] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const hero = document.getElementById(heroId);
      if (!hero) return;
      const scrollThreshold = 450;
      setShowStickySearch(window.scrollY > scrollThreshold);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroId]);

  return showStickySearch;
}
