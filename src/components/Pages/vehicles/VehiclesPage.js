import React, { useEffect, useState } from 'react'

import Layout from '../../Layout/Layout'

import items from '../../../data/vehicles.json'

import STORMTROPPERICON from '../../../assets/icons/stormtrooper.svg'
import Pagination from '../../Pagination/Pagination'

import VehiclesCard from '../../Cards/Vehicles/VehiclesCard'

const VehiclesPage = ({ title }) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

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

  return (
    <Layout>
      <div className='VehiclesPage page'>
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
            <span>Order by</span>
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
                <VehiclesCard key={item.uid} item={item} page='/vehicles' />
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

export default VehiclesPage
