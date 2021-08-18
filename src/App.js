import React from "react";
import ArtInfrastructure from "./Components/Art-Infrastructure/art-infrastructure.component";
import Details from "./Components/Details/details.component";
import Header from "./Components/Header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Details />
      <ArtInfrastructure />
    </div>
  );
}

export default App;
