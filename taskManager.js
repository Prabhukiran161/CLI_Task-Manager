#!/usr/bin/env node

import * as tasks from "./tasks.js";

const command = process.argv[2]; // Command input
const argument1 = process.argv[3]; // First argument (e.g., task description or ID)
const argument2 = process.argv[4]; // Second argument (status)

switch (command) {
  case "add":
    tasks.addTask(argument1);
    break;
  case "list":
    tasks.listTasks();
    break;
  case "update":
    tasks.updateTask(Number(argument1), argument2);
    break;
  case "delete":
    tasks.deleteTask(Number(argument1));
    break;
  default:
    console.log("Unknown command. Use add, list, update, or delete.");
}
