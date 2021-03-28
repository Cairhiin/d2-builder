const AMAZON_SKILLS = [
  {
    id: "t1r1c1",
    name: "Jab",
    description: "Attack with a series of rapid thrusts using a javelin or spear class weapon",
  },
  {
    id: "t1r2c2",
    name: "Power Strike",
    description: "Adds lightning damage and increases the weapon damage of thrusting attacks",
  },
  {
    id: "t1r2c3",
    name: "Poison Javelin",
    description: "Causes thrown javelins to leave a trail of poison and deal extra poison damage",
  },
  {
    id: "t1r3c1",
    name: "Impale",
    description: "Powerful attack that reduces weapon durability",
  },
  {
    id: "t1r3c3",
    name: "Lightning Bolt",
    description: "Causes a thrown javelin to leave a trail of lighting, and deal lightning damage",
  },
  {
    id: "t1r4c2",
    name: "Charged Strike",
    description: "Upon striking an enemy, the Amazon's Javelin explodes with Charged Bolt",
  },
  {
    id: "t1r4c3",
    name: "Plague Javelin",
    description: "Causes a thrown javelin to leave a trail of poison, and a cloud on impact",
  },
  {
    id: "t1r5c1",
    name: "Fend",
    description: "Rapidly strikes several close targets",
  },
  {
    id: "t1r6c2",
    name: "Lightning Strike",
    description: "Strikes explode with chain lightning",
  },
  {
    id: "t1r6c3",
    name: "Lightning Fury",
    description: "Creates a powerful lightning bolt that releases multiple lightning bolts from target",
  },
  {
    id: "t2r1c1",
    name: "Inner Sight",
    description: "Illuminates foes, and lowers their defenses",
  },
  {
    id: "t2r1c3",
    name: "Critical Strike",
    description: "Grants a chance to do double damage",
  },
  {
    id: "t2r2c2",
    name: "Dodge",
    description: "Grants a chance to dodge melee attacks",
  },
  {
    id: "t2r3c1",
    name: "Slow Missiles",
    description: "Slows the speed of incoming missile attacks",
  },
  {
    id: "t2r3c2",
    name: "Avoid",
    description: "Grants a chance to move out of the way of a missile attack while standing still",
  },
  {
    id: "t2r4c3",
    name: "Penetrate",
    description: "Improves attack, increasing your chance to hit",
  },
  {
    id: "t2r5c1",
    name: "Decoy",
    description: "Creates a double, confusing foes",
  },
  {
    id: "t2r5c2",
    name: "Evade",
    description: "Grants a chance to evade any attack while moving",
  },
  {
    id: "t2r6c1",
    name: "Valkyrie",
    description: "Summons a powerful Valkyrie warrior to fight by your side",
  },
  {
    id: "t2r6c3",
    name: "Pierce",
    description: "Grants a chance for your missile attacks to continue through its victim",
  },
  {
    id: "t3r1c2",
    name: "Magic Arrow",
    description: "Attacks with a magical arrow or bolt",
  },
  {
    id: "t3r1c3",
    name: "Fire Arrow",
    description: "Enchants an arrow with fire, allowing it to deal additional magic damage",
  },
  {
    id: "t3r2c1",
    name: "Cold Arrow",
    description: "Enchants an arrow, adding cold damage and slowing your enemy",
  },
  {
    id: "t3r2c2",
    name: "Multiple Shot",
    description: "Splits one arrow into many at reduced damage",
  },
  {
    id: "t3r3c3",
    name: "Exploding Arrow",
    description: "Adds fire damage to normal arrows and explodes on impact",
  },
  {
    id: "t3r4c1",
    name: "Ice Arrow",
    description: "Enchants arrows that deal additional cold damage and will temporarily freeze the target",
  },
  {
    id: "t3r4c2",
    name: "Guided Arrow",
    description: "Imbues an arrow with the ability to seek its nearest target",
  },
  {
    id: "t3r5c2",
    name: "Strafe",
    description: "Fires a volley of arrows at multiple nearby targets",
  },
  {
    id: "t3r5c3",
    name: "Immolation Arrow",
    description: "Enchants an arrow with fire that explodes on contact leaving a patch of fire",
  },
  {
    id: "t3r6c1",
    name: "Freezing Arrow",
    description: "Enchants an arrow to deliver cold damage that freezes any monsters near the point of impact",
  }
];

const AMAZON_SKILL_TREE_NAMES = [
    { short: "javelin", name: "Javelin and Spear"},
    { short: "passive", name: "Passive and Magic"},
    { short: "bow", name: "Bow and Crossbow"}
]

const JAVELIN = [
  [1, 0, 0],
  [0,"t1r1c1", 1],
  ["t1r1c1", 0, "t1r2c3"],
  [0, "t1r2c2.t1r2c3", "t1r3c3"],
  ["t1r3c1", 0, 0],
  [0, "t1r4c2", "t1r4c3"]
];

const PASSIVE = [
  [1, 0, 1],
  [0, 1, 0],
  ["t2r1c1", "t2r2c2", 0],
  [0, 0, "t2r1c3.t2r2c2"],
  ["t2r3c1", "t2r3c2", 0],
  ["t2r5c1.t2r5c2", 0, "t2r4c3"]
];

const BOW = [
  [0, 1, 1],
  [1, "t3r1c2", 0],
  [0, 0, "t3r1c3"],
  ["t3r2c1", "t3r2c1.t3r2c2", 0],
  [0, "t3r4c2", "t3r3c3"],
  ["t3r4c1", 0, 0]
];

const AMAZON_SKILL_TREES = [JAVELIN, PASSIVE, BOW];

export {
    AMAZON_SKILLS,
    AMAZON_SKILL_TREES,
    AMAZON_SKILL_TREE_NAMES
};
