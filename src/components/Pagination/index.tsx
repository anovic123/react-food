import React from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page : number) => void;
}

const Pagination:React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
      />
  );
};

export default Pagination;