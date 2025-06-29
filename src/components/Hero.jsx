import SearchBar from "./SearchBar";
import "./Hero.css";

function Hero({ showStickySearch }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Stay Flexible</h1>
        <p>
          Book hotels in packs of 3, 6, or 24 hours and choose your check-in
          time.
        </p>
        <div
          className={`search-wrapper hero-search ${
            showStickySearch ? "hidden" : "visible"
          }`}
        >
          <SearchBar scrolled={showStickySearch} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
