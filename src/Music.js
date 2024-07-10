import React from "react";
import "./styles.css";

export default function Music({ musicSrc }) {
  return (
    <div>
      <audio className="audio" loop controls autoPlay src={musicSrc}></audio>
      <p>My recommendation is go with <i>Canon in D</i></p>
    </div>
  );
}
