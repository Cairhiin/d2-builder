const Teleport = {
  id: "t2r4c3",
  name: "Teleport",
  description: "Instantly transports you between two points",
  data: {
    "Mana Cost": function(slvl) {
      if (slvl === 0) return 0;
      return Math.max(25-slvl, 1);
    }
  },
  dependencies: [
    {
      name: "Telekinesis"
    }
  ]
};

export default Teleport;
