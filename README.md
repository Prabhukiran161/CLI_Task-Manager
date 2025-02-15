# 🗂️ CLI Task Manager

> **A minimal, efficient, and intuitive Command Line Interface (CLI) Task Manager built with JavaScript.** 🚀

![Task Manager](https://img.shields.io/badge/Task%20Manager-CLI-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-v20-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## ⚡ Features

- ✅ **Add Tasks** – Add a new task with a description and status.
- ✅ **List Tasks** – View all tasks with their current status.
- ✅ **Update Tasks** – Mark tasks as completed or pending.
- ✅ **Delete Tasks** – Remove tasks from the list.
- ✅ **Save & Load** – Persist tasks using a JSON file.

---

## 📥 Installation & Usage

### 🔹 Clone the Repository:
```bash
git clone https://github.com/Prabhukiran161/CLI_Task-Manager.git
cd task-manager
```

### 🔹 Install Dependencies:
```bash
npm install
```

### 🔹 Run the App:
```bash
task <command> <task_description>
```

### 🛠 Example Commands:
```bash
task add "Finish coding project"  # Adds a new task
task list                         # Lists all tasks
task update 1 "Completed"         # Updates task 1
task delete 2                     # Deletes task 2
```

---

## 🧩 Project Structure

```
📂 task-manager/
 ├── 📜 taskManager.js    # CLI input handling
 ├── 📜 tasks.js          # Task management logic
 ├── 📜 fileHandler.js    # Reads/writes tasks to JSON
 ├── 📂 data/             # Stores task data
 │   ├── 📜 tasks.json    # Persistent storage
 ├── 📜 utils.js          # Utility functions
 ├── 📜 package.json      # Project metadata
```

---

## 🚀 Roadmap

🔄 **Enhancements** – Improve CLI experience with colors & animations.  
🔍 **Search Feature** – Search for tasks by keyword.  
🔔 **Notifications** – Get reminders for pending tasks.  
📊 **Analytics** – Track task completion statistics.  

---

## 📄 License
📜 **MIT License** - See the [LICENSE](LICENSE) file for details.

---

## 🎨 Contribution
🙌 Contributions are welcome! Fork, clone, or open issues to improve the project.

---

## 📬 Contact
- 📂 **GitHub Profile** – [Prabhu Kiran](https://github.com/Prabhukiran161)
- 📧 Reach out at **prabhukiran161@gmail.com** for any queries or feedback.

---

✨ **Happy Task Managing!** 🚀
