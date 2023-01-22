import React from 'react'
import Tile from '../Tile'
import './Tile.css'

const Tile = (props) => {
  const tiles = props.tiles.map((tile) => (<Tile {...tile} />))
  return (
    <div className='Tile'>
      {tiles}
    </div>
  )
}

export default Tile
