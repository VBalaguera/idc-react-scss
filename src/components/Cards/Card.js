import React from 'react'

import TESTICON from '../../assets/icons/death_star.svg'

const Card = ({ item, imgsrc }) => {
  console.log('item', item)

  return (
    <div className='card_item'>
      <div className='card_item_top'>
        <img className='card_item_top_img' src={imgsrc} alt={item.name} />
      </div>
      <div className='card_item_bottom'>
        <div className='card_item_bottom_title'>
          <span>{item.name}</span>
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

export default Card
