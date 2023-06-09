import React, { useEffect } from "react";
import { useState } from "react";

function Header({ dark, toggleTheme }) {
  const [selectedFont, setSelectedFont] = useState("serif");

  useEffect(() => {
    document.body.style.fontFamily = `${selectedFont}`;
  }, [selectedFont]);

  return (
    <header>
      <div className="logo">
        <a href="/">
          <i className="fa-solid fa-book fa-2xl"></i>
        </a>
      </div>
      <select
        className={dark ? "dark" : null}
        value={selectedFont}
        onChange={(e) => setSelectedFont(e.target.value)}
      >
        <option value="serif" style={{ fontFamily: "serif" }}>
          serif
        </option>
        <option value="sans-serif" style={{ fontFamily: "sans-serif" }}>
          sans-serif
        </option>
        <option value="monospace" style={{ fontFamily: "monospace" }}>
          monospace
        </option>
      </select>
      <div className="toggler" onClick={toggleTheme}>
        {dark ? (
          <i className="fa-solid fa-toggle-off fa-2xl"></i>
        ) : (
          <i className="fa-solid fa-toggle-on fa-2xl"></i>
        )}
      </div>
    </header>
  );
}

export default Header;
