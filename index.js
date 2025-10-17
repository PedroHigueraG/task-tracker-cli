#!/usr/bin/env node

import showHelp from './scripts/help.js';
import * as crudList from './scripts/crudList.js';

const args = process.argv.slice(2);

function main() {

    if (args.length === 0 || args[0] === 'help') {
        console.log(showHelp()); 
        return;
    }

    const command = args[0].toLowerCase();

    switch (command) {
        case 'add':
            if (args.length < 2) {
                console.error('Error: Please provide a task description');
                process.exit(1);
            }
            var description = args.slice(1).join(' ');
            console.log(`Adding task with id: "${crudList.addTask(description)}"`);
            break;

        case 'update':
            if (args.length < 3) {
                console.error('Error: Please provide task ID and new description');
                process.exit(1);
            }
            var id = args[1];
            var newDesc = args.slice(2).join(' ');
            console.log(`Updating task ${id}: "${crudList.updateTask(id, newDesc)}"`);
            break;

        case 'delete':
            if (args.length < 2) {
                console.error('Error: Please provide a task ID');
                process.exit(1);
            }
            var id = args[1];
            console.log(`Deleting task was: "${crudList.deleteTask(id)}"`);
            break;

        case 'mark-in-progress':
            if (args.length < 2) {
                console.error('Error: Please provide a task ID');
                process.exit(1);
            }

            console.log(`Marking task ${crudList.updateTaskStatus(args[1], "in-progress")} as in progress`);
            // TODO: Implement mark in progress functionality
            break;

        case 'mark-done':
            if (args.length < 2) {
                console.error('Error: Please provide a task ID');
                process.exit(1);
            }
            console.log(`Marking task ${crudList.updateTaskStatus(args[1], "done")} as done`);
            break;

        case 'list':
            if (args.length < 2) {
                console.log(crudList.listAll());
            }else{
                console.log(crudList.filteredList(args[1]));
            }
            
            break;

        case 'reset':
            console.log('Resetting all tasks...');
            crudList.reset(); 
            break;

        default:
            console.error(`Error: Unknown command "${command}"`);
            console.log('Run "tracker help" for usage information');
            process.exit(1);
    }
}

main();