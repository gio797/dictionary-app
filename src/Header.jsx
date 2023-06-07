import React, { useEffect } from "react";
import { useState } from "react";

function Header() {
  const [selectedFont, setSelectedFont] = useState("serif");

  useEffect(() => {
    document.body.style.fontFamily = `${selectedFont}`;
  }, [selectedFont]);

  return (
    <header>
      <div className="logo">
        <i className="fa-solid fa-book fa-2xl"></i>
      </div>
      <select
        value={selectedFont}
        onChange={(e) => setSelectedFont(e.target.value)}
      >
        <option value="serif">serif</option>
        <option value="sans-serif">sans-serif</option>
        <option value="monospace">monospace</option>
      </select>
      <div>theme</div>
    </header>
  );
}

export default Header;
