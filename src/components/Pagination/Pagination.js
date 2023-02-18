import React from "react";
import "./Pagination.css";

const Pagination = ({ handler, currentPage, maxPages }) => {
  console.log("mamaxPages: ", maxPages);
  let styleDisabledMin = currentPage === 1 ? "page-item disabled" : "page-item";

  let styleDisabledMax =
    currentPage === maxPages ? "page-item disabled" : "page-item";
  return (
    <nav aria-label="Page navigation example">
      <span>page {currentPage}</span>
      <ul
        className="pagination  justify-content-center"
        onClick={(e) => {
          console.log("Click >>> ", Number(e.target.dataset.value));
          if (e.target.dataset.value) handler(Number(e.target.dataset.value));
        }}
      >
        <li
          className={styleDisabledMin}
          onClick={() => {
            if (currentPage > 1) handler(--currentPage);
          }}
        >
          <span className="page-link" aria-label="Previous">
            &laquo;
          </span>
        </li>
        <li className={styleDisabledMin}>
          <span className="page-link" data-value={currentPage - 1}>
            {currentPage - 1}
          </span>
        </li>
        <li className="page-item active">
          <span className="page-link" data-value={currentPage}>
            {currentPage}
          </span>
        </li>
        <li className={styleDisabledMax}>
          <span className="page-link" data-value={currentPage + 1}>
            {currentPage + 1}
          </span>
        </li>
        <li
          className={styleDisabledMax}
          onClick={() => {
            handler(++currentPage);
          }}
        >
          <span className="page-link" aria-label="Next">
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
