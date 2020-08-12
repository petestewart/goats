import React from 'react';
import './goat.scss';
import goatShape from '../../App/helpers/propTypes/goatShape'
import PropTypes from 'prop-types';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    takeAGoat: PropTypes.func,
    freeAGoat: PropTypes.func,
  }

  takeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, takeAGoat } = this.props;
    takeAGoat(goat.id);
  }

  freeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, freeAGoat } = this.props;
    freeAGoat(goat.id);
  }

  render() {
    const { goat } = this.props;

    return (
      <div className={`card ${goat.isTaken ? 'taken' : 'free'}`}>
        <img className="card-img-top" src={goat.imgUrl} alt="one goat" />
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">This goat is {goat.age} years old and is descibed as {goat.description}</p>
        </div>
        <div className="card-footer">
          {
            goat.isTaken ? (
              <button onClick={this.freeGoatEvent}>FREE THE GOAT</button>
            ) : (
              <button onClick={this.takeGoatEvent}>TAKE THE GOAT</button>
            )
          }
        </div>
      </div>
    );
  }
}

export default Goat;
