const Telekinesis = {
  id: "t2r2c3",
  name: "Telekinesis",
  description: "Allows you to pick up items, trigger objects, and attack others at a distance",
  data: {
    "Damage": function(slvl) {
      if (slvl === 0) return 0;
      return `${slvl}-${slvl+1}`;
    },
    "Mana Cost": () => 7
  },
  dependencies: []
};

export default Telekinesis;
