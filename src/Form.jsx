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
    // if (!ref.current) {
    //   ref.current = true;
    //   return;
    // }

    // fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw Error;
    //     }
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then((data) => setResWord(data))
    //   .catch((error) => console.log(error.message));

    async function getWord() {
      try {
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
        );
        if (!res.ok) {
          throw Error("coold not find the word");
        }
        const data = await res.json();
        setResWord(data);
        setError(null);
      } catch (err) {
        // console.log(error);
        // alert(err.message);
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
      {error && <h3>{error}</h3>}
      <WordItem wordData={resWord} dark={props.dark} />
    </div>
  );
}

export default Form;
