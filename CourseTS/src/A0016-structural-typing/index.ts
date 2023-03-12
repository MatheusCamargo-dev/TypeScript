type VerifyUser = (user: User, sentValue: User) => boolean;
type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUser = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const userDB = {
  username: 'machine',
  password: '123',
};
const userForm = {
  username: 'machine',
  password: '123',
};

const loggedIn = verifyUser(userDB, userForm);
console.log(loggedIn);
