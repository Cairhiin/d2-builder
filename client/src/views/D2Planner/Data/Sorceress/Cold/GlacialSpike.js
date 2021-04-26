const GlacialSpike = {
  id: "t3r4c2",
  name: "Glacial Spike",
  description: "A shard of ice that inflicts massive cold damage and explodes to freeze nearby enemies",
  data: {
    "Damage": function(slvl) {
      if (slvl === 0) return 0;
      if (slvl < 9) return `${7*slvl + 9}-${Math.floor(7.5*slvl + 16.5)}`;
      if (slvl < 17) return `${13*slvl - 39}-${Math.floor(13.5*slvl - 31.5)}`;
      if (slvl < 23) return `${14*slvl - 55}-${Math.floor(14.5*slvl - 47.5)}`;
      if (slvl < 29) return `${15*slvl - 77}-${Math.floor(15.5*slvl - 69.5)}`;
      return `${16*slvl - 105}-${Math.floor(16.5*slvl - 97.5)}`;
    },
    "Freeze Duration": function(slvl) {
      if (slvl === 0) return 0;
      return (47 + 3*slvl) / 25;
    },
    "Mana Cost": function(slvl) {
      if (slvl === 0) return 0;
      return 9.5 + 0.5*slvl;
    }
  },
  dependencies: [
      {
        name: "Ice Bolt",
        description: "+{V}% Cold Damage per level",
        value: 5
      },
      {
        name: "Ice Blast",
        description: "+{V}% Cold Damage per level",
        value: 5
      },
      {
        name: "Blizzard",
        description: "+{V}% Cold duration per level",
        value: 3
      },
      {
        name: "Frozen Orb",
        description: "+{V}% Cold Damage per level",
        value: 5
      },
    ]
};

export default GlacialSpike;
