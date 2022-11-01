import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useStyles } from './Pagination.styles'

export default function Pagination({ totalPages, currentPage }) {
  const router = useRouter();
  const { classes } = useStyles()
  return (
    <div className={classes.pagination}>
      <p className={classes.pagination_heading}>
        page {router.query.page || 1} out of {totalPages}
      </p>
      <div className={classes.paginateLinks_container}>
        {currentPage > 1 && (
          <Link href={`/?page=${currentPage - 1}`}>
            <a className={classes.paginateLinks}>Prev</a>
          </Link>
        )}
        {currentPage < totalPages && (
          <Link href={`/?page=${currentPage + 1}`}>
            <a className={classes.paginateLinks}>Next</a>
          </Link>
        )}
      </div>
    </div>
  );
}
