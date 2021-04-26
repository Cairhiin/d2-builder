const FrostNova = {
  id: "t3r2c1",
  name: "Frost Nova",
  description: "Creates an expanding ring of ice and frost that damages and slows enemies",
  data: {
    "Damage": function(slvl) {
      if (slvl === 0) return 0;
      if (slvl < 9) return `${slvl + 2}-${Math.floor(2.5*slvl + 1.5)}`;
      if (slvl < 17) return `${3 * slvl - 8}-${Math.floor(3.5*slvl - 6.5)}`;
      if (slvl < 23) return `${4 * slvl - 24}-${Math.floor(4.5*slvl - 22.5)}`;
      if (slvl < 29) return `${5 * slvl - 46}-${Math.floor(5.5*slvl - 44.5)}`;
      return `${6 * slvl - 74}-${Math.floor(6.5*slvl - 72.5)}`;
    },
    "Cold Duration": function(slvl) {
      if (slvl === 0) return 0;
      return `${(175 + (25*slvl)) / 25} seconds`;
    },
    "Mana Cost": function(slvl) {
      if (slvl === 0) return 0;
      return 9 + (slvl - 1);
    }
  },
  dependencies: [
      {
        name: "Ice Bolt",
        description: "+{V}% Cold Damage per level",
        value: 8
      },
      {
        name: "Glacial Spike",
        description: "+{V}% Cold duration per level",
        value: 10
      },
      {
        name: "Blizzard",
        description: "+{V}% Cold Damage per level",
        value: 8
      },
      {
        name: "Frozen Orb",
        description: "+{V}% Cold Damage per level",
        value: 8
      },
    ]
};

export default FrostNova;
