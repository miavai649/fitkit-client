// Pagination.tsx
import { IPaginationProps } from '@/types'
import React from 'react'

const Pagination = ({
  totalItems = 0,
  currentPage,
  itemsPerPage,
  onPageChange,
  onLimitChange
}: IPaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages === 0) {
    return null // No pagination needed if there are no items
  }

  const handlePageClick = (page: number) => {
    onPageChange(page)
  }

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(e.target.value, 10)
    onLimitChange(newLimit)
  }

  return (
    <div className='flex items-center justify-between mt-6 p-4 border-t border-gray-300'>
      <button
        className='px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700 disabled:bg-gray-400'
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}>
        Previous
      </button>
      <span className='text-lg font-medium'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className='px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700 disabled:bg-gray-400'
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Next
      </button>
      <div className='flex items-center ml-4'>
        <span className='mr-2'>Items per page:</span>
        <select
          className='px-3 py-2 border rounded'
          value={itemsPerPage}
          onChange={handleLimitChange}>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </select>
      </div>
    </div>
  )
}

export default Pagination
