import React from "react";
import { NavLink } from "react-router-dom";
import "./Pagination.css";

const Pagination = ({ currentPage, maxPages, url }) => {
  // console.log("mamaxPages: ", maxPages);
  console.log("url >>> ", url);
  let styleDisabledMin = currentPage === 1 ? "page-item disabled" : "page-item";

  let styleDisabledMax =
    currentPage === maxPages ? "page-item disabled" : "page-item";
  return (
    <nav aria-label="Page navigation example">
      <span>page {currentPage}</span>
      <ul
        className="pagination  justify-content-center"
        // onClick={(e) => {
        //   // console.log("Click >>> ", Number(e.target.dataset.value));
        //   if (e.target.dataset.value) handler(Number(e.target.dataset.value));
        // }}
      >
        <NavLink
          to={`${url}/${1}`}
          className={styleDisabledMin}
          // onClick={() => {
          //   if (currentPage > 1) handler(--currentPage);
          // }}
        >
          <span className="page-link" aria-label="Previous">
            &laquo;
          </span>
        </NavLink>
        <NavLink to={`${url}/${currentPage - 1}`} className={styleDisabledMin}>
          <span className="page-link" data-value={currentPage - 1}>
            {currentPage - 1}
          </span>
        </NavLink>
        <NavLink to={`${url}/${currentPage}`} className="page-item">
          <span className="page-link" data-value={currentPage}>
            {currentPage}
          </span>
        </NavLink>
        <NavLink to={`${url}/${currentPage + 1}`} className={styleDisabledMax}>
          <span className="page-link" data-value={currentPage + 1}>
            {currentPage + 1}
          </span>
        </NavLink>
        <NavLink
          to={`${url}/${maxPages}`}
          className={styleDisabledMax}
          // onClick={() => {
          //   handler(++currentPage);
          // }}
        >
          <span className="page-link" aria-label="Next">
            &raquo;
          </span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Pagination;
