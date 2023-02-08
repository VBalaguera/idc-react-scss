import React, { useEffect, useState } from 'react'

import Layout from '../../Layout/Layout'

import items from '../../../data/starships.json'

import STORMTROPPERICON from '../../../assets/icons/stormtrooper.svg'
import Pagination from '../../Pagination/Pagination'
import PlanetCard from '../../Cards/PlanetCard/PlanetCard'
import StarshipsCard from '../../Cards/StarshipsCard/StarshipsCard'

const StarshipsPage = ({ title }) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const [highest, setHighest] = useState(false)

  // pagination from local json files
  // current page
  const [currentPage, setCurrentPage] = useState(1)
  // items to display per page
  const [itemsPerPage] = useState(4)
  const indexLastItem = currentPage * itemsPerPage
  const indexFirstItem = indexLastItem - itemsPerPage
  const currentItems = items.results.slice(indexFirstItem, indexLastItem)

  console.log('currentItems', currentItems)

  // calculate page number
  const pageNumber = Math.ceil(items.results.length / itemsPerPage)

  useEffect(() => {
    // TODO:
    // setLoading(true)
    // use setTimeout for 1 second
    // then setLoading(false)
    setData(currentItems)
  }, [])

  const orderByCargo = () => {
    const starshipsByHighestCargo = items.results.sort(
      (objA, objB) =>
        Number(objB.properties.cargo_capacity) -
        Number(objA.properties.cargo_capacity)
    )

    setData(starshipsByHighestCargo)
    setHighest(true)
    console.log('starshipsByCargo', starshipsByHighestCargo)
  }

  return (
    <Layout>
      <div className='StarshipsPage page'>
        <div className='page_top'>
          <div className='page_top_title'>
            <span className='page_top_title_text'>
              Imperial Destroyers Center
            </span>
            <div className='page_top_title_right'>
              <div className='page_top_title_right_login'>
                <img
                  className='page_top_title_right_login_img'
                  src={STORMTROPPERICON}
                  alt='login'
                />
              </div>
            </div>
          </div>
          <div className='page_top_info'>{title}</div>
          <div className='page_top_options'>
            {highest ? (
              <button className='btn' onClick={orderByCargo}>
                Lowest Cargo Capacity
              </button>
            ) : (
              <button className='btn' onClick={orderByCargo}>
                Highest Cargo Capacity
              </button>
            )}

            <span>Order by</span>
            <span>Order by</span>
          </div>
        </div>
        <div className='page_bottom'>
          {/* display page's api results */}
          <div className='page_bottom_items_container'>
            {/* data.results.map here */}

            {currentItems &&
              currentItems.map((item) => (
                <StarshipsCard key={item.uid} item={item} page='/starships' />
              ))}
          </div>
          <div className='page_bottom_pagination'>
            <div className='page_bottom_pagination_options'>
              <Pagination
                pageNumber={pageNumber}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default StarshipsPage
