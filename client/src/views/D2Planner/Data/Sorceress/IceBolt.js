const IceBolt = {
  id: "t1r1c2",
  name: "Ice Bolt",
  description: "Shoots a bolt of ice that damages and slows your victim",
  data: {
    "Damage": function(level) {
      if (level === 0) return 0;
      let min = 3;
      for (let i=2; i<=level; i++) {
        min = min + 1 + Math.floor((i - 1) / 8);
      }
      let max = min + 2 + Math.floor((level - 1) / 2);
      return `${min}-${max}`;
    },
    "Cold Duration": function(level) {
      if (level === 0) return 0;
      return (6 + (level - 1) * 1.4).toFixed(1);
    },
    mana: 3
  },
  dependencies: [
      {
        name: "Frost Nova",
        description: "+{V}% Cold Damage per level",
        value: 15
      },
      {
        name: "Ice Blast",
        description: "+{V}% Cold Damage per level",
        value: 15
      },
      {
        name: "Glacial Spike",
        description: "+{V}% Cold Damage per level",
        value: 15
      },
      {
        name: "Blizzard",
        description: "+{V}% Cold Damage per level",
        value: 15
      },
      {
        name: "Frozen Orb",
        description: "+{V}% Cold Damage per level",
        value: 15
      },
    ]
}

export default IceBolt;
