import React from "react";
import "./search-box.styles.css";

const SearchBox = ({placeHolder,handleChange}) => (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </div>
)

export default SearchBox;