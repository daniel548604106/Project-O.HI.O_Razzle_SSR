import React, { useState } from 'react';

import logo from '../assets/images/O-HI-O.logo.svg';
import classes from './Header.module.scss';

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = () => {
    console.log("iihi");
  };

  const handleInputKeyDown = (e) => {
    searchInput.length > 0 && e.key === "Enter" ? handleSearchInput() : "";
  };
  return (
    <div className={classes["header-container"]}>
      <img className={classes["logo-img"]} src={logo} alt="logo" />
      <div className={classes["search-wrapper"]}>
        <input
          className={classes["search-input"]}
          placeholder="探索好設計"
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => handleInputKeyDown(e)}
          value={searchInput}
        />
        <button
          className={classes["search-button"]}
          onClick={() => handleSearchInput()}
        >
          搜尋
        </button>
      </div>
    </div>
  );
};

export default Header;
