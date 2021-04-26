const Blizzard = {
  id: "t3r5c1",
  name: "Blizzard",
  description: "Summons an ice storm to rain cold death onto your enemies",
  data: {
    "Damage": function(slvl, dlvl=[0, 0, 0]) {
      let dmgMultiplier = dlvl[0] * Blizzard.dependencies[0].value;
      dmgMultiplier = Math.round((dmgMultiplier / 100 + 1)*100) / 100;
      if (slvl < 9) return { min: dmgMultiplier*(15*slvl + 30), max: dmgMultiplier*(16*slvl + 59) };
      if (slvl < 17) return { min: dmgMultiplier*(30*slvl - 90), max: dmgMultiplier*(31*slvl - 61) };
      if (slvl < 23) return { min: dmgMultiplier*(45*slvl - 330), max: dmgMultiplier*(46*slvl - 301) };
      if (slvl < 29) return { min: dmgMultiplier*(55*slvl - 550), max: dmgMultiplier*(56*slvl - 521) };
      return { min: dmgMultiplier*(65*slvl - 830), max: dmgMultiplier*(66*slvl - 801) };
    },
    "Duration": () => 4,
    "Cold Duration": () => 4,
    "Mana Cost": slvl  => 23 + slvl - 1
  },
  dependencies: [
      {
        name: "Ice Bolt",
        description: "+{V}% Cold Damage per level",
        value: 5
      },
      {
        name: "Glacial Spike",
        description: "+{V}% Cold Damage per level",
        value: 5
      },
      {
        name: "Ice Blast",
        description: "+{V}% Cold Damage per level",
        value: 5
      }
    ]
};

export default Blizzard;
