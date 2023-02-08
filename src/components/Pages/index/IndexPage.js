import React, { useEffect, useState } from 'react'

import Layout from '../../Layout/Layout'

import Card from '../../Cards/PlanetCard/PlanetCard'

import { Link } from 'react-router-dom'

import STORMTROPPERICON from '../../../assets/icons/stormtrooper.svg'

const IndexPage = ({ title }) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true)

    fetch('https://www.swapi.tech/api/planets/')
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .then(console.log('loaded'))

      .then(setLoading(false))
  }, [])

  // fetch('https://www.swapi.tech/api/planets/1/')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.error(err))
  // fetch('https://www.swapi.tech/api/starships/2')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.error(err))
  // fetch('https://www.swapi.tech/api/vehicles/4/')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.error(err))

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

            {data &&
              data.map((item) => (
                <Link to={`/planets/${item.uid}`}>
                  <Card key={item.uid} planet={item} />
                </Link>
              ))}
          </div>
          <div className='page_bottom_pagination'>
            <div className='page_bottom_pagination_options'>
              Pagination options
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
