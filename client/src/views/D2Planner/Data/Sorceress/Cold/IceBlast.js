const IceBlast = {
  id: "t3r2c2",
  name: "Ice Blast",
  description: "Creates a bolt of ice that completely freezes a target",
  data: {
    "Damage": function(slvl) {
      if (slvl === 0) return 0;
      if (slvl < 9) return `${7*slvl + 1}-${Math.floor(7.5*slvl + 4.5)}`;
      if (slvl < 17) return `${14*slvl - 55}-${Math.floor(14.5*slvl - 51.5)}`;
      if (slvl < 23) return `${21*slvl - 167}-${Math.floor(21.5*slvl - 163.5)}`;
      if (slvl < 29) return `${28*slvl - 321}-${Math.floor(28.5*slvl - 317.5)}`;
      return `${35*slvl - 517}-${Math.floor(35.5*slvl - 513.5)}`;
    },
    "Freeze Duration": function(slvl) {
      if (slvl === 0) return 0;
      return `${(70 + (5*slvl)) / 25} seconds`;
    },
    "Mana Cost": slvl => 5.5 + (0.5*slvl)
  },
  dependencies: [
      {
        name: "Blizzard",
        description: "+{V}% Cold Damage per level",
        value: 10
      },
      {
        name: "Frozen Orb",
        description: "+{V}% Cold Damage per level",
        value: 10
      },
    ]
};

export default IceBlast;
