import React, { useEffect, useState } from "react";
import WordItem from "./WordItem";

function Form() {
  const [word, setWord] = useState("");
  const [searchWord, setSearchWord] = useState();
  const [resWord, setResWord] = useState({});
  //   console.log(searchWord);

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="word"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button className="search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <WordItem wordData={resWord} />
    </div>
  );
}

export default Form;
