import {loadTasks,saveTasks} from './fileHandler.js';

export const addTask = async (description) => {
    const tasks = await loadTasks();
    const newTask = {
        id : tasks.length + 1,
        description,
        status: 'pending',
    };
    tasks.push(newTask);
    await saveTasks(tasks);
    console.log("Task added:", newTask);
};

export const listTasks = async () => {
    const tasks = await loadTasks();
    if (tasks.length === 0) {
        console.log("No tasks available");
    } else {
        tasks.forEach((task) => {
        console.log(`${task.id}. ${task.description} [${task.status}]`);
    });
    }
};

export const updateTask = async (id, status) => {
    const tasks = await loadTasks();
    const task = tasks.find((task) => task.id === id);
    if (task) {
        task.status = status;
        await saveTasks(tasks);
        console.log(`Task ${id} updated to ${status}`);
    } else {
        console.log(`Task with ID ${id} not found`);
    }
};

export const deleteTask = async (id) => {
    let tasks = await loadTasks();
    tasks = tasks.filter((task) => task.id !== id);
    await saveTasks(tasks);
    console.log(`Task ${id} deleted`);
};