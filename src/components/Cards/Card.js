import React from 'react'

import TESTICON from '../../assets/icons/death_star.svg'
import { Link } from 'react-router-dom'

const Card = ({ item, imgsrc, page }) => {
  //   console.log('item', item)

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
          <span>{item.description}</span>
        </div>
        <div className='card_item_bottom_details'>
          <Link
            className='card_item_bottom_details_link'
            to={`${page}/${item.uid}`}
          >
            More information
          </Link>
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
