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

const Persons = function fetchPersonById(id) {
  return new Promise((resolve) =>
    setTimeout(() => {
      id = id;
      if (id === 1) {
        resolve(persons[0]);
      } else if (id === 2) {
        resolve(persons[1]);
      } else {
        resolve(persons[2]);
      }
    }, 1000)
  );
};

const Jobs = function fetchJobById(id) {
  return new Promise((resolve) =>
    setTimeout(() => {
      id = id;
      if (id === 1) {
        resolve(jobs[0].jobTitle);
      } else if (id === 2) {
        resolve(jobs[1].jobsTitle);
      } else {
        resolve(jobs[2].jobsTitle);
      }
    }, 500)
  );
};

Promise.all([
  realJob((resolve) => setTimeout(() => resolve(1), 500)),
  realId((resolve, reject) => setTimeout(() => resolve(1), 1000)),
]).then((values) => console.log(values));
// core here
