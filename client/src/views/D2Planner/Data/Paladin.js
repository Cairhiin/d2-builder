const PALADIN_SKILLS = [
  {
    id: "t1r1c1",
    name: "Prayer",
    description: "Heals all party members at the expense of the caster's Mana reserves",
  },
  {
    id: "t1r1c3",
    name: "Resist Fire",
    description: "Increases the Fire resistance of all party members",
  },
  {
    id: "t1r2c2",
    name: "Defiance",
    description: "Boosts the Defense of all party members",
  },
  {
    id: "t1r2c3",
    name: "Resist Cold",
    description: "Increases the Cold resistance of all party members",
  },
  {
    id: "t1r3c1",
    name: "Cleansing",
    description: "Reduces Poison and Curse duration for all party members",
  },
  {
    id: "t1r3c3",
    name: "Resist Lightning",
    description: "Increases the Lightning resistance of all party members",
  },
  {
    id: "t1r4c2",
    name: "Vigor",
    description: "Increases Speed, Stamina, and Stamina recovery for all party members",
  },
  {
    id: "t1r5c1",
    name: "Meditation",
    description: "Boosts Mana recovery for all party members",
  },
  {
    id: "t1r6c2",
    name: "Redemption",
    description: "Periodically attempts to redeem corpses for Health and Mana",
  },
  {
    id: "t1r6c3",
    name: "Salvation",
    description: "Increases all Elemental resistances for all party members",
  },
  {
    id: "t2r1c1",
    name: "Might",
    description: "Increase damage dealt by the Paladin and his allies",
  },
  {
    id: "t2r2c2",
    name: "Holy Fire",
    description: "Periodically does Fire Damage to nearby enemies",
  },
  {
    id: "t2r2c3",
    name: "Thorns",
    description: "Enemies take damage when they cause melee damage to party members",
  },
  {
    id: "t2r3c1",
    name: "Blessed Aim",
    description: "Increases Attack Rating",
  },
  {
    id: "t2r4c1",
    name: "Concentration",
    description: "Increases damage dealt and reduces the chance of being interrupted during an attack",
  },
  {
    id: "t2r4c2",
    name: "Holy Freeze",
    description: "Periodically slows enemies nearby and deals Cold damage",
  },
  {
    id: "t2r5c2",
    name: "Holy Shock",
    description: "Periodically does Lightning damage to enemies within a radius",
  },
  {
    id: "t2r5c3",
    name: "Sanctuary",
    description: "Damages and does knockback to the Undead",
  },
  {
    id: "t2r6c1",
    name: "Fanaticism",
    description: "Increases your Damage, Attack Speed and Attack Rating. Increases Damage for all party members",
  },
  {
    id: "t2r6c3",
    name: "Conviction",
    description: "Reduces enemy Defense and Resistances",
  },
  {
    id: "t3r1c1",
    name: "Sacrifice",
    description: "Increased damage at the cost of health",
  },
  {
    id: "t3r1c3",
    name: "Smite",
    description: "Shield bash that does damage and knock back",
  },
  {
    id: "t3r2c2",
    name: "Holy Bolt",
    description: "Bolt of energy that damages undead, or heals friendly units",
  },
  {
    id: "t3r3c1",
    name: "Zeal",
    description: "Quickly attacks multiple adjacent enemies",
  },
  {
    id: "t3r3c3",
    name: "Charge",
    description: "Closes the distance with an enemy, delivering a bash on contact",
  },
  {
    id: "t3r4c1",
    name: "Vengeance",
    description: "Adds Elemental (Fire, Lightning and Cold) damage to all melee attacks",
  },
  {
    id: "t3r4c2",
    name: "Blessed Hammer",
    description: "Summons a magic hammer that spirals outward, damaging enemies",
  },
  {
    id: "t3r5c1",
    name: "Conversion",
    description: "A successful attack has a chance to convert the target to fight for the Paladin",
  },
  {
    id: "t3r5c3",
    name: "Holy Shield",
    description: "Magically enhances shield to give defense bonuses",
  },
  {
    id: "t3r6c2",
    name: "Fist of the Heavens",
    description: "Calls down a bolt of lightning on the target, and sends out a spray of Holy Bolts",
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
