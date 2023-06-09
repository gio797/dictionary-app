import React, { useEffect, useState, useRef } from "react";
import WordItem from "./WordItem";

function Form(props) {
  const [word, setWord] = useState("");
  const [searchWord, setSearchWord] = useState("space");
  const [resWord, setResWord] = useState({});
  const [error, setError] = useState(null);

  const ref = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setSearchWord(word);
  }

  useEffect(() => {
    async function getWord() {
      try {
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
        );
        if (!res.ok) {
          // throw Error("coold not find the word");
          throw new Error(res.status);
        }
        const data = await res.json();
        setResWord(data);
        setError(null);
      } catch (err) {
        console.log(err);
        setError(err.message);
        setResWord({});
      }
    }

    getWord();
  }, [searchWord]);

  return (
    <div className="content-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          name="word"
          type="text"
          required
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button className="search-btn">
          <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
        </button>
      </form>
      {error && <h3>error: {error}</h3>}
      <WordItem wordData={resWord} dark={props.dark} />
    </div>
  );
}

export default Form;
