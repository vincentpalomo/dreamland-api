const data = [
  {
    id: 1,
    character: 'Bean',
    age: 19,
    gender: 'Female',
    race: 'Human',
  },
  {
    id: 2,
    character: 'Elfo',
    age: 18,
    gender: 'Male',
    race: '50% Elf 50% Ogre',
  },
  {
    id: 3,
    character: 'Luci',
    age: 300,
    gender: 'Male',
    race: 'Sub Demon',
  },
  {
    id: 4,
    character: 'King Zog',
    age: 55,
    gender: 'Male',
    race: 'Human',
  },
  {
    id: 5,
    character: 'Queen Dagmar',
    age: 40,
    gender: 'Female',
    race: 'Human',
  },
];

export const fetchAllData = (req, res) => {
  res.send(data);
};
