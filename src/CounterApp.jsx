import React from 'react';
import PropTypes from 'prop-types';

const handleAdd = (event) => {
  console.log('+1')
  value = 1000;
}

export const CounterApp = ({value}) => {


  return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>

        <button onClick={ handleAdd }>
            +1
        </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number,
};

