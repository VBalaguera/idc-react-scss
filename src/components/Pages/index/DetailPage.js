import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Layout from '../../Layout/Layout'

import Loading from '../../Loading/Loading'

import planets from '../../../data/planets.json'

const DetailPage = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)
  // const [image, setImage] = useState('')

  const currentPlanet = planets.results.filter(
    (planet) => planet.uid === params.id
  )
  console.log(currentPlanet[0])

  return (
    <Layout>
      <div className='page'>
        <div className='detail_page'>
          <div className='detail_page_top'>
            <div className='detail_page_top_left'>
              <div className='detail_page_top_left_card_detail'>
                {data.uid ? (
                  <Loading />
                ) : (
                  <img
                    className='detail_page_top_left_card_detail_img'
                    src={currentPlanet[0].properties.img}
                    alt=''
                  />
                )}
              </div>
            </div>
            {!loading ? (
              <div className='detail_page_top_right'>
                <Loading />
              </div>
            ) : (
              <div className='detail_page_top_right'>
                <div className='detail_page_top_right_top'>
                  <h2 className='detail_page_top_right_top_title'>
                    {currentPlanet[0].name}
                  </h2>
                </div>
                <div className='detail_page_top_right_bottom'>
                  <span className='detail_page_top_right_bottom_details'>
                    <i>{currentPlanet[0].description}</i>
                  </span>
                  <span className='detail_page_top_right_bottom_details'>
                    Climate: {currentPlanet[0].properties.climate} /{' '}
                    {currentPlanet[0].properties.terrain}.
                  </span>
                  <span className='detail_page_top_right_bottom_details'>
                    Population: {currentPlanet[0].properties.population}.
                  </span>
                  <span className='detail_page_top_right_bottom_details'>
                    Diameter: {currentPlanet[0].properties.diameter}.
                  </span>
                  <span className='detail_page_top_right_bottom_details'>
                    Orbital Period: {currentPlanet[0].properties.orbital_period}
                    .
                  </span>
                  <span className='detail_page_top_right_bottom_details'>
                    Gravity: {currentPlanet[0].properties.gravity}.
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className='detail_page_bottom'>
            <button onClick={() => navigate(-1)} className='btn'>
              back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DetailPage
