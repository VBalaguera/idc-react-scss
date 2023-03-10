import React from 'react'

import Card from '../../Cards/Card'

const StarshipsCard = ({ item, page }) => {
  return <Card item={item} imgsrc={item.properties.img} page={page} />
}

export default StarshipsCard
