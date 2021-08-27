import React, { Component } from "react";

import CharacterCard from "./components/CharacterCard.jsx";
import FavoritesList from "./components/FavoritesList.jsx";
import Randomizer from "./components/Randomizer.jsx";
import SearchInput from "./components/SearchInput.jsx";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterCard />
        <FavoritesList />
        <Randomizer />
        <SearchInput />
      </div>
    );
  }
}
