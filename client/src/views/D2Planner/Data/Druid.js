const DRUID_SKILLS = [
  {
    id: "t1r1c1",
    name: "Firestorm",
    description: "Three weaving trails of fire that seek out enemies for a short distance",
  },
  {
    id: "t1r2c1",
    name: "Molten Boulder",
    description: "Lunges a huge molten boulder at a group of foes",
  },
  {
    id: "t1r2c3",
    name: "Arctic Blast",
    description: "A spout of ice that freezes your enemies",
  },
  {
    id: "t1r3c1",
    name: "Fissure",
    description: "Attacks an area by opening a hole in the earth and damaging anything near it",
  },
  {
    id: "t1r3c3",
    name: "Cyclone Armor",
    description: "Covers the druid in protective forces that absorb elemental attacks",
  },
  {
    id: "t1r4c2",
    name: "Twister",
    description: "Summons three small twisters that deal damage and stun enemies",
  },
  {
    id: "t1r5c1",
    name: "Volcano",
    description: "Creates a mini volcano that spurts out fireballs",
  },
  {
    id: "t1r5c2",
    name: "Tornado",
    description: "Casts a larger whirlwind to damage your foes",
  },
  {
    id: "t1r6c1",
    name: "Armageddon",
    description: "Small meteors fall from the sky around the Druid",
  },
  {
    id: "t1r6c2",
    name: "Hurricane",
    description: "Manipulates a strong force of wind to surround your character",
  },
  {
    id: "t2r1c1",
    name: "Werewolf",
    description: "Transforms the Druid into a Werewolf",
  },
  {
    id: "t2r1c2",
    name: "Lycanthropy",
    description: "Increases the Life of the Druid while Shapeshifted, as well as the duration of the transformation",
  },
  {
    id: "t2r2c3",
    name: "Werebear",
    description: "Transforms the Druid into a Werebear",
  },
  {
    id: "t2r3c1",
    name: "Feral Rage",
    description: "Leeches life from enemies, getting stronger with each attack",
  },
  {
    id: "t2r3c3",
    name: "Maul",
    description: "Mauls an enemy, building more strength with each hit",
  },
  {
    id: "t2r4c1",
    name: "Rabies",
    description: "Toxifies your touch, poisoning anything that you attack",
  },
  {
    id: "t2r4c2",
    name: "Fire Claws",
    description: "Augments your paws with fire damage",
  },
  {
    id: "t2r5c2",
    name: "Hunger",
    description: "Attack an enemy, leeching both life and mana",
  },
  {
    id: "t2r5c3",
    name: "Shockwave",
    description: "Let loose a roar that stuns surrounding enemies",
  },
  {
    id: "t2r6c1",
    name: "Fury",
    description: "Viciously attack nearby enemies",
  },
  {
    id: "t3r1c2",
    name: "Raven",
    description: "Summon Ravens to peck out the eyes of your enemies",
  },
  {
    id: "t3r1c3",
    name: "Poison Creeper",
    description: "Summons a poisonous vine that attacks enemies from underground",
  },
  {
    id: "t3r2c1",
    name: "Oak Sage",
    description: "Summons a spirit that increases your party's health",
  },
  {
    id: "t3r2c2",
    name: "Summon Spirit Wolf",
    description: "Summons a spirit wolf to attack your enemies",
  },
  {
    id: "t3r3c3",
    name: "Carrion Vine",
    description: "Summons a vine that eats corpses and gives the Druid life",
  },
  {
    id: "t3r4c1",
    name: "Heart of Wolverine",
    description: "Summons a spirit to increase the party's Damage and Attack Rating",
  },
  {
    id: "t3r4c2",
    name: "Summon Dire Wolf",
    description: "Summons a Dire Wolf to attack your enemies",
  },
  {
    id: "t3r5c3",
    name: "Solar Creeper",
    description: "Summons a vine that consumes corpses and grants the Druid mana",
  },
  {
    id: "t3r6c1",
    name: "Spirit of Barbs",
    description: "Summons a spirit that reflects damage back at attackers",
  },
  {
    id: "t3r6c2",
    name: "Summon Grizzly",
    description: "Summons a Grizzly bear to attack your enemies",
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
