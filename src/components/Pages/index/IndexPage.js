import React, { useEffect, useState } from 'react'

import Layout from '../../Layout/Layout'

import items from '../../../data/planets.json'

import STORMTROPPERICON from '../../../assets/icons/stormtrooper.svg'
import Pagination from '../../Pagination/Pagination'
import PlanetCard from '../../Cards/PlanetCard/PlanetCard'

const IndexPage = ({ title }) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const [highestPopulation, setHighestPopulation] = useState(false)
  const [highestDiameter, setHighestDiameter] = useState(false)

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

  // order by cargo
  const orderByHighestPopulation = () => {
    const planetsByhighestPopulation = items.results.sort(
      (objA, objB) =>
        Number(objB.properties.population) - Number(objA.properties.population)
    )

    setData(planetsByhighestPopulation)
    setHighestPopulation(true)
    console.log('planetsByPopulation', planetsByhighestPopulation)
  }
  const orderByLowestPopulation = () => {
    const planetsByLowestPopulation = items.results.sort(
      (objA, objB) =>
        Number(objA.properties.population) - Number(objB.properties.population)
    )

    setData(planetsByLowestPopulation)
    setHighestPopulation(false)
    console.log('planetsByPopulation', planetsByLowestPopulation)
  }

  // order by crew

  const orderByHighestDiameter = () => {
    const planetsByhighestDiameter = items.results.sort(
      (objA, objB) =>
        Number(objB.properties.diameter) - Number(objA.properties.diameter)
    )

    setData(planetsByhighestDiameter)
    setHighestDiameter(true)
    console.log('planetsByDiameter', planetsByhighestDiameter)
  }
  const orderByLowestDiameter = () => {
    const planetsByLowestDiameter = items.results.sort(
      (objA, objB) =>
        Number(objA.properties.diameter) - Number(objB.properties.diameter)
    )

    setData(planetsByLowestDiameter)
    setHighestDiameter(false)
    console.log('planetsByDiameter', planetsByLowestDiameter)
  }

  return (
    <Layout>
      <div className='indexpage page '>
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
            {highestPopulation ? (
              <button className='btn' onClick={orderByLowestPopulation}>
                Lowest Population
              </button>
            ) : (
              <button className='btn' onClick={orderByHighestPopulation}>
                Highest Population
              </button>
            )}

            {/* highest/lowest crew */}
            {highestDiameter ? (
              <button className='btn' onClick={orderByLowestDiameter}>
                Lowest Diameter
              </button>
            ) : (
              <button className='btn' onClick={orderByHighestDiameter}>
                Highest Diameter
              </button>
            )}
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
