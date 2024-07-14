// Pagination.tsx
import { IPaginationProps } from '@/types'

const Pagination = ({
  totalItems = 0,
  currentPage,
  onPageChange
}: IPaginationProps) => {
  const totalPages = Math.ceil(totalItems / 12)

  if (totalPages === 0) {
    return null // No pagination needed if there are no items
  }

  const handlePageClick = (page: number) => {
    onPageChange(page)
  }

  return (
    <div className='flex items-center justify-between mt-6 p-4 border-t border-gray-300'>
      <button
        className='px-4 py-2 text-white bg-primary rounded hover:bg-primary-500 disabled:bg-gray-400'
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}>
        Previous
      </button>
      <span className='text-lg font-medium'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className='px-4 py-2 text-white bg-primary rounded hover:bg-primary-500 disabled:bg-gray-400'
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  )
}

export default Pagination
