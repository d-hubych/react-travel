import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Greetings } from "./components/greetings/Greetings";
import { Destinations } from "./components/destinations/Destinations";
import { Search } from "./components/search/Search";
import { Selects } from "./components/selects/Selects";
import { ImgCarousel } from "./components/carusel/ImgCarusel";
import { Footer } from "./components/footer/Footer";
import { OnTopButton } from "./components/onTopButton/OnTopButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greetings />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
      <OnTopButton />
    </div>
  );
}

export default App;
