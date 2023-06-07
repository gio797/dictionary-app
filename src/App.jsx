import { useEffect, useState } from "react";
import Form from "./Form";
import Header from "./Header";

function App() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark((prev) => !prev);
  }

  useEffect(() => {
    {
      dark
        ? (document.body.style.backgroundColor = "#242424")
        : (document.body.style.backgroundColor = "#f4f4f4");
    }
  }, [dark]);

  return (
    <div className={dark ? "site-wrapper dark" : "site-wrapper"}>
      <Header dark={dark} toggleTheme={toggleTheme} />
      <Form dark={dark} />
    </div>
  );
}

export default App;
