import React from 'react';
import style from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage, onFirstPage, onLastPage }) => {
    return (
        <div className={style.paginationContainer}>
        <div className={style.pagination}>
            <button onClick={onFirstPage} className={style.paginationButton} >
                ...
            </button>
            <button onClick={onPrevPage} disabled={currentPage === 1} className={style.paginationButton} >
                Anterior
            </button>
            <span className={style.currentPage}> {currentPage} </span>
            <button onClick={onNextPage} disabled={currentPage === totalPages} className={style.paginationButton}>
                Siguiente
            </button>
            <button onClick={onLastPage} className={style.paginationButton} >
                ...
            </button>
        </div>
        </div>
    );
};

export default Pagination;
