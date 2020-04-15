const users = [
  {
    id: 'user1',
    name: 'Zoe',
    imgUrl: 'https://tinyurl.com/tm88t2s',
  },
  {
    id: 'user2',
    name: 'Luke',
    imgUrl: 'https://tinyurl.com/sx8muqc',
  },
  {
    id: 'user3',
    name: 'Mary',
    imgUrl: 'https://tinyurl.com/ta5v2c5',
  },

  {
    id: 'user4',
    name: 'Greg',
    imgUrl: 'https://tinyurl.com/sb6xy97',
  },

  {
    id: 'user5',
    name: 'John',
    imgUrl: 'https://tinyurl.com/tt9jdah',

  },
];

const selectedUser = [];

const setUser = (userId) => {
  const foundUser = users.find((x) => x.id === userId);
  selectedUser.push(foundUser);
};

const getUsers = () => users;

export default { getUsers, setUser };
