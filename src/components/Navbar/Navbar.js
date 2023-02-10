import React from 'react'

import IDCLOGO from '../../assets/images/pngegg.png'

import PLANETEXAMPLE from '../../assets/icons/gloves_by_radiusss.svg'
import VEHICLEEXAMPLE from '../../assets/icons/speeder_by_radiusss.svg'
import STARSHIPEXAMPLE from '../../assets/icons/death_star.svg'
import PEOPLEEXAMPLE from '../../assets/icons/darth_vader_by_radiusss.svg'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav_logo'>
        <Link to='/'>
          <img className='nav_logo_img' src={IDCLOGO} alt='IDC' />
          <span className='nav_logo_text'>IDC</span>
        </Link>
      </div>
      <div className='nav_options'>
        <div className='nav_options_menu'>
          <div className='nav_options_menu_item'>
            <Link to='/'>
              <img
                className='nav_options_menu_item_icon'
                src={PLANETEXAMPLE}
                alt='X'
              />
              <span className='nav_options_menu_item_text'>Planets</span>
            </Link>
          </div>
          <div className='nav_options_menu_item'>
            <Link to='/starships'>
              <img
                className='nav_options_menu_item_icon'
                src={STARSHIPEXAMPLE}
                alt='X'
              />
              <span className='nav_options_menu_item_text'>Starships</span>
            </Link>{' '}
          </div>
          <div className='nav_options_menu_item'>
            <Link to='/vehicles'>
              {' '}
              <img
                className='nav_options_menu_item_icon'
                src={VEHICLEEXAMPLE}
                alt='X'
              />
              <span className='nav_options_menu_item_text'>Vehicles</span>
            </Link>{' '}
          </div>
          {/* TODO: include new People's pages */}
          {/* <div className='nav_options_menu_item'>
            <Link to='/people'>
              {' '}
              <img
                className='nav_options_menu_item_icon'
                src={PEOPLEEXAMPLE}
                alt='X'
              />
              <span className='nav_options_menu_item_text'>People</span>
            </Link>
          </div> */}
        </div>
      </div>
      {/* TODO: include additional information here? */}
    </nav>
  )
}

export default Navbar
