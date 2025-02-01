import fs from 'fs/promises';
import path from 'path';

const tasksFilepath = path.join(process.cwd(), 'data', 'tasks.json');
// path.join() is a method from the Node.js path module, used to join segments of a file path together into a complete path
// The reason it uses / or \ is due to the underlying file system path conventions.
// process.cwd() method is used to get the current working directory (CWD)
// C:\Users\yourusername\my-project\data\tasks.json

// Note: For difference between the join() methods
// join() method is used to join all the elements of an array into a single string
// join() => with default separator (comma)



// Read tasks from the JSON file
export const loadTasks= async () => {
    try{
        const data = await fs.readFile(tasksFilepath,'utf8');
        return JSON.parse(data);
    }
    catch(error){
        console.error('Error loading tasks:',error);
        return [];
    }
};
// readFile() => an asynchronous method provided by the fs module, which is used to read the content of a file
// asynchronously read the file located at the path stored in tasksFilepath and interpret the file as a UTF-8 encoded text
// JSON.parse() => convert a JSON string into a JavaScript object
// console.error() is a method in JavaScript that is used to output error messages to the console

// Save tasks to the JSON file
export const saveTasks = async (tasks) => {
    try{
        await fs.writeFile(tasksFilepath, JSON.stringify(tasks,null,2));
    }
    catch(error){
        console.error('Error saving tasks:', error);
    }
}
// fs.writeFile() method in Node.js is used to write data to a file asynchronously
// fs.writeFile(filePath, data, [options], callback);
// JSON.stringify() is a method that converts a JavaScript object or value to a JSON-formatted string
// JSON.stringify( Value, Replacer, Space)
// Value: The value (object, array, etc.) to be converted to a JSON string.
// Replacer: A function or array that can filter or modify the properties of the object during the stringification process.
// Space: A number or string used to add indentation, white space, or line breaks to make the output more readable (pretty-printing).