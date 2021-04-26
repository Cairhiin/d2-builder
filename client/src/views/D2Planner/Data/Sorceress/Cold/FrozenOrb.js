const FrozenOrb = {
  id: "t3r6c1",
  name: "Frozen Orb",
  description: "A pulsating orb that shreds an area with ice bolts",
  data: {
    "Damage": function(slvl) {
      if (slvl === 0) return 0;
      if (slvl < 9) return `${15*slvl + 30}-${16*slvl + 59}`;
      if (slvl < 17) return `${30*slvl - 90}-${31*slvl - 61}`;
      if (slvl < 23) return `${45*slvl - 330}-${46*slvl - 301}`;
      if (slvl < 29) return `${55*slvl - 550}-${56*slvl - 521}`;
      return `${65*slvl - 830}-${66*slvl - 801}`;
    },
    "Duration": () => 4,
    "Cold Duration": function(slvl) {
      return (175 + (25*slvl)) / 25;
    },
    "Mana Cost": function(slvl) {
      if (slvl === 0) return 0;
      return 24.5 + (0.5*slvl);
    }
  },
  dependencies: [
      {
        name: "Ice Bolt",
        description: "+{V}% Cold Damage per level",
        value: 2
      }
    ]
};

export default FrozenOrb;
