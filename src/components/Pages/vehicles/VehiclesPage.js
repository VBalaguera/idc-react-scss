import React, { useEffect, useState } from 'react'

import Layout from '../../Layout/Layout'

import items from '../../../data/vehicles.json'

import STORMTROPPERICON from '../../../assets/icons/stormtrooper.svg'
import Pagination from '../../Pagination/Pagination'

import VehiclesCard from '../../Cards/Vehicles/VehiclesCard'

const VehiclesPage = ({ title }) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const [highestCargo, setHighestCargo] = useState(false)
  const [highestCrew, setHighestCrew] = useState(false)

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
  }, [items])

  // order by cargo
  const orderByHighestCargo = () => {
    const starshipsByHighestCargo = items.results.sort(
      (objA, objB) =>
        Number(objB.properties.cargo_capacity) -
        Number(objA.properties.cargo_capacity)
    )

    setData(starshipsByHighestCargo)
    setHighestCargo(true)
    console.log('starshipsByCargo', starshipsByHighestCargo)
  }
  const orderByLowestCargo = () => {
    const starshipsByLowestCargo = items.results.sort(
      (objA, objB) =>
        Number(objA.properties.cargo_capacity) -
        Number(objB.properties.cargo_capacity)
    )

    setData(starshipsByLowestCargo)
    setHighestCargo(false)
    console.log('starshipsByCargo', starshipsByLowestCargo)
  }

  // order by crew

  const orderByHighestCrew = () => {
    const starshipsByHighestCrew = items.results.sort(
      (objA, objB) =>
        Number(objB.properties.crew) - Number(objA.properties.crew)
    )

    setData(starshipsByHighestCrew)
    setHighestCrew(true)
    console.log('starshipsByCrew', starshipsByHighestCrew)
  }
  const orderByLowestCrew = () => {
    const starshipsByLowestCrew = items.results.sort(
      (objA, objB) =>
        Number(objA.properties.crew) - Number(objB.properties.crew)
    )

    setData(starshipsByLowestCrew)
    setHighestCrew(false)
    console.log('starshipsByCrew', starshipsByLowestCrew)
  }

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
            {/* highest/lowest cargo */}
            {highestCargo ? (
              <button className='btn' onClick={orderByLowestCargo}>
                Lowest Cargo Capacity
              </button>
            ) : (
              <button className='btn' onClick={orderByHighestCargo}>
                Highest Cargo Capacity
              </button>
            )}

            {/* highest/lowest crew */}
            {highestCrew ? (
              <button className='btn' onClick={orderByLowestCrew}>
                Lowest Crew Capacity
              </button>
            ) : (
              <button className='btn' onClick={orderByHighestCrew}>
                Highest Crew Capacity
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
