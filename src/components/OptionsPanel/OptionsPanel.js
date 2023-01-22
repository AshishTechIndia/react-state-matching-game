import React from 'react'

import Button from '../Button'
import TileSelector from '../TileSelector'

const OptionsPanel = () => (
  <div>
    <TileSelector numTiles={this.props.numTiles}/>
    <Button playing={this.props.playing} startGame={props.startGame}/>
  </div>
)
  
  

export default OptionsPanel
