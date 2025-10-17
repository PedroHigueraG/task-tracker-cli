import { create } from "domain";
import fs from "fs";
const tasks = JSON.parse(fs.readFileSync("./list.json", "utf8"));


// Listing all tasks
function listAll() {
    return tasks
}

// Filter the tasks
function filteredList(status) {
    const filteredTasks = tasks.filter(task => task.status === status);
    return filteredTasks;
}

// Add a new task
function addTask(description) {
    const newTask = {
        id: tasks.length + 1,
        description: description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    tasks.push(newTask);
    fs.writeFileSync("./list.json", JSON.stringify(tasks, null, 2));
    return newTask.id;
}

// Update an existing task
function updateTask(id, newDescription) {
    const task = tasks.find(t => t.id === parseInt(id));
    if (task) {
        task.description = newDescription;
        task.updatedAt = new Date().toISOString();
    }
    fs.writeFileSync("./list.json", JSON.stringify(tasks, null, 2));
    return task.id;
}

// Update task status
function updateTaskStatus(id, newStatus) {
    const task = tasks.find(t => t.id === parseInt(id));
    if (task) {
        task.status = newStatus;
        task.updatedAt = new Date().toISOString();
    }
    fs.writeFileSync("./list.json", JSON.stringify(tasks, null, 2));
    return task.id;
}

// Delete a task
function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === parseInt(id));
    if (index !== -1) {
        tasks.splice(index, 1);
    }
    fs.writeFileSync("./list.json", JSON.stringify(tasks, null, 2));
    return index !== -1;
}

function reset() {
    fs.writeFileSync("./list.json", JSON.stringify([], null, 2));
}

export { listAll, filteredList, addTask, updateTask, updateTaskStatus, deleteTask, reset };