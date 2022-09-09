import React from "react";
import styles from './Pagination.module.css'

export const Pagination = ({
    currentPage,
    itemsPerPage,
    totalItems,
    setPage,
}: {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    setPage: (page: number) => void;
}) => {


    const pagesOnPagination = Array.from(Array(Math.ceil(totalItems / itemsPerPage)).keys());

    return (
        <div className={styles.container}>
            <button
                className={styles.btn}
                onClick={() => { setPage(currentPage - 1) }}
                disabled={currentPage - 1 === 0}
            >
                Previous
            </button>
            {
                pagesOnPagination.map((e: number) => (
                    <button
                        className={currentPage === e + 1 ? styles.activePageItem : ""}
                        key={e}
                        onClick={() => setPage(e + 1)}

                    >
                        {e + 1}
                    </button>
                ))
            }
            <button
                className={styles.btn}
                onClick={() => setPage(currentPage + 1)}
                disabled={currentPage + 1 > pagesOnPagination.length}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination;