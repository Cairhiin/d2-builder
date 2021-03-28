const PALADIN_SKILLS = [
  {
    id: "t1r1c1",
    name: "Jab",
    description: "Attack with a series of rapid thrusts using a javelin or spear class weapon",
  }
];

const PALADIN_SKILL_TREE_NAMES = [
    { short: "defensive", name: "Defensive Auras"},
    { short: "offensive", name: "Offensive Auras"},
    { short: "combat", name: "Combat Skills"}
]

const DEFENSIVE = [
  [1, 0, 1],
  [0, 1, 1],
  ["t1r1c1", 0, 1],
  [0, "t1r3c1.t1r2c2", 0],
  ["t1r3c1", 0, 0],
  [0, "t1r4c2", 1]
];

const OFFENSIVE = [
  [1, 0, 0],
  [0, "t2r1c1", 1],
  ["t2r1c1", 0, 0],
  ["t2r3c1", "t2r2c2", 0],
  [0, "t2r4c2", "t2r4c2.t2r2c3"],
  ["t2t4c1", 0, "t2r5c3"]
];

const COMBAT = [
  [1, 0, 1],
  [0, 1, 0],
  ["t3r1c1", 0, "t3r1c3"],
  ["t3r3c1", "t3r2c2", 0],
  ["t3r4c1", 0, "t3r4c2.t3r3c3"],
  [0, "t3r5c1.t3r4c2", 0]
];

const PALADIN_SKILL_TREES = [DEFENSIVE, OFFENSIVE, COMBAT];

export {
    PALADIN_SKILLS,
    PALADIN_SKILL_TREES,
    PALADIN_SKILL_TREE_NAMES
};
