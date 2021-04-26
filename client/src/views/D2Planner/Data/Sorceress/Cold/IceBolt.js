const IceBolt = {
  id: "t3r1c2",
  name: "Ice Bolt",
  description: "Shoots a bolt of ice that damages and slows your victim",
  data: {
    "Damage": function(slvl) {
      if (slvl === 0) return 0;
      if (slvl < 9) return `${slvl + 2}-${Math.floor(1.5*slvl + 3.5)}`;
      if (slvl < 17) return `${2 * slvl - 6}-${Math.floor(2.5*slvl - 4.5)}`;
      if (slvl < 23) return `${3 * slvl - 22}-${Math.floor(3.5*slvl - 20.5)}`;
      if (slvl < 29) return `${4 * slvl - 44}-${4*slvl - 44}`;
      return `${5 * slvl - 72}-${5*slvl - 72}`;
    },
    "Cold Duration": function(slvl) {
      if (slvl === 0) return 0;
      return `${(35*slvl + 115) / 25} seconds`;
    },
    "Mana Cost": () => 3
  },
  dependencies: [
      {
        id: "t3r2c1",
        name: "Frost Nova",
        description: "+{V}% Cold Damage per level",
        value: 15
      },
      {
        id: "t3r2c2",
        name: "Ice Blast",
        description: "+{V}% Cold Damage per level",
        value: 15
      },
      {
        id: "t3r4c2",
        name: "Glacial Spike",
        description: "+{V}% Cold Damage per level",
        value: 15
      },
      {
        id: "t3r5c1",
        name: "Blizzard",
        description: "+{V}% Cold Damage per level",
        value: 15
      },
      {
        id: "t3r6c1",
        name: "Frozen Orb",
        description: "+{V}% Cold Damage per level",
        value: 15
      },
    ]
};

export default IceBolt;
