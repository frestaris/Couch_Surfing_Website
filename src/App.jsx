import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useStickySearch } from "./hooks/useStickySearch";
import "./App.css";
import Benefits from "./components/Benefits";

function App() {
  const showStickySearch = useStickySearch();

  return (
    <>
      <Navbar showSearch={showStickySearch} />
      <Hero showStickySearch={showStickySearch} />
      <main style={{ height: "200vh", padding: "2rem" }}>
        <Benefits />
      </main>
    </>
  );
}

export default App;
