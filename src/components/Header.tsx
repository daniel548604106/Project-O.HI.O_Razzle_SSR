import React, { useState } from 'react';

import logo from '../assets/images/O-HI-O.logo.svg';
import classes from './Header.module.scss';

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = () => {
    console.log("iihi");
  };
  return (
    <div className={classes["header-container"]}>
      <img src={logo} />
      <div>
        <form action="">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            onKeyDown={(e) =>
              searchInput.length > 0 && e.key === "Enter"
                ? handleSearchInput()
                : ""
            }
            value={searchInput}
            placeholder="探索好設計"
          />
        </form>
        <button onClick={() => handleSearchInput()}>搜尋</button>
      </div>
    </div>
  );
};

export default Header;
