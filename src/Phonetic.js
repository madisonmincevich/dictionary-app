import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);

  if (props.phonetic.audio) {
    return (
      <span className="Phonetic">
        <div className="row">
          <div className="col-2">
            <audio
              controls
              controlsList="nodownload noplaybackrate"
              src={props.phonetic.audio}
            >
              <code>audio</code>
            </audio>
          </div>
          <div className="col-10">
            <span className="text">{props.phonetic.text}</span>
          </div>
        </div>
      </span>
    );
  } else {
    return null;
  }
}
