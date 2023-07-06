import React from "react";
import styled from "styled-components";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <PaginationWrapper className="pagination">
      {pages.map((page) => (
        <button
          className={
            currentPage === page ? "active pagination__btn" : "pagination__btn"
          }
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  button {
    border: 1px solid white;
    background-color: black;
    color: white;
    padding: 6px;
    border-radius: 8px;
    width: 3rem;
  }
  button.active {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
