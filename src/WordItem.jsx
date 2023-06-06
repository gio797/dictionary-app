import React from "react";
import { nanoid } from "nanoid";
function WordItem(props) {
  console.log(props);

  function play() {
    new Audio(props.wordData[0].phonetics[0].audio).play();
  }

  return (
    <div>
      <h1>search word</h1>
      {props.wordData.length > 0 && (
        <div className="word-wrapper">
          <div className="title-wrapper">
            <div className="title">
              <h2>{props.wordData[0].word}</h2>
              <p>{props.wordData[0].phonetics[0].text}</p>
            </div>
            <button onClick={play}>
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
          <p>{props.wordData[0].meanings[0].partOfSpeech}</p>
          <h3>Meaning</h3>
          <ul>
            {props.wordData[0].meanings[0].definitions.map((item) => (
              <li key={nanoid()}>{item.definition}</li>
            ))}
          </ul>
          <h3>Synonyms</h3>
          <div className="synonyms-wrapper">
            {props.wordData[0].meanings[0].synonyms.map((item) => (
              <span key={nanoid()}>{item}</span>
            ))}
          </div>
          <p>{props.wordData[0].meanings[1].partOfSpeech}</p>
          <h3>Meaning</h3>
          <ul>
            {props.wordData[0].meanings[1].definitions.map((item) => (
              <li key={nanoid()}>{item.definition}</li>
            ))}
          </ul>
          <p>Source</p>
          <p>{props.wordData[0].sourceUrls[0]}</p>
        </div>
      )}
    </div>
  );
}

export default WordItem;
