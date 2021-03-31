const SORCERESS_SKILLS = [
  {
    id: "t1r1c2",
    name: "Ice Bolt",
    description: "Shoots a bolt of ice that damages and slows your victim"
  },
  {
    id: "t1r1c3",
    name: "Frozen Armor",
    description: "Gives a defense bonus and freezes any melee attacker that hits you",
  },
  {
    id: "t1r2c1",
    name: "Frost Nova",
    description: "Creates an expanding ring of ice and frost that damages and slows enemies",
  },
  {
    id: "t1r2c2",
    name: "Ice Blast",
    description: "Creates a bolt of ice that completely freezes a target",
  },
  {
    id: "t1r3c3",
    name: "Shiver Armor",
    description: "The Sorceress enchants a Armor of cold, granting a defense bonus, as well as slowing and damaging any melee attackers",
  },
  {
    id: "t1r4c2",
    name: "Glacial Spike",
    description: "A shard of ice that inflicts massive cold damage and explodes to freeze nearby enemies",
  },
  {
    id: "t1r5c1",
    name: "Blizzard",
    description: "Summons an ice storm to rain cold death onto your enemies",
  },
  {
    id: "t1r5c3",
    name: "Chilling Armor",
    description: "Confers a defense bonus and launches an ice bolt against ranged attackers",
  },
  {
    id: "t1r6c1",
    name: "Frozen Orb",
    description: "A pulsating orb that shreds an area with ice bolts",
  },
  {
    id: "t1r6c2",
    name: "Cold Mastery",
    description: "Pierces the cold resistance of your enemies",
  },
  {
    id: "t2r1c2",
    name: "Charged Bolt",
    description: "Fires multiple jumping bolts of electricity that seek their targets",
  },
  {
    id: "t2r2c1",
    name: "Static Field",
    description: "Every enemy in a radius around you loses 25% of their current health",
  },
  {
    id: "t2r2c3",
    name: "Telekinesis",
    description: "Allows you to pick up items, trigger objects, and attack others at a distance",
  },
  {
    id: "t2r3c1",
    name: "Nova",
    description: "Creates an expanding ring of electricity",
  },
  {
    id: "t2r3c2",
    name: "Lightning",
    description: "Casts a bolt of lightning",
  },
  {
    id: "t2r4c2",
    name: "Chain Lightning",
    description: "Casts a lightning bolt that jumps through multiple targets",
  },
  {
    id: "t2r4c3",
    name: "Teleport",
    description: "Instantly transports you between two points",
  },
  {
    id: "t2r5c1",
    name: "Thunderstorm",
    description: "Summons a thunderstorm that periodically blasts a nearby enemy with a bolt of lightning",
  },
  {
    id: "t2r5c3",
    name: "Energy Shield",
    description: "Absorbs magical and some physical damage to Mana instead of Life",
  },
  {
    id: "t2r6c2",
    name: "Lightning Mastery",
    description: "Increases the damage of lightning spells",
  },
  {
    id: "t3r1c2",
    name: "Fire Bolt",
    description: "Creates a bolt of fire",
  },
  {
    id: "t3r1c3",
    name: "Warmth",
    description: "Increases Mana recovery rate",
  },
  {
    id: "t3r2c1",
    name: "Inferno",
    description: "Creates a spout of flame that burns the enemies",
  },
  {
    id: "t3r3c1",
    name: "Blaze",
    description: "Leave a wall of fire in your footsteps",
  },
  {
    id: "t3r3c2",
    name: "Fire Ball",
    description: "Creates a ball of fire that explodes on impact",
  },
  {
    id: "t3r4c1",
    name: "Fire Wall",
    description: "Creates a wall of fire",
  },
  {
    id: "t3r4c3",
    name: "Enchant",
    description: "Temporarily adds Fire damage to a weapon",
  },
  {
    id: "t3r5c2",
    name: "Meteor",
    description: "Summons a meteor from the heavens to smite the enemies",
  },
  {
    id: "t3r6c2",
    name: "Fire Mastery",
    description: "Increases damage done by all fire spells",
  },
  {
    id: "t3r6c3",
    name: "Hydra",
    description: "Creates a multi-headed beast that attacks enemies with bolts of fire",
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
