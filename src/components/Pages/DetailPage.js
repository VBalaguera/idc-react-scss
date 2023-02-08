import React, { useState } from 'react'

import Layout from '../Layout/Layout'

import TESTIMAGE from '../../assets/images/vehicles/sandcrawler.jpg'
// TODO: reuse this for vehicle DetailPage
const data = {
  message: 'ok',
  result: {
    properties: {
      model: 'Digger Crawler',
      vehicle_class: 'wheeled',
      manufacturer: 'Corellia Mining Corporation',
      cost_in_credits: '150000',
      length: '36.8 ',
      crew: '46',
      passengers: '30',
      max_atmosphering_speed: '30',
      cargo_capacity: '50000',
      consumables: '2 months',
      films: [],
      pilots: [],
      created: '2020-09-17T17:46:31.415Z',
      edited: '2020-09-17T17:46:31.415Z',
      name: 'Sand Crawler',
      url: 'https://www.swapi.tech/api/vehicles/4',
    },
    description: 'A vehicle',
    _id: '5f63a160cf50d100047f97fc',
    uid: '4',
    __v: 0,
  },
}

const DetailPage = () => {
  // fetch('https://www.swapi.tech/api/planets/1/')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.error(err))

  const [info, setInfo] = useState(data.result)
  console.log(info)
  return (
    <Layout>
      <div className='page'>
        <div className='detail_page'>
          <div className='detail_page_top'>
            <div className='detail_page_top_left'>
              <div className='detail_page_top_left_card_detail'>
                <img
                  className='detail_page_top_left_card_detail_img'
                  src={TESTIMAGE}
                  alt='name'
                />
              </div>
            </div>
            <div className='detail_page_top_right'>
              <div className='detail_page_top_right_top'>
                <h2 className='detail_page_top_right_top_title'>title</h2>
              </div>
              <div className='detail_page_top_right_bottom'>
                <span className='detail_page_top_right_bottom_details'>
                  <i>
                    {info.properties.name}, {info.properties.model}.
                  </i>
                </span>
                <span className='detail_page_top_right_bottom_details'>
                  Crew capacity: {info.properties.crew}.
                </span>
                <span className='detail_page_top_right_bottom_details'>
                  Passengers: {info.properties.passengers}.
                </span>
                <span className='detail_page_top_right_bottom_details'>
                  Cargo capacity: {info.properties.cargo_capacity}.
                </span>
                <span className='detail_page_top_right_bottom_details'>
                  Manufacturer: {info.properties.manufacturer}.
                </span>
                <span className='detail_page_top_right_bottom_details'>
                  Cost in Credits: {info.properties.cost_in_credits}.
                </span>
              </div>
            </div>
          </div>
          <div className='detail_page_bottom'>
            <button className='btn'>back</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DetailPage
