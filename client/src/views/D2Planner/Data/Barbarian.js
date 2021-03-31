const BARBARIAN_SKILLS = [
  {
    id: "t1r1c1",
    name: "Howl",
    description: "Frightens monsters, causing them to run in fear",
  },
  {
    id: "t1r1c3",
    name: "Find Potion",
    description: "The Barbarian has a chance to procure a potion from a monster corpse",
  },
  {
    id: "t1r2c1",
    name: "Shout",
    description: "Increases the defense of allies",
  },
  {
    id: "t1r2c2",
    name: "Taunt",
    description: "Taunts a monster, compelling it to engage in melee combat with reduced damage",
  },
  {
    id: "t1r3c3",
    name: "Find Item",
    description: "Attempts to find a random item in a monster's corpse",
  },
  {
    id: "t1r4c1",
    name: "Battle Cry",
    description: "Lowers the nearby opponents' defense and damage",
  },
  {
    id: "t1r5c2",
    name: "Battle Orders",
    description: "Increases the nearby allies' Life, Stamina and Mana",
  },
  {
    id: "t1r5c3",
    name: "Grim Ward",
    description: "Turns a corpse into a gruesome ward, causing monsters to flee at the sight of it",
  },
  {
    id: "t1r6c1",
    name: "War Cry",
    description: "Damages and stuns enemies",
  },
  {
    id: "t1r6c2",
    name: "Battle Command",
    description: "Increases the Barbarian's and nearby allies' skills by one",
  },
  {
    id: "t2r1c1",
    name: "Sword Mastery",
    description: "Increased damage and Attack Rating when using swords",
  },
  {
    id: "t2r1c2",
    name: "Axe Mastery",
    description: "Increased damage and Attack Rating when using axes",
  },
  {
    id: "t2r1c3",
    name: "Mace Mastery",
    description: "Increased damage and Attack Rating when using maces",
  },
  {
    id: "t2r2c1",
    name: "Polearm Mastery",
    description: "Increased damage and Attack Rating when using polearms",
  },
  {
    id: "t2r2c2",
    name: "Throwing Mastery",
    description: "Increased damage and Attack Rating when throwing a weapon",
  },
  {
    id: "t2r2c3",
    name: "Spear Mastery",
    description: "Increased damage and Attack Rating when using spears",
  },
  {
    id: "t2r3c1",
    name: "Increased Stamina",
    description: "Increases stamina, and stamina recovery rate",
  },
  {
    id: "t2r4c3",
    name: "Iron Skin",
    description: "Improves overall Defense",
  },
  {
    id: "t2r5c1",
    name: "Increased Speed",
    description: "Increases walk and run speeds",
  },
  {
    id: "t2r6c3",
    name: "Natural Resistance",
    description: "Increases resistances to Fire, Cold, Lightning and Poison damage",
  },
  {
    id: "t3r1c2",
    name: "Bash",
    description: "Attacks an enemy and knocks them back",
  },
  {
    id: "t3r2c1",
    name: "Leap",
    description: "Jumps into the air, knocking back foes at your landing point",
  },
  {
    id: "t3r2c3",
    name: "Double Swing",
    description: "Attack with both weapons, striking two enemies at once",
  },
  {
    id: "t3r3c2",
    name: "Stun",
    description: "Strike an enemy, temporarily stunning them",
  },
  {
    id: "t3r3c3",
    name: "Double Throw",
    description: "Throws both weapons outwards",
  },
  {
    id: "t3r4c1",
    name: "Leap Attack",
    description: "Leap at an enemy, striking them as you land, and knocking back surrounding foes",
  },
  {
    id: "t3r4c2",
    name: "Concentrate",
    description: "Attacks an enemy and raises concentration, temporarily increasing Defense",
  },
  {
    id: "t3r5c3",
    name: "Frenzy",
    description: "Every successful hit increases velocity and attack speed",
  },
  {
    id: "t3r6c1",
    name: "Whirlwind",
    description: "The Barbarian spins his weapons around him, striking everything in his path",
  },
  {
    id: "t3r6c2",
    name: "Berserk",
    description: "A powerful attack that leaves the Barbarian more vulnerable",
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
