import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useStickySearch } from "./hooks/useStickySearch";
import "./App.css";

function App() {
  const showStickySearch = useStickySearch();

  return (
    <>
      <Navbar showSearch={showStickySearch} />
      <Hero showStickySearch={showStickySearch} />
      <main style={{ height: "200vh", padding: "2rem" }}>
        <h2>Explore More</h2>
        <p>Scroll down to see the search bar appear in the navbar.</p>
      </main>
    </>
  );
}

export default App;
