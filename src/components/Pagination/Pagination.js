import React from 'react'

const Pagination = ({ pageNumber, currentPage, setCurrentPage }) => {
  console.log(currentPage)
  const pageNumbers = [...Array(pageNumber + 1).keys()].slice(1)

  const nextPage = () => {
    if (currentPage !== pageNumber) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }
  return (
    <nav>
      <div className='pagination '>
        <button className='btn' onClick={prevPage} href='#'>
          Previous
        </button>

        {pageNumbers.map((pgNumber) => (
          <button
            key={pgNumber}
            className={`btn ${currentPage === pgNumber ? 'active' : ''} `}
            onClick={() => setCurrentPage(pgNumber)}
          >
            {pgNumber}
          </button>
        ))}

        <button className='btn' onClick={nextPage} href='#'>
          Next
        </button>
      </div>
    </nav>
  )
}

export default Pagination
