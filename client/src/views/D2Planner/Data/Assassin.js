const ASSASSIN_SKILLS = [
  {
    id: "t1r1c2",
    name: "Tiger Strike",
    description: "Attacks an enemy and stores a charge",
  },
  {
    id: "t1r1c3",
    name: "Dragon Talon",
    description: "Attacks an enemy with a flurry of kicks",
  },
  {
    id: "t1r2c1",
    name: "Fists of Fire",
    description: "A fire attack that deals more damage with each charge",
  },
  {
    id: "t1r2c3",
    name: "Dragon Claw",
    description: "Attack an enemy with both weapons simultaneously",
  },
  {
    id: "t1r3c2",
    name: "Cobra Strike",
    description: "An attack that drains life and mana from the victim",
  },
  {
    id: "t1r4c1",
    name: "Claws of Thunder",
    description: "An attack that deals lightning damage and stores a charge",
  },
  {
    id: "t1r4c3",
    name: "Dragon Tail",
    description: "A powerful kick that explodes on impact",
  },
  {
    id: "t1r5c1",
    name: "Blades of Ice",
    description: "An attack that chills an enemy",
  },
  {
    id: "t1r5c3",
    name: "Dragon Flight",
    description: "Teleports to an enemy and kicks it",
  },
  {
    id: "t1r6c2",
    name: "Phoenix Strike",
    description: "A finishing move that deals fire, lightning and cold damage all at once",
  },
  {
    id: "t2r1c2",
    name: "Claw Mastery",
    description: "Increase combat efficiency with claw-type weapons",
  },
  {
    id: "t2r1c3",
    name: "Psychic Hammer",
    description: "Attacks an enemy with a mental blast",
  },
  {
    id: "t2r2c1",
    name: "Burst of Speed",
    description: "Increases Attack and Movement Speed for a period of time",
  },
  {
    id: "t2r3c2",
    name: "Weapon Block",
    description: "Allows an Assassin to Block when using two claw-type weapons",
  },
  {
    id: "t2r3c3",
    name: "Cloak of Shadows",
    description: "Hides the Assassin, allowing her to attack with greater accuracy",
  },
  {
    id: "t2r4c1",
    name: "Fade",
    description: "Partially phases the Assassin to another plane allowing her to avoid some magical attacks",
  },
  {
    id: "t2r4c2",
    name: "Shadow Warrior",
    description: "Summons a 'shadow' of the Assassin to fight along side her",
  },
  {
    id: "t2r5c3",
    name: "Mind Blast",
    description: "Mentally attacks surrounding enemies, confusing some and stunning others",
  },
  {
    id: "t2r6c1",
    name: "Venom",
    description: "Poisons the Assassin's weapons",
  },
  {
    id: "t2r6c2",
    name: "Shadow Master",
    description: "Calls upon a spectral shadow of the Assassin to aid her in combat",
  },
  {
    id: "t3r1c2",
    name: "Fire Blast",
    description: "Creates a small bomb the Assassin can throw",
  },
  {
    id: "t3r2c1",
    name: "Shock Web",
    description: "Drops a small trap that deals lightning damage to anything nearby",
  },
  {
    id: "t3r2c3",
    name: "Blade Sentinel",
    description: "Throws a razor sharp blade that flies back and forth between the Assassin and her target",
  },
  {
    id: "t3r3c1",
    name: "Charged Bolt Sentry",
    description: "Medium Assassin trap that fires Charged Bolt attacks",
  },
  {
    id: "t3r3c2",
    name: "Wake of Fire",
    description: "The Assassin drops a trap at her location that sends out small waves of fire around it, dealing damage to enemies caught in the waves",
  },
  {
    id: "t3r4c3",
    name: "Blade Fury",
    description: "Fires a blade swiftly at an enemy",
  },
  {
    id: "t3r5c1",
    name: "Lightning Sentry",
    description: "Drops a trap that shoots lightning at nearby foes",
  },
  {
    id: "t3r5c2",
    name: "Wake of Inferno",
    description: "Drops a trap that shoots a large blast of fire",
  },
  {
    id: "t3r6c1",
    name: "Death Sentry",
    description: "Drops a modified Lightning Sentry that also Corpse Explodes",
  },
  {
    id: "t3r6c3",
    name: "Blade Shield",
    description: "Covers the Assassin in a shield of small razors",
  }
];

const ASSASSIN_SKILL_TREE_NAMES = [
    { short: "martial", name: "Martial Arts"},
    { short: "shadow", name: "Shadow Disciplines"},
    { short: "traps", name: "Traps"}
]

const MARTIAL = [
  [0, 1, 1],
  [1, 0, "t1r1c3"],
  [0, "t1r1c1", 0],
  ["t1r2c1", 0, "t1r2c3"],
  ["t1r4c1", 0, "t1r4c3"],
  [0, "t1r5c1.t1r3c2", 0]
];

const SHADOW = [
  [0, 1, 1],
  ["t2r1c2", 0, 0],
  [0, "t2r1c2", "t2r1c3"],
  ["t2r2c1", "t2r3c2", 0],
  [0, 0, "t2r3c3"],
  ["t2r4c1", "t2r4c2", 0]
];

const TRAPS = [
  [0, 1, 0],
  ["t3r1c2", 0, 1],
  ["t3r1c1", "t3r1c2", 0],
  [0, 0, "t3r2c3.t3r3c2"],
  ["t3r3c1", "t3r3c2", 0],
  ["t3r5c1", 0, "t3r4c3"]
];

const ASSASSIN_SKILL_TREES = [MARTIAL, SHADOW, TRAPS];

export {
    ASSASSIN_SKILLS,
    ASSASSIN_SKILL_TREES,
    ASSASSIN_SKILL_TREE_NAMES
};
