import React from "react";
import { nanoid } from "nanoid";

function WordItem(props) {
  function play() {
    new Audio(props.wordData[0].phonetics[0].audio).play();
  }

  return (
    <div>
      {props.wordData.length > 0 && (
        <div className="word-wrapper">
          <div className="title-wrapper">
            <div className="title">
              <h1>{props.wordData[0].word}</h1>
              <h3 className="violet">{props.wordData[0].phonetics[0].text}</h3>
            </div>
            <button className="play-btn" onClick={play}>
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="flex">
            <h3>noun</h3>
            <hr />
          </div>
          <h3 className="grey-text">Meaning</h3>
          <ul>
            {props.wordData[0].meanings[0].definitions.map((item) => (
              <li key={nanoid()}>
                <p className={props.dark ? "dark" : null}>{item.definition}</p>
              </li>
            ))}
          </ul>
          <h3 className="grey-text">Synonyms</h3>
          <div className="synonyms-wrapper">
            {props.wordData[0].meanings[0].synonyms.map((item) => (
              <span className="violet" key={nanoid()}>
                {item}
              </span>
            ))}
          </div>
          <h3>verb</h3>
          <hr />
          <h3 className="grey-text">Meaning</h3>
          <ul>
            {props.wordData[0].meanings.length > 1 &&
              props.wordData[0].meanings[1].definitions.map((item) => (
                <li key={nanoid()}>
                  <p className={props.dark ? "dark" : null}>
                    {item.definition}
                  </p>
                </li>
              ))}
          </ul>
          <hr />
          <p className="grey-text">Source</p>
          <p>{props.wordData[0].sourceUrls[0]}</p>
        </div>
      )}
    </div>
  );
}

export default WordItem;
