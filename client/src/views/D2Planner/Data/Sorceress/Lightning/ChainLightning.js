const ChainLightning = {
  id: "t2r4c2",
  name: "Chain Lightning",
  description: "Casts a lightning bolt that jumps through multiple targets",
  data: {
    "Damage": function(slvl) {
      if (slvl === 0) return 0;
      if (slvl < 9) return `1-${11*slvl + 29}`;
      if (slvl < 17) return `$1-${13*slvl + 13}`;
      return `1-${15*slvl - 19}`;
    },
    "Mana Cost": function(slvl) {
      if (slvl === 0) return 0;
      return 8 + slvl;
    },
    "Hits": function(slvl) {
      if (slvl === 0) return 0;
      return `${Math.floor((25+slvl) / 5)} Hits`;
    }
  },
  dependencies: [
    {
      name: "Charged Bolt",
      description: "+{V}% Lightning Damage per level",
      value: 4
    },
    {
      name: "Nova",
      description: "+{V}% Lightning Damage per level",
      value: 4
    },
    {
      name: "Lightning",
      description: "+{V}% Lightning Damage per level",
      value: 4
    }
  ]
};

export default ChainLightning;
