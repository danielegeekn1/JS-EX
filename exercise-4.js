const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

// core here

function fetchPersonById(id) {
  return new Promise((resolve) => {
    id = id;
    if (id === 1) {
      resolve(persons[0]);
    } else if (id === 2) {
      resolve(persons[1]);
    } else {
      resolve(persons[2]);
    }
  });
}
/*
async function JoinPersons() {
  let Person1 = await fetchPersonById(1);
  console.log(Person1);
  let Person2 = await fetchPersonById(2);
  console.log(Person2);
  let Person3 = await fetchPersonById(3);
  console.log(Person3);
}*/
//console.log(JoinPersons());

function fetchJobById(id) {
  return new Promise((resolve) => {
    id = id;
    if (id === 1) {
      resolve(jobs[0].jobTitle);
    } else if (id === 2) {
      resolve(jobs[1].jobTitle);
    } else {
      resolve(jobs[2].jobTitle);
    }
  });
}
let jobOne = new fetchJobById(1);
let jobTwo = new fetchJobById(2);
let jobThree = new fetchJobById(3);

let personOne = new fetchPersonById(1);
let personTwo = new fetchPersonById(2);
let personThree = new fetchPersonById(3);

Promise.all([personOne, jobOne, personTwo, jobTwo, personThree, jobThree]).then(
  (mex) => console.log(mex)
);
/*

async function JoinJobs() {
  let Job1 = await fetchJobById(1);
  console.log(Job1);
  let Job2 = await fetchJobById(2);
  console.log(Job2);
  let Job3 = await fetchJobById(3);
  console.log(Job3);
}*/

//console.log(JoinJobs());
