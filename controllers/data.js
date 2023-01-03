const data = [
  {
    id: 1,
    character: 'Bean',
    age: 19,
    gender: 'Female',
    race: 'Human',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/8/85/Queen_Tiabeanie_of_Dreamland.png/revision/latest/scale-to-width-down/350?cb=20220122065631',
  },
  {
    id: 2,
    character: 'Elfo',
    age: 18,
    gender: 'Male',
    race: '50% Elf 50% Ogre',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/0/0e/Elfo.jpg/revision/latest/scale-to-width-down/294?cb=20180523182247',
  },
  {
    id: 3,
    character: 'Luci',
    age: 300,
    gender: 'Male',
    race: 'Sub Demon',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/8/8d/Lucille.png/revision/latest/scale-to-width-down/343?cb=20200523051336',
  },
  {
    id: 4,
    character: 'King Zog',
    age: 55,
    gender: 'Male',
    race: 'Human',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/5/50/Zog.jpg/revision/latest/scale-to-width-down/350?cb=20180817235827',
  },
  {
    id: 5,
    character: 'Queen Dagmar',
    age: 40,
    gender: 'Female',
    race: 'Human',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/6/6d/Dagmar_of_Hell.jpg/revision/latest/scale-to-width-down/350?cb=20220226143418',
  },
  {
    id: 6,
    character: 'Queen Oona',
    age: 40,
    gender: 'Female',
    race: 'Salamander',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/e/ef/Pirate_Queen_Oona.jpg/revision/latest/scale-to-width-down/329?cb=20210216195406',
  },
  {
    id: 7,
    character: 'Jasper',
    age: 13,
    gender: 'Male',
    race: '50% Selkie 50% Human',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/9/9c/Bear_boy.jpg/revision/latest/scale-to-width-down/350?cb=20220212132722',
  },
  {
    id: 8,
    character: 'Prince Derek',
    age: 13,
    gender: 'Male',
    race: '50% Salamander 50% Human',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/2/26/PDerek.jpg/revision/latest/scale-to-width-down/350?cb=20220212200204',
  },
  {
    id: 9,
    character: 'Ursula',
    age: 40,
    gender: 'Female',
    race: 'Selkie',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/0/0e/Ursulaa.jpg/revision/latest/scale-to-width-down/350?cb=20191008104754',
  },
  {
    id: 10,
    character: 'Arch-Druidess',
    age: 45,
    gender: 'Female',
    race: 'Human',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/8/83/Priestess_front.jpg/revision/latest/scale-to-width-down/239?cb=20181002214554',
  },
  {
    id: 11,
    character: 'Odval',
    age: 60,
    gender: 'Male',
    race: 'Unknown Humanoid',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/b/b2/Odval.jpg/revision/latest/scale-to-width-down/346?cb=20180818043416',
  },
  {
    id: 12,
    character: 'Becky the Enchantress',
    age: 40,
    gender: 'Female',
    race: 'Human',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/b/bb/Enchantress.jpg/revision/latest/scale-to-width-down/267?cb=20180819032740',
  },
  {
    id: 13,
    character: 'Emperor Cloyd',
    age: 55,
    gender: 'Male',
    race: 'Human',
    image:
      'https://static.wikia.nocookie.net/disenchantment/images/3/3e/Cloyd.jpg/revision/latest/scale-to-width-down/306?cb=20180819033532',
  },
  {
    id: 14,
    character: '',
    age: 0,
    gender: '',
    race: '',
    image: '',
  },
];

export const fetchAllData = (req, res) => {
  res.send(data);
};
