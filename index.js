#!/usr/bin/env node

import showHelp from './scripts/help.js';
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
            const description = args.slice(1).join(' ');
            console.log(`Adding task: "${description}"`);
            // TODO: Implement add task functionality
            break;

        case 'update':
            if (args.length < 3) {
                console.error('Error: Please provide task ID and new description');
                process.exit(1);
            }
            const id = args[1];
            const newDesc = args.slice(2).join(' ');
            console.log(`Updating task ${id}: "${newDesc}"`);
            // TODO: Implement update task functionality
            break;

        case 'delete':
            if (args.length < 2) {
                console.error('Error: Please provide a task ID');
                process.exit(1);
            }
            console.log(`Deleting task ${args[1]}`);
            // TODO: Implement delete task functionality
            break;

        case 'mark-in-progress':
            if (args.length < 2) {
                console.error('Error: Please provide a task ID');
                process.exit(1);
            }
            console.log(`Marking task ${args[1]} as in progress`);
            // TODO: Implement mark in progress functionality
            break;

        case 'mark-done':
            if (args.length < 2) {
                console.error('Error: Please provide a task ID');
                process.exit(1);
            }
            console.log(`Marking task ${args[1]} as done`);
            // TODO: Implement mark done functionality
            break;

        case 'list':
            const filter = args[1] || 'all';
            console.log(`Listing tasks: ${filter}`);
            // TODO: Implement list tasks functionality
            break;

        default:
            console.error(`Error: Unknown command "${command}"`);
            console.log('Run "tracker help" for usage information');
            process.exit(1);
    }
}

main();