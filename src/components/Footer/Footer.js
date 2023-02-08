import React from 'react'

import Status from '../Status/Status'

const Footer = () => {
  return (
    <footer>
      {' '}
      <div className='footer'>
        <div className='footer-right'>Copyright 2023</div>
        <div className='footer-left'>
          <Status />
        </div>
      </div>
    </footer>
  )
}

export default Footer
