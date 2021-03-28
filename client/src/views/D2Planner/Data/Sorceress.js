const SORCERESS_SKILLS = [
  {
    id: "t1r1c1",
    name: "Jab",
    description: "Attack with a series of rapid thrusts using a javelin or spear class weapon",
  }
];

const SORCERESS_SKILL_TREE_NAMES = [
    { short: "cold", name: "Cold Spells"},
    { short: "lightning", name: "Lightning Spells"},
    { short: "fire", name: "Fire Spells"}
]

const COLD = [
  [0, 1, 1],
  [1,"t1r1c2", 0],
  [0, 0, "t1r1c3"],
  [0, "t1r2c2", 0],
  ["t1r2c1.t1r4c2", 0, "t1r3c3"],
  ["t1r5c1", 1, 0]
];

const LIGHTNING = [
  [0, 1, 0],
  [1, 0, 1],
  ["t2r2c1", "t2r1c2", 0],
  [0, "t2r3c2", "t2r2c3"],
  ["t2r3c1.t2r4c2", 0, "t2r4c2.t2r4c3"],
  [0, 1, 0]
];

const FIRE = [
  [0, 1, 1],
  [1, 0, 0],
  ["t3r2c1", "t3r1c2", 0],
  ["t3r3c1", 0, "t3r1c3"],
  [0, "t3r4c1.t3r3c2", 0],
  [0, 1, "t3r4c3"]
];

const SORCERESS_SKILL_TREES = [COLD, LIGHTNING, FIRE];

export {
    SORCERESS_SKILLS,
    SORCERESS_SKILL_TREES,
    SORCERESS_SKILL_TREE_NAMES
};
