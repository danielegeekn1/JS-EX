function uncompletedNotes(notes) {
  // ...
  let newNote = [];
  for (let i = 0; i < notes.length; i++) {
    let status = true;
    let todos = notes[i].todos;
    todos.forEach((value) => {
      let done = value.done;
      if (done === false) {
        status = false;
      }
    });
    if (status === false) {
      newNote.push(notes[i]);
    }
  }

  return newNote;
}

//console.log(uncompletedNotes());
const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: true,
      },
    ],
  },
];

const notesInProgress = uncompletedNotes(notes);
console.log("All notes: ", notes);
console.log("Notes In Progress: ", notesInProgress);
