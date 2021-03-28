import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Tooltip = ({ skill, style }) => {
  console.log(skill)
  const { name, description, nextLevel, bonuses } = skill[0];
  return (
    <div id="tooltip" style={style}>
      <h2>{ name }</h2>
      <p>{ description }</p>
      <p>{ nextLevel }</p>
      { bonuses && (
          <>
            <h2>Receives Bonuses From:</h2>
            <p>{ bonuses }</p>
          </>
        )
      }
    </div>
  )
}

Tooltip.propTypes = {
  skill: PropTypes.array
};

export default Tooltip;
