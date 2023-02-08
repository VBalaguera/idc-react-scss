import React from 'react'

import Card from '../Card'

const StarshipsCard = ({ item, page }) => {
  return <Card item={item} imgsrc={item.properties.img} page={page} />
}

export default StarshipsCard
