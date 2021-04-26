const Nova = {
  id: "t2r3c1",
  name: "Nova",
  description: "Creates an expanding ring of electricity",
  data: {
    "Damage": function(slvl) {
      if (slvl === 0) return 0;
      if (slvl < 9) return `${6 * slvl - 5}-${Math.floor(8*slvl + 12)}`;
      if (slvl < 17) return `${7 * slvl - 13}-${Math.floor(9*slvl + 4)}`;
      if (slvl < 23) return `${8 * slvl - 29}-${Math.floor(10*slvl - 12)}`;
      if (slvl < 29) return `${9 * slvl - 51}-${11*slvl - 34}`;
      return `${10 * slvl - 79}-${12*slvl - 62}`;
    },
    "Mana Cost": () => 15
  },
  dependencies: []
};

export default Nova;
