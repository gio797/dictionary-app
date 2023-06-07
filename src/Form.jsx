import React, { useEffect, useState } from "react";
import WordItem from "./WordItem";

function Form(props) {
  const [word, setWord] = useState("");
  const [searchWord, setSearchWord] = useState();
  const [resWord, setResWord] = useState({});
  console.log(resWord);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchWord(word);
  }

  useEffect(() => {
    if (searchWord) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
        .then((res) => res.json())
        .then((data) => setResWord(data));
    }
  }, [searchWord]);

  return (
    <div className="content-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          name="word"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button className="search-btn">
          <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
        </button>
      </form>
      <WordItem wordData={resWord} dark={props.dark} />
    </div>
  );
}

export default Form;
