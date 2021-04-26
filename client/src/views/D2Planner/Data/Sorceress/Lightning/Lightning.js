const Lightning = {
  id: "t2r3c2",
  name: "Lightning",
  description: "Casts a bolt of lightning",
  data: {
    "Damage": function(slvl) {
      if (slvl === 0) return 0;
      if (slvl < 9) return `1-${8*slvl + 32}`;
      if (slvl < 17) return `$1-${12*slvl}`;
      if (slvl < 23) return `1-${20*slvl - 128}`;
      if (slvl < 29) return `1-${28*slvl - 304}`;
      return `1-${36*slvl - 528}`;
    },
    "Mana Cost": function(slvl) {
      if (slvl === 0) return 0;
      return 7.5 + (0.5*slvl);
    }
  },
  dependencies: [
    {
      name: "Charged Bolt",
      description: "+{V}% Lightning Damage per level",
      value: 8
    },
    {
      name: "Nova",
      description: "+{V}% Lightning Damage per level",
      value: 8
    },
    {
      name: "Chain Lightning",
      description: "+{V}% Lightning Damage per level",
      value: 8
    }
  ]
};

export default Lightning;
