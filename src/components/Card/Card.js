import React from 'react'

import TESTIMAGE from '../../assets/images/planets/alderaan.jpg'

import TESTICON from '../../assets/icons/death_star.svg'

const Card = () => {
  return (
    <div className='card_item'>
      <div className='card_item_top'>
        <img className='card_item_top_img' src={TESTIMAGE} />
      </div>
      <div className='card_item_bottom'>
        <div className='card_item_bottom_title'>
          <span>PLANET NAME</span>
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
            />
            <img
              className='card_item_bottom_details_info_icon'
              src={TESTICON}
            />
            <img
              className='card_item_bottom_details_info_icon'
              src={TESTICON}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
