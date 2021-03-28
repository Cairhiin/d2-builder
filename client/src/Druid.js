const DRUID_SKILLS = [
  {
    id: "t1r1c1",
    name: "Jab",
    description: "Attack with a series of rapid thrusts using a javelin or spear class weapon",
  }
];

const DRUID_SKILL_TREE_NAMES = [
    { short: "elemental", name: "Elemental Skills"},
    { short: "shapeshifting", name: "Shapeshifting Skills"},
    { short: "summoning", name: "Summoning Skills"}
]

const ELEMENTAL = [
  [1, 0, 0],
  ["t1r1c1", 0, 1],
  ["t1r2c1", 0, "t1r2c3"],
  [0, "t1r3c3", 0],
  ["t1r3c1", "t1r4c2", 0],
  ["t1r5c1.t1r6c2", "t1r5c2", 0]
];

const SHAPESHIFTING = [
  [1, "t2r1c1", 0],
  [0, 0, 1],
  ["t2r1c1", 0, "t2r2c3"],
  ["t2r3c1", "t2r3c1.t2r3c3", 0],
  [0, "t2r4c2", "t2r3c3"],
  ["t2r4c1", 0, 0]
];

const SUMMONING = [
  [0, 1, 1],
  [1, "t3r1c2", 0],
  [0, 0, "t3r1c3"],
  ["t3r2c1", "t3r2c1.t3r2c2", 0],
  [0, 0, "t3r3c3"],
  ["t3r4c1", "t3r4c2", 0]
];

const DRUID_SKILL_TREES = [ELEMENTAL, SHAPESHIFTING, SUMMONING];

export {
    DRUID_SKILLS,
    DRUID_SKILL_TREES,
    DRUID_SKILL_TREE_NAMES
};
