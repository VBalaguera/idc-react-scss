import React from 'react'

import Layout from '../Layout/Layout'

const IndexPage = () => {
  fetch('https://www.swapi.tech/api/planets/')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
  return (
    <Layout>
      <div className='indexpage page'>
        <div className='page_top'>
          <div className='page_top_title'>
            <span className='page_top_title_text'>
              Imperial Destroyers Center
            </span>
            <div className='page_top_title_right'>
              <span>X</span>
              <span>X</span>
            </div>
          </div>
          <div className='page_top_info'>Page title</div>
          <div className='page_top_options'>
            <span>Search bar</span>
            <span>Order by</span>
          </div>
        </div>
        <div className='page_bottom'>
          {/* display page's api results */}
          <div className='page_bottom_items_container'></div>
          <div className='page_bottom_pagination'>
            <div className='page_bottom_pagination_options'>
              Pagination options
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
