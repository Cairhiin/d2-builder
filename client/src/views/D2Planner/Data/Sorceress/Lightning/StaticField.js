const StaticField = {
  id: "t2r2c1",
  name: "Static Field",
  description: "Every enemy in a radius around you loses 25% of their current health",
  data: {
    "Radius": function(slvl) {
      if (slvl === 0) return 0;
      return `${Math.floor((4+slvl) * 2/3)} yards`;
    },
    "Mana Cost": () => 9
  },
  dependencies: []
};

export default StaticField;
