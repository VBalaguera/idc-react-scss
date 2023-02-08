import React from 'react'

import Layout from '../Layout/Layout'

const DetailPage = () => {
  fetch('https://www.swapi.tech/api/planets/1/')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
  return (
    <Layout>
      <div className='page'>
        <div className='page2'></div>
      </div>
    </Layout>
  )
}

export default DetailPage
