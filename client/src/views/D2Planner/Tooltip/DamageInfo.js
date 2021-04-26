import React from 'react';

const DamageInfo = ({ label, damage }) => {
  return (
    <div>
      { `${label}: ${ Math.round(damage["min"])}-${ Math.round(damage["max"])}`}
    </div>
  );
};

export default DamageInfo;
