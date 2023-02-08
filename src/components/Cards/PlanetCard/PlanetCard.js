import React from 'react'

import TESTICON from '../../../assets/icons/death_star.svg'

import Card from '../Card'

import alderaan from '../../../assets/images/planets/alderaan.jpg'
import bespin from '../../../assets/images/planets/bespin.png'
import coruscant from '../../../assets/images/planets/coruscant.png'
import Dagobah from '../../../assets/images/planets/Dagobah.jpg'
import endor from '../../../assets/images/planets/endor.png'
import hoth from '../../../assets/images/planets/hoth.png'
import kamino from '../../../assets/images/planets/kamino.jpg'
import naboo from '../../../assets/images/planets/naboo.png'
import tatooine from '../../../assets/images/planets/tatooine.png'
import yaviniv from '../../../assets/images/planets/yaviniv.png'

const PlanetCard = ({ planet, page }) => {
  return <Card item={planet} imgsrc={planet.properties.img} page={page} />
}

export default PlanetCard
