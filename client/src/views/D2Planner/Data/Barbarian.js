const BARBARIAN_SKILLS = [
  {
    id: "t1r1c1",
    name: "Jab",
    description: "Attack with a series of rapid thrusts using a javelin or spear class weapon",
  }
];

const BARBARIAN_SKILL_TREE_NAMES = [
    { short: "warcries", name: "Warcries"},
    { short: "masteries", name: "Combat Masteries"},
    { short: "combat", name: "Combat Skills"}
]

const WARCRIES = [
  [1, 0, 1],
  ["t1r1c1","t1r1c1", 0],
  [0, 0, "t1r1c3"],
  ["t1r2c1", 0, 0],
  [0, "t1r2c2", "t1r3c3"],
  ["t1r4c1.t1r5c2", "t1r5c2", 0]
];

const MASTERIES = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 0, 0],
  [0, 0, 1],
  ["t2r3c1", 0, 0],
  [0, 0, "t2r4c3"]
];

const COMBAT = [
  [0, 1, 0],
  [1, 0, "t3r1c2"],
  [0, "t3r1c2", "t3r2c3"],
  ["t3r2c1", "t3r3c2", 0],
  [0, 0, "t3r3c3"],
  ["t3r4c1.t3r4c2", "t3r4c2", 0]
];

const BARBARIAN_SKILL_TREES = [WARCRIES, MASTERIES, COMBAT];

export {
    BARBARIAN_SKILLS,
    BARBARIAN_SKILL_TREES,
    BARBARIAN_SKILL_TREE_NAMES
};
