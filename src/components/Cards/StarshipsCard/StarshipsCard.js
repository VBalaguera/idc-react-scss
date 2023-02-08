import React from 'react'

import TESTICON from '../../../assets/icons/death_star.svg'

import alderaan from '../../../assets/images/planets/alderaan.jpg'
import bespin from '../../../assets/images/planets/bespin.png'
import coruscant from '../../../assets/images/planets/coruscant.png'
import Dagobah from '../../../assets/images/planets/Dagobah.jpg'
import endor from '../../../assets/images/planets/endor.png'
import hoth from '../../../assets/images/planets/hoth.png'
import kamino from '../../../assets/images/planets/kamino.jpg'
import naboo from '../../../assets/images/planets/naboo.png'
import tatooine from '../../../assets/images/planets/tatooine.png'
import yaviniv from '../../../assets/images/planets/yaviniv.png'

const StarshipsCard = ({ planet }) => {
  console.log('planet', planet)
  let imgsrc = ''
  switch (planet.uid) {
    case '1':
      imgsrc = tatooine
      break
    case '2':
      imgsrc = alderaan
      break
    case '3':
      imgsrc = yaviniv
      break
    case '4':
      imgsrc = hoth
      break
    case '5':
      imgsrc = Dagobah
      break
    case '6':
      imgsrc = bespin
      break
    case '7':
      imgsrc = endor
      break
    case '8':
      imgsrc = naboo
      break
    case '9':
      imgsrc = coruscant
      break
    case '10':
      imgsrc = kamino
      break
    default:
      imgsrc = TESTICON
  }
  return (
    <div className='card_item'>
      <div className='card_item_top'>
        <img className='card_item_top_img' src={imgsrc} alt={planet.name} />
      </div>
      <div className='card_item_bottom'>
        <div className='card_item_bottom_title'>
          <span>{planet.name}</span>
        </div>
        <div className='card_item_bottom_description'>
          <span>Description</span>
        </div>
        <div className='card_item_bottom_details'>
          <span>Details</span>
          <div className='card_item_bottom_details_info'>
            <img
              className='card_item_bottom_details_info_icon'
              src={TESTICON}
              alt='test'
            />
            <img
              className='card_item_bottom_details_info_icon'
              src={TESTICON}
              alt='test'
            />
            <img
              className='card_item_bottom_details_info_icon'
              src={TESTICON}
              alt='test'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StarshipsCard
