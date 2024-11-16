const users = [
  {
    name: "Mike",
    isActive: false,
    eyeColor: "blue",
    gender: "male",
    email: "mike@gmail.com",
    age: 30,
  },
  {
    name: "Anna",
    isActive: true,
    eyeColor: "green",
    gender: "female",
    email: "anna@gmail.com",
    age: 25,
  },
  {
    name: "John",
    isActive: true,
    eyeColor: "brown",
    gender: "male",
    email: "john@gmail.com",
    age: 35,
  },
  {
    name: "Sophia",
    isActive: false,
    eyeColor: "hazel",
    gender: "female",
    email: "sophia@gmail.com",
    age: 28,
  },
  {
    name: "David",
    isActive: false,
    eyeColor: "gray",
    gender: "male",
    email: "david@gmail.com",
    age: 40,
  },
  {
    name: "Emma",
    isActive: false,
    eyeColor: "blue",
    gender: "female",
    email: "emma@gmail.com",
    age: 22,
  },
];

// -- 1 -- //
console.log(" -- 1 -- ");
const names = [];
const getUserNames = (arr, newArr) =>
  arr.forEach((user) => newArr.push(user.name));
getUserNames(users, names);
console.log(names);

// -- 2 -- //
console.log(" -- 2 -- ");
const getUsersByEyecolor = (arr, color) =>
  arr.filter((user) => user.eyeColor === color);
console.log(getUsersByEyecolor(users, "brown"));
console.log(getUsersByEyecolor(users, "blue"));
console.log(getUsersByEyecolor(users, "gray"));

// -- 3 -- //
console.log(" -- 3 -- ");
const getUsersNamesByGender = (arr, gender) => {
  const filteredUsers = arr.filter((user) => user.gender === gender);
  const names = [];
  getUserNames(filteredUsers, names);
  return names;
};
console.log(getUsersNamesByGender(users, "male"));
console.log(getUsersNamesByGender(users, "female"));

// -- 4 -- //
console.log(" -- 4 -- ");
const getUsersByStatus = (arr, status) =>
  arr.filter((user) => user.isActive === status);
console.log(getUsersByStatus(users, true));
console.log(getUsersByStatus(users, false));

// -- 5 -- //
console.log(" -- 5 -- ");
const getUserByEmail = (arr, email) => arr.find((user) => user.email === email);
console.log(getUserByEmail(users, "emma@gmail.com"));
console.log(getUserByEmail(users, "sophia@gmail.com"));

// -- 6 -- //
console.log(" -- 6 -- ");
const getUsersByAge = (arr, min, max) =>
  arr.filter((user) => user.age > min && user.age < max);
console.log(getUsersByAge(users, 20, 30));
console.log(getUsersByAge(users, 10, 25));
