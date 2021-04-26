const EnergyShield = {
  id: "t2r5c3",
  name: "Energy Shield",
  description: "Absorbs magical and some physical damage to Mana instead of Life",
  data: {
    "Mana Cost": () => 5,
    "Duration": function(slvl) {
      if (slvl === 0) return 0;
      return `${84 + (60*slvl)} seconds`
    },
    "Damage Absorb": function(slvl) {
      if (slvl === 0) return 0;
      if (slvl < 9) return `${15 + 5*slvl}%`;
      if (slvl < 17) return `${39 + 2*slvl}%`;
      if (slvl < 29) return `${55 + slvl}%`;
      return `${Math.min(55+slvl , 95)}%`;
    },
  },
  dependencies: []
};

export default EnergyShield;
