const ThunderStorm = {
  id: "t2r5c1",
  name: "Thunderstorm",
  description: "Summons a thunderstorm that periodically blasts a nearby enemy with a bolt of lightning",
  data: {
    "Damage": function(slvl) {
      if (slvl === 0) return 0;
      if (slvl < 17) return `${10 * slvl - 9}-${10*slvl + 90}`;
      return `${11 * slvl - 25}-${11*slvl + 74}`;
    },
    "Mana Cost": () => 19,
    "Duration": function(slvl) {
      if (slvl === 0) return 0;
      return `${24 + (8*slvl)} seconds`
    }
  },
  dependencies: []
};

export default ThunderStorm;
