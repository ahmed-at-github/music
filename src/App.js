import logo from "./logo.svg";
import "./App.css";
import Menu from "./Menu";
import { useState } from "react";

import Beethoven from "./Musika/Beethoven.mp3";
import Yiruma from "./Musika/Yiruma.mp3";
import Bach from "./Musika/Bach.mp3";
import Canon from "./Musika/Canon.mp3";
import Strauss from "./Musika/Strauss.mp3";

import Music from "./Music";
import "./styles.css";

const musics = {
  first: Yiruma,
  second: Beethoven ,
  third: Canon ,
  fourth: Bach ,
  fifth: Strauss  ,
};
const title = ["River Flows in You, Yiruma, 2001", "Für Elise, Ludwig van Beethoven. 1810  ", "Canon in D, Johann Pachelbel, 1830s ",
  "Minuets in G major, Christian Petzold, 1725", 
  "The Blue Danube, Johann Baptist Strauss Jr., 1866"
 ]; 

const musicNames = Object.keys(musics);

function App() {
  const [musicSrc, setMusic] = useState();

  function onSelectMusic(value) {
    const musicSrc = musics[value];
    setMusic(musicSrc);
  }

  return (
    <div className="App">
    <h1>Classical Music</h1>
      <Menu onSelectMusic={onSelectMusic} musicValues={musicNames} musicTitle={title}/>
      {/* //onSelectMusic is sending data 2 parent, musicValues is sending data to component  */}
      <Music musicSrc={musicSrc} />
    </div>
  );
}

export default App;
