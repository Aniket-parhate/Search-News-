import React from "react";
import { useGlobalContext } from "./Context";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()}>PREVIOUS</button>
        <p className="pagination_num">
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()}>NEXT</button>
      </div>
    </>
  );
};

export default Pagination;
