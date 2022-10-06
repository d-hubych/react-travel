import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Destinations } from "./components/destinations/Destinations";
import { Search } from "./components/search/Search";
import { Selects } from "./components/selects/Selects";
import { ImgCarusel } from "./components/carusel/ImgCarusel";
import { Footer } from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarusel />
      <Footer />
    </div>
  );
}

export default App;
