import {v4 as uuidv4} from "uuid"

export const initialTodos=[
  //todos, that are in a recent installed app
    {
        title: "Lernen",
        done: false,
        id: uuidv4(),
        category: "Schule"
      },
      {
        title: "Einkaufen",
        done: false,
        id: uuidv4(),
        category:"Haushalt"
      },
      {
        title: "Putzen",
        done: false,
        id: uuidv4(),
        category:"Haushalt"
      },
];