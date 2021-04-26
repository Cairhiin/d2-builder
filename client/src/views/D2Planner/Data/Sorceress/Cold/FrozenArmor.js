const FrozenArmor = {
  id: "t3r1c3",
  name: "Frozen Armor",
  description: "Gives a defense bonus and freezes any melee attacker that hits you",
  data: {
    "Bonus Defense": function(slvl) {
      if (slvl === 0) return 0;
      return `+${30 + (slvl - 1) * 5}%`;
    },
    "Duration": function(slvl) {
      if (slvl === 0) return 0;
      return `${(120 + (slvl - 1) * 12)} seconds`;
    },
    "Freeze Duration": function(slvl) {
      if (slvl === 0) return 0;
      return `${Math.floor(((27 + (3*slvl)) / 25) * 10) / 10} seconds`;
    },
    "Mana Cost": () => 3
  },
  dependencies: [
      {
        name: "Shiver Armor",
        description: "+{V} seconds per level",
        value: 10
      },
      {
        name: "Shiver Armor",
        description: "+{V}% Cold duration per level",
        value: 5
      },
      {
        name: "Chilling Armor",
        description: "+{V} seconds per level",
        value: 10
      },
      {
        name: "Chilling Armor",
        description: "+{V}% Cold duration per level",
        value: 5
      }
    ]
};

export default FrozenArmor;
