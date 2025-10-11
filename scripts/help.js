export default function showHelp() {
    return `
    Task Tracker CLI

    Usage:
        tracker <command> [arguments]

    Commands:
        add <description>     Add a new task
        update <id> <desc>    Update a task description
        delete <id>           Delete a task
        mark-in-progress <id> Mark task as in progress
        mark-done <id>        Mark task as done
        list                  List all tasks
        list done             List completed tasks
        list todo             List pending tasks
        list in-progress      List tasks in progress
        help                  Show this help message

    Examples:
        tracker add "Buy groceries"
        tracker update 1 "Buy groceries and cook dinner"
        tracker mark-done 1
        tracker list
    `;
}
