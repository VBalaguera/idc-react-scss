import React from 'react'

import IDCLOGO from '../../assets/images/pngegg.png'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav_logo'>
        <img className='nav_logo_img' src={IDCLOGO} alt='IDC' />
        <span className='nav_logo_text'>IDC</span>
      </div>
      <div className='nav_options'>
        <div className='nav_options_menu'>
          <div className='nav_options_menu_item'>
            <img className='nav_options_menu_item_icon' src='' alt='X' />
            <span className='nav_options_menu_item_text'>Planets</span>
          </div>
          <div className='nav_options_menu_item'>
            <img className='nav_options_menu_item_icon' src='' alt='X' />
            <span className='nav_options_menu_item_text'>Starships</span>
          </div>
          <div className='nav_options_menu_item'>
            <img className='nav_options_menu_item_icon' src='' alt='X' />
            <span className='nav_options_menu_item_text'>Vehicles</span>
          </div>
          <div className='nav_options_menu_item'>
            <img className='nav_options_menu_item_icon' src='' alt='X' />
            <span className='nav_options_menu_item_text'>People</span>
          </div>
        </div>
      </div>
      {/* TODO: include additional information here? */}
    </nav>
  )
}

export default Navbar
