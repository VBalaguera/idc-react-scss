import React from 'react'

import Card from '../Card'

const PlanetCard = ({ planet, page }) => {
  return <Card item={planet} imgsrc={planet.properties.img} page={page} />
}

export default PlanetCard
