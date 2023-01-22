import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'

import './App.css';

class App extends Component{
constructor(){
  super(this.props)
  this.state={numTiles:36,playing :false,previousTileIndex :null,tiles :[],toBeCleared:null }
}
handleTileClicked(id,color){

}
startGame = (numTiles) => {
  this.setState((state) => ({
    playing: true,
    previousTileIndex: null,
    toBeCleared: null,
    tiles: createTiles(state.numTiles)
  }))
}
  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel playing={this.state.playing} numTiles={this.state.numTiles}/>
        <Board playing={this.state.playing} tiles={this.state.tiles}/>
      
    </div>
  );

  }
}

export default App;
