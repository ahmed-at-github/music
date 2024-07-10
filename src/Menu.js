import React from "react";
import "./styles.css";


export default function Menu({ onSelectMusic, musicValues, musicTitle }) {
  return (
    <form className="tr"  onClick={(event) => onSelectMusic(event.target.value)}>
      {musicValues.map((value, i) => (
        <div className="video-inputs">
            <input key={i} type="radio" name="src" value={value} />
            {musicTitle[i]}
        </div>
      ))}
    </form>
  );
}
