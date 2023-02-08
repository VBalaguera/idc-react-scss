import React from 'react'

import Layout from '../Layout/Layout'

import TESTIMAGE from '../../assets/images/planets/alderaan.jpg'

const DetailPage = () => {
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
                  Lorem, ipsum.
                </span>
                <span className='detail_page_top_right_bottom_details'>
                  Lorem, ipsum.
                </span>
                <span className='detail_page_top_right_bottom_details'>
                  Lorem, ipsum.
                </span>
                <span className='detail_page_top_right_bottom_details'>
                  Lorem, ipsum.
                </span>
                <span className='detail_page_top_right_bottom_details'>
                  Lorem, ipsum.
                </span>
              </div>
            </div>
          </div>
          <div className='detail_page_bottom'>
            <button>back</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DetailPage
