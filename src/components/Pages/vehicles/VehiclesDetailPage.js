import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Layout from '../../Layout/Layout'

import Loading from '../../Loading/Loading'

import items from '../../../data/vehicles.json'

const VehiclesDetailPage = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)
  // const [image, setImage] = useState('')

  const currentItem = items.results.filter((planet) => planet.uid === params.id)
  console.log(currentItem[0])

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
                    src={currentItem[0].properties.img}
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
                    {currentItem[0].properties.name} /{' '}
                    {currentItem[0].properties.model}
                  </h2>
                </div>
                <div className='detail_page_top_right_bottom'>
                  <span className='detail_page_top_right_bottom_details'>
                    <i>
                      Manufacturer: {currentItem[0].properties.manufacturer}.
                    </i>
                  </span>
                  <span className='detail_page_top_right_bottom_details'>
                    Length: {currentItem[0].properties.length}.
                  </span>
                  <span className='detail_page_top_right_bottom_details'>
                    Crew: {currentItem[0].properties.crew}.
                  </span>
                  <span className='detail_page_top_right_bottom_details'>
                    Max speed:{' '}
                    {currentItem[0].properties.max_atmosphering_speed}.
                  </span>
                  <span className='detail_page_top_right_bottom_details'>
                    Cargo capacity: {currentItem[0].properties.cargo_capacity}.
                  </span>
                  <span className='detail_page_top_right_bottom_details'>
                    Value in credits:{' '}
                    {currentItem[0].properties.cost_in_credits}.
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

export default VehiclesDetailPage
