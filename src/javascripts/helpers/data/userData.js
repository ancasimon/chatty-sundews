const users = [
  {
    id: 'user1',
    name: 'Zoe',
    imgUrl: 'src/sundews-img/zoe.jpg',
  },
  {
    id: 'user2',
    name: 'Luke',
    imgUrl: 'src/sundews-img/luke.jpg',
  },
  {
    id: 'user3',
    name: 'Mary',
    imgUrl: 'src/sundews-img/mary.png',
  },

  {
    id: 'user4',
    name: 'Greg',
    imgUrl: 'src/sundews-img/greg.jpg',
  },

  {
    id: 'user5',
    name: 'John',
    imgUrl: 'src/sundews-img/john.jpg',

  },
];

const selectedUser = [];

const setUser = (userId) => {
  const foundUser = users.find((x) => x.id === userId);
  selectedUser.push(foundUser);
};

const getUsers = () => users;

export default { getUsers, setUser };
