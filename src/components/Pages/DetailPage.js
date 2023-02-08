import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Layout from '../Layout/Layout'

import Loading from '../Loading/Loading'

import planets from '../../data/planets.json'

// TODO: clean this up, move it elsewhere
import alderaan from '../../assets/images/planets/alderaan.jpg'
import bespin from '../../assets/images/planets/bespin.png'
import coruscant from '../../assets/images/planets/coruscant.png'
import Dagobah from '../../assets/images/planets/Dagobah.jpg'
import endor from '../../assets/images/planets/endor.png'
import hoth from '../../assets/images/planets/hoth.png'
import kamino from '../../assets/images/planets/kamino.jpg'
import naboo from '../../assets/images/planets/naboo.png'
import tatooine from '../../assets/images/planets/tatooine.png'
import yaviniv from '../../assets/images/planets/yaviniv.png'

import TESTICON from '../../assets/icons/death_star.svg'
// TODO: reuse this for vehicle DetailPage
// const data = {
//   message: 'ok',
//   result: {
//     properties: {
//       model: 'Digger Crawler',
//       vehicle_class: 'wheeled',
//       manufacturer: 'Corellia Mining Corporation',
//       cost_in_credits: '150000',
//       length: '36.8 ',
//       crew: '46',
//       passengers: '30',
//       max_atmosphering_speed: '30',
//       cargo_capacity: '50000',
//       consumables: '2 months',
//       films: [],
//       pilots: [],
//       created: '2020-09-17T17:46:31.415Z',
//       edited: '2020-09-17T17:46:31.415Z',
//       name: 'Sand Crawler',
//       url: 'https://www.swapi.tech/api/vehicles/4',
//     },
//     description: 'A vehicle',
//     _id: '5f63a160cf50d100047f97fc',
//     uid: '4',
//     __v: 0,
//   },
// }

const DetailPage = () => {
  const params = useParams()
  console.log(params.id)

  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)
  const [image, setImage] = useState('')

  const currentPlanet = planets.results.filter(
    (planet) => planet.uid === params.id
  )
  console.log(currentPlanet[0])

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data.result)
        console.log('uid', data.result.uid)
        switch (data.uid) {
          case '1':
            console.log('1')
            setImage('../../assets/images/planets/tatooine.png')
            break
          case '2':
            setImage(alderaan)
            break
          case '3':
            setImage(yaviniv)
            break
          case '4':
            setImage(hoth)
            break
          case '5':
            setImage(Dagobah)
            break
          case '6':
            setImage(bespin)
            break
          case '7':
            setImage(endor)
            break
          case '8':
            setImage(naboo)
            break
          case '9':
            setImage(coruscant)
            break
          case '10':
            setImage(kamino)
            break
          default:
            break
        }
        setData(data)
        setLoading(false)
        console.log('image', image)
        console.log(coruscant)
      })
  }, [])

  // useEffect(() => {
  //   setdata()
  // }, [setdata])
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
                <div className='detail_page_top_right_top'>
                  <h2 className='detail_page_top_right_top_title'>
                    {currentPlanet[0].properties.name}
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
            ) : (
              <div className='detail_page_top_right'>
                <Loading />
              </div>
            )}
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
