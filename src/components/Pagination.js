import React from "react";
import "./Pagination.css";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="PokeListButton">
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage} id="rightButton">Next</button>}
    </div>
  );
}
