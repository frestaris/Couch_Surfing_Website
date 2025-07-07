import SearchBar from "./SearchBar";
import "./Hero.css";

function Hero({ showStickySearch }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-text-content">
        <h1 className="hero-title">Stay flexible</h1>
        <p className="hero-subtitle">
          Book hotels in packs of 3, 6 or 24 hours and choose the check-in time
          you want.
        </p>
      </div>
      <div className="hero-image"></div>
      <div
        className={`search-wrapper ${showStickySearch ? "hidden" : "visible"}`}
      >
        <SearchBar scrolled={showStickySearch} />
      </div>
    </section>
  );
}

export default Hero;
