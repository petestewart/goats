import React from 'react';
import Goat from '../Goat/Goat';
import PropTypes from 'prop-types';

import goatShape from '../../App/helpers/propTypes/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  render() {
    const { goats } = this.props;

    const goatCards = goats.map((goat) => (
    <Goat key={goat.id} goat={goat} />
    ));

    return (
      <div>
        <h2>GET YOUR GOAT</h2>
        { goatCards }
      </div>
    );
  }
}

export default GoatCorral;
