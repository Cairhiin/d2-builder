const ShiverArmor = {
  id: "t3r3c3",
  name: "Shiver Armor",
  description: "The Sorceress enchants a Armor of cold, granting a defense bonus, as well as slowing and damaging any melee attackers",
  data: {
    "Bonus Defense": function(slvl) {
      if (slvl === 0) return 0;
      return `+${39 + (6*slvl)}%`;
    },
    "Duration": function(slvl) {
      if (slvl === 0) return 0;
      return `${(120 + (slvl - 1) * 12)} seconds`;
    },
    "Damage": function(slvl) {
      if (slvl === 0) return 0;
      if (slvl < 9) return `${2*slvl + 4}-${Math.floor(2.5*slvl + 5.5)}`;
      if (slvl < 17) return `${3*slvl - 4}-${Math.floor(3.5*slvl - 2.5)}`;
      if (slvl < 23) return `${4*slvl - 20}-${Math.floor(4.5*slvl - 18.5)}`;
      if (slvl < 29) return `${5*slvl - 42}-${Math.floor(5.5*slvl - 40.5)}`;
      return `${6*slvl - 70}-${Math.floor(6.5*slvl - 68.5)}`;
    },
    "Cold Duration": () => 4,
    "Mana Cost": () => 11
  },
  dependencies: [
      {
        name: "Frozen Armor",
        description: "+{V} seconds per level",
        value: 10
      },
      {
        name: "Frozen Armor",
        description: "+{V}% Cold damage per level",
        value: 9
      },
      {
        name: "Chilling Armor",
        description: "+{V} seconds per level",
        value: 10
      },
      {
        name: "Chilling Armor",
        description: "+{V}% Cold damage per level",
        value: 9
      }
    ]
};

export default ShiverArmor;
