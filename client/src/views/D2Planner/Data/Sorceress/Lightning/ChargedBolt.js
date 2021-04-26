const ChargedBolt = {
  id: "t2r1c2",
  name: "Charged Bolt",
  description: "Fires multiple jumping bolts of electricity that seek their targets",
  data: {
    "Damage": function(slvl) {
      if (slvl === 0) return 0;
      if (slvl < 17) return `${Math.floor(0.5*slvl + 1.5)}-${Math.floor(7.5*slvl + 4.5)}`;
      if (slvl < 23) return `${Math.floor(slvl - 6.5)}-${Math.floor(slvl - 4.5)}`;
      if (slvl < 29) return `${Math.floor(1.5*slvl - 17.5)}-${Math.floor(1.5*slvl - 15.5)}`;
      return `${Math.floor(2*slvl - 31.5)}-${Math.floor(2*slvl - 29.5)}`;
    },
    "Number of Bolts": function(slvl) {
      if (slvl === 0) return 0;
      return Math.min(2 + slvl, 24);
    },
    "Mana Cost": function(slvl) {
      return 2.5 + (0.5*slvl);
    }
  },
  dependencies: [
      {
        name: "Lightning",
        description: "+{V}% Lightning Damage per level",
        value: 6
      }
    ]
};

export default ChargedBolt;
