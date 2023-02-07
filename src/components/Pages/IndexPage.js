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
          <div className='page_top_title'>title</div>
          <div className='page_top_info'>info</div>
          <div className='page_top_options'>options</div>
        </div>
        <div className='page_bottom'></div>
      </div>
    </Layout>
  )
}

export default IndexPage
