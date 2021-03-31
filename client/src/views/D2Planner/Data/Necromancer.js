const NECROMANCER_SKILLS = [
  {
    id: "t1r1c1",
    name: "Raise Skeleton",
    description: "Raise an undead warrior from a corpse to fight for you",
  },
  {
    id: "t1r1c3",
    name: "Skeleton Mastery",
    description: "Improves the quality of your raised Skeletons, Magi, and Revived",
  },
  {
    id: "t1r2c2",
    name: "Clay Golem",
    description: "Raises a Golem from the earth to fight for you",
  },
  {
    id: "t1r3c1",
    name: "Golem Mastery",
    description: "Enhances speed and life of Golems",
  },
  {
    id: "t1r3c3",
    name: "Raise Skeletal Mage",
    description: "Raises an Undead Mage to fight for you",
  },
  {
    id: "t1r4c2",
    name: "Blood Golem",
    description: "Summons a golem made of your blood",
  },
  {
    id: "t1r5c1",
    name: "Summon Resist",
    description: "Increases the Resists of your Summoned Minions",
  },
  {
    id: "t1r5c2",
    name: "Iron Golem",
    description: "Summon a powerful Golem at the cost of a metal item. The Golem takes the properties of the sacrificed item",
  },
  {
    id: "t1r6c2",
    name: "Fire Golem",
    description: "Summon a Golem of fire",
  },
  {
    id: "t1r6c3",
    name: "Revive",
    description: "Resurrects a monster to fight for you",
  },
  {
    id: "t2r1c2",
    name: "Teeth",
    description: "Summons multiple projectiles that damage enemies",
  },
  {
    id: "t2r1c3",
    name: "Bone Armor",
    description: "Creates a protective shield of bone that absorbs damage from physical attacks",
  },
  {
    id: "t2r2c1",
    name: "Poison Dagger",
    description: "Coats your weapon with a layer of poison",
  },
  {
    id: "t2r2c2",
    name: "Corpse Explosion",
    description: "Fills a corpse with energy causing it to explode violently",
  },
  {
    id: "t2r3c3",
    name: "Bone Wall",
    description: "Creates a barrier of bone",
  },
  {
    id: "t2r4c1",
    name: "Poison Explosion",
    description: "Releases a cloud of poisonous gas from a corpse",
  },
  {
    id: "t2r4c2",
    name: "Bone Spear",
    description: "Summons a bone missile that can damage and pass through multiple enemies",
  },
  {
    id: "t2r5c3",
    name: "Bone Prison",
    description: "Summons a ring of bone to surround a target",
  },
  {
    id: "t2r6c1",
    name: "Poison Nova",
    description: "A ring of poison explodes from the Necromancer",
  },
  {
    id: "t2r6c2",
    name: "Bone Spirit",
    description: "Summons a spirit to track and damage a target",
  },
  {
    id: "t3r1c2",
    name: "Amplify Damage",
    description: "Increases the amount of damage received",
  },
  {
    id: "t3r2c1",
    name: "Dim Vision",
    description: "Decreases radius of vision",
  },
  {
    id: "t3r2c3",
    name: "Weaken",
    description: "Decreases the damage dealt by enemies caught inside the curse",
  },
  {
    id: "t3r3c2",
    name: "Iron Maiden",
    description: "Reflects damage back at attackers",
  },
  {
    id: "t3r3c3",
    name: "Terror",
    description: "Causes monsters to run away in fear",
  },
  {
    id: "t3r4c1",
    name: "Confuse",
    description: "Confuses monsters, causing them to attack randomly",
  },
  {
    id: "t3r4c2",
    name: "Life Tap",
    description: "Curses an enemy, causing them to grant life to their attackers",
  },
  {
    id: "t3r5c1",
    name: "Attract",
    description: "Causes other monsters to target your enemy",
  },
  {
    id: "t3r5c3",
    name: "Decrepify",
    description: "A crippling curse that halves enemy units' speed, damage and physical resistances",
  },
  {
    id: "t3r6c2",
    name: "Lower Resist",
    description: "Elemental attacks do more damage to the cursed monster",
  }
];

const NECROMANCER_SKILL_TREE_NAMES = [
    { short: "summoning", name: "Summoning Spells"},
    { short: "poison", name: "Poison and Bone Spells"},
    { short: "curses", name: "Curses"}
]

const SUMMONING = [
  ["t1r1c3", 0, 1],
  [0, 1, 0],
  ["t1r2c2", 0, "t1r1c3"],
  [0, "t1r2c2", 0],
  ["t1r3c1", "t1r4c2", 0],
  [0, "t1r5c2", "t1r5c2.t1r3c3"]
];

const POISON = [
  [0, 1, 1],
  [1, "t2r1c2", 0],
  [0, 0, "t2r1c3"],
  ["t2r2c1.t2r2c2", "t2r2c2", 0],
  [0, 0, "t2r3c3"],
  ["t2r4c1", "t2r4c2", 0]
];

const CURSES = [
  [0, 1, 0],
  [1, 0, 1],
  [0, "t3r1c2", "t3r2c3"],
  ["t3r2c1", "t3r3c2", 0],
  ["t3r4c1", 0, "t3r3c3"],
  [0, "t3r4c2.t3r5c3", 0]
];

const NECROMANCER_SKILL_TREES = [SUMMONING, POISON, CURSES];

export {
    NECROMANCER_SKILLS,
    NECROMANCER_SKILL_TREES,
    NECROMANCER_SKILL_TREE_NAMES
};
