import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <span className="definition">{definition.definition}</span>
                <span className="example">
                  {definition.example && (
                    <>
                      <br />

                      <em>{definition.example}</em>
                      <br />
                    </>
                  )}
                </span>
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}

        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
