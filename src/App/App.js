import React from 'react';

import GoatCorral from '../components/GoatCorral/GoatCorral';

import goatData from './helpers/data/goatData';

import './App.scss';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  takeAGoat = (goatId) => {
    goatData.takeGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeAGoat = (goatId) => {
    goatData.freeGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    const { goats } = this.state;

    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <GoatCorral goats={goats} takeAGoat={this.takeAGoat} freeAGoat={this.freeAGoat} />
      </div>
    );
  }
}

export default App;