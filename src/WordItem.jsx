import React from "react";

function WordItem(props) {
  console.log(props);
  return (
    <div>
      <h1>serch word</h1>
      {props.wordData.length > 0 && <h2>{props.wordData[0].word}</h2>}
    </div>
  );
}

export default WordItem;
