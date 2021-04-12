import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Tooltip = ({ skill, style, level }) => {
  const info = skill[0].data;
  const { name, description, dependencies } = skill[0];
  const INFO_JSX = [];
  const DEPENDENCIES_JSX = [];
  if (level !== 0) {
    INFO_JSX.push(<p>{`Current Skill level: ${level}`}</p>);

    for (let inf in info) {
      if (typeof info[inf] === "function") {
        INFO_JSX.push(<p>{`${inf}: ${info[inf](level)}`}</p>);
      } else {
        INFO_JSX.push(<p>Mana Cost: { info[inf] }</p>);
      }
    }
  }

  INFO_JSX.push(<p>{`Next Skill level: ${level + 1}`}</p>);
  for (let inf in info) {
    if (typeof info[inf] === "function") {
      INFO_JSX.push(<p>{`${inf}: ${info[inf](level+1)}`}</p>)
    }
  }

  for (let d in dependencies) {
      let text = dependencies[d].description.replace("{V}", dependencies[d].value);
      DEPENDENCIES_JSX.push(<p>{`${dependencies[d].name}: ${text}`}</p>);
  }


  return (
    <div id="tooltip" style={style}>
      <h2>{ name }</h2>
      <div>
        <p>{ description }</p>
      </div>
      <div>

        <p>{ INFO_JSX }</p>
      </div>
      { dependencies && (
          <>
            <h2>{ name } Receives Bonuses From:</h2>
            <p>{ DEPENDENCIES_JSX }</p>
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
