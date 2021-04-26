const ColdMastery = {
  id: "t3r6c2",
  name: "Cold Mastery",
  description: "Pierces the cold resistance of your enemies",
  data: {
    "Reduced Enemy Cold Resistance": function(slvl) {
      if (slvl === 0) return 0;
      return `${15 + (5*slvl)}%`;
    },
  },
  dependencies: []
};

export default ColdMastery;
