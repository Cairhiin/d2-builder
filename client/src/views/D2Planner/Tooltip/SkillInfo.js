import React from 'react';
import DamageInfo from './DamageInfo';
import _ from 'lodash';

const SkillInfo = ({ skill, level, dependency }) => {
  let damageJSX = [];
  let specialInfoJSX = [];
  let special, specialName = "";
  if (level !== 0) {
    for (let inf in skill) {
      specialName = inf;
      const isDamage = specialName.includes("Damage") ? true : false;
      if (typeof skill[inf] === "function" && isDamage) {
        let damage = skill[inf](level, dependency);
        if (typeof damage === 'object' && !_.isEmpty(damage)) {
          damageJSX.push(
             <DamageInfo
               damage={damage}
               label={specialName}
             />
           );
         }
         // in case the function doesn't return a damage object, fe: Fire Mastery
         if (typeof damage !== 'object') {
           special = skill[inf](level, dependency);
           specialInfoJSX.push(<p>{`${specialName}: ${special}`}</p>)
         }
      }
      else if (typeof skill[inf] === "function") {
        special = skill[inf](level, dependency);
        specialInfoJSX.push(<p>{`${specialName}: ${special}`}</p>)
      }
    }
  }

  return (
    <div>
      { damageJSX.length > 0 && damageJSX }
      { specialInfoJSX.length > 0 && specialInfoJSX }
    </div>
  );
};

export default SkillInfo;
