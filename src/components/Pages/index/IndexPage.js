import React, { useEffect, useState } from 'react'

import Layout from '../../Layout/Layout'

import Card from '../../Cards/PlanetCard/PlanetCard'

import { Link } from 'react-router-dom'

import planets from '../../../data/planets.json'

import STORMTROPPERICON from '../../../assets/icons/stormtrooper.svg'
import Pagination from '../../Pagination/Pagination'
import PlanetCard from '../../Cards/PlanetCard/PlanetCard'

const IndexPage = ({ title }) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState()

  // pagination from local json files
  // current page
  const [currentPage, setCurrentPage] = useState(1)
  // items to display per page
  const [itemsPerPage] = useState(4)
  const indexLastItem = currentPage * itemsPerPage
  const indexFirstItem = indexLastItem - itemsPerPage
  const currentItems = planets.results.slice(indexFirstItem, indexLastItem)

  console.log('currentItems', currentItems)

  // calculate page number
  const pageNumber = Math.ceil(planets.results.length / itemsPerPage)

  useEffect(() => {
    setData(currentItems)
  }, [])

  // old code from using the api
  // useEffect(() => {
  //   setLoading(true)

  //   fetch('https://www.swapi.tech/api/planets/')
  //     .then((res) => res.json())
  //     .then((data) => setData(data.results))
  //     .then(console.log('loaded'))

  //     .then(setLoading(false))
  // }, [])

  return (
    <Layout>
      <div className='indexpage page'>
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
                <PlanetCard key={item.uid} planet={item} page='/planets' />
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

export default IndexPage
