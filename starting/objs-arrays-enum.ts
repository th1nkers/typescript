// :{
//     name: string;
//     age:number
// }
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "thinker",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

//enum

// const ADMIN =0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN='Admin',READ_ONLY = 100,AUTHOR = 'Author'};

const person = {
    name: "thinker",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
  };

// person.role.push('admin'); unfortunately, tuple can't prevent pushing
// person.role[1] = 10;

let favActivities = ["Sport"]; // Type inference

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if(person.role === Role.AUTHOR){
    console.log('is admin');
}