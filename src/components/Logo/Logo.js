import React from 'react'

import IDCLOGO from '../../assets/images/pngegg.png'

const Logo = () => {
  return (
    <>
      <div className='logo'>
        <img className='logo_img' src={IDCLOGO} alt='IDC' />
        <span className='logo_text'>IDC</span>
      </div>
    </>
  )
}

export default Logo
