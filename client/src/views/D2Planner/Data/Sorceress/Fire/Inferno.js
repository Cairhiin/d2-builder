const Inferno = {
  id: "t1r2c1",
  name: "Inferno",
  description: "Creates a spout of flame that burns the enemies",
  data: {
    "Damage": function(slvl, dlvl=[0]) {
      let dmgMultiplier = dlvl[0] * Inferno.dependencies[0].value;
      dmgMultiplier = Math.round((dmgMultiplier / 100 + 1)*100) / 100;
      let min = 144*slvl - 960;
      let max = 144*slvl - 864;
      if (slvl < 29) { min = 128*slvl - 512; max = 132*slvl - 416 }
      if (slvl < 23) { min = 112*slvl - 160; max = 116*slvl - 64 }
      if (slvl < 17) { min = 104*slvl - 32; max = 108*slvl + 64 }
      if (slvl < 9) { min = 96*slvl + 32; max = 96*slvl + 160 }
      return { min: dmgMultiplier*(min), max: dmgMultiplier*(max) };
    },
    "Mana Cost": slvl => Math.floor((35+slvl) * 25/128),
    "Range": slvl => Math.floor(((17 + (3*slvl) ) / 4) * 2/3)
  },
  dependencies: [
      {
        id: "t1r3c2",
        name: "Warmth",
        description: "+{V}% Fire Damage per level",
        value: 13
      }
    ]
};

export default Inferno;
