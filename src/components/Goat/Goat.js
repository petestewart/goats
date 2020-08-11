import React from 'react';
import './goat.scss';
import goatShape from '../../App/helpers/propTypes/goatShape'

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
  }

  render() {
    const { goat } = this.props;

    return (
      <div className="card">
        <img className="card-img-top" src={goat.imgUrl} alt="one goat" />
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">This goat is {goat.age} years old and is descibed as {goat.description}</p>
        </div>
      </div>
    );
  }
}

export default Goat;
