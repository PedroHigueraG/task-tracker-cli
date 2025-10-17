# Task Tracker CLI

Project from [roadmap backend projects](https://github.com/PedroHigueraG/task-tracker-cli)

A simple command-line interface for tracking tasks. Add, update, delete, and manage tasks with different statuses directly from your terminal.

## Features

- ✅ Add new tasks
- 📝 Update task descriptions
- 🗑️ Delete tasks
- 🔄 Change task status (todo, in-progress, done)
- 📋 List tasks with filtering options
- 🔄 Reset all tasks

## Installation

### Prerequisites

- Node.js (version 12 or higher)
- npm

### Local Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd task-tracker-cli
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Link the package globally to use the `tracker` command:
   ```bash
   npm link
   ```

### Alternative: Direct Usage

If you don't want to install globally, you can run commands directly:
```bash
node index.js <command> [arguments]
```

## Usage

### Basic Commands

#### Add a Task
```bash
tracker add "Your task description"
```
Example:
```bash
tracker add "Buy groceries"
tracker add "Complete project documentation"
```

#### List Tasks
```bash
# List all tasks
tracker list

# List tasks by status
tracker list todo          # Show pending tasks
tracker list in-progress   # Show tasks in progress  
tracker list done          # Show completed tasks
```

#### Update Task
```bash
tracker update <id> "New description"
```
Example:
```bash
tracker update 1 "Buy groceries and cook dinner"
```

#### Change Task Status
```bash
# Mark task as in progress
tracker mark-in-progress <id>

# Mark task as completed
tracker mark-done <id>
```
Example:
```bash
tracker mark-in-progress 1
tracker mark-done 2
```

#### Delete Task
```bash
tracker delete <id>
```
Example:
```bash
tracker delete 1
```

#### Other Commands
```bash
# Show help
tracker help

# Reset all tasks (delete everything)
tracker reset
```

## Task Structure

Each task contains the following information:
- **ID**: Unique identifier (auto-generated)
- **Description**: Task description
- **Status**: Current status (`todo`, `in-progress`, or `done`)
- **Created At**: Timestamp when task was created
- **Updated At**: Timestamp when task was last modified

## Data Storage

Tasks are stored in a `list.json` file in the project directory. This file is automatically created and managed by the application.

## Examples

Here's a complete workflow example:

```bash
# Add some tasks
tracker add "Learn Node.js"
tracker add "Build a CLI app"
tracker add "Write documentation"

# List all tasks
tracker list

# Start working on task 1
tracker mark-in-progress 1

# Complete task 1
tracker mark-done 1

# Update task description
tracker update 2 "Build an awesome CLI app"

# List only completed tasks
tracker list done

# List tasks in progress
tracker list in-progress
```

## Troubleshooting

### Command Not Found
If you get a "command not found" error:
1. Make sure you ran `npm link` in the project directory
2. Alternatively, use `node index.js` instead of `tracker`

### File Permission Issues
On Unix-like systems, you might need to make the file executable:
```bash
chmod +x index.js
```

### JSON File Issues
If you encounter JSON parsing errors, check that `list.json` exists and contains valid JSON. You can reset it by running:
```bash
tracker reset
```

## Project Structure

```
task-tracker-cli/
├── index.js              # Main entry point
├── package.json           # Project configuration
├── list.json             # Task data storage
├── scripts/
│   ├── help.js           # Help command functionality
│   └── crudList.js       # Task CRUD operations
└── README.md             # This file
```

## Contributing

Feel free to contribute to this project by:
1. Reporting bugs
2. Suggesting new features  
3. Submitting pull requests

## License

This project is licensed under the ISC License.

## Author

Pedro Higuera