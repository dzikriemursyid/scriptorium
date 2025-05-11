const fs = require('fs/promises');

(async () => {
    // Commands
    const CREATE_FILE = "create a file";
    const RENAME_FILE = "rename the file";
    const DELETE_FILE = "delete the file";
    const ADD_TO_FILE = "add to file";

    const createFile = async (path) => {
        try {
            const existingFileHandler = await fs.open(path, 'r');
            existingFileHandler.close();

            return console.log(`File ${path} already exists!`);
        } catch (e) {
            const createFileHandler = await fs.open(path, 'w');
            console.log(`File ${path} was successfully created!`);
            createFileHandler.close();
        }
    };

    const renameFile = async (oldPath, newPath) => {
        try {
            const checkFileHandler = await fs.open(oldPath, 'r');
            await fs.rename(oldPath, newPath);
            console.log("File was successfully renamed!")
            checkFileHandler.close();
        } catch (e) {
            return console.log(`File ${oldPath} does not exists!`);
        }
    };

    const deleteFile = async (path) => {
        try {
            const checkFileHandler = await fs.open(path, 'r');
            await fs.rm(path);
            console.log(`File ${path} was deleted!`)
            checkFileHandler.close();

        } catch (e) {
            return console.log("File does not exists!")
        }
    };

    const addToFile = async (path, content) => {
       try {
            const fileHandler = await fs.open(path, 'w');
            fileHandler.writeFile(content);
            console.log(`${content} was added to the ${path}`)
            fileHandler.close();
       } catch (e) {
            return console.log("Please input the correct path!")
       }
    };

    // Open the file and store it in a variable
    const fileHandler = await fs.open('./command.txt', 'r');

    fileHandler.on("changes", async () => {
        // Identify the size
        const size = (await fileHandler.stat()).size - 1;

        // Initiate the buffer, offset, length, and position
        const buff = Buffer.alloc(size);
        const offset = 0;
        const length = buff.byteLength;
        const position = 0;

        await fileHandler.read(buff, offset, length, position);

        // Get the command from the command.txt
        const command = buff.toString('utf-8');
        
        // create a file <path>
        if (command.includes(CREATE_FILE)) {
            const path = command.substring(CREATE_FILE.length + 1);

            createFile(path);
        };

        // rename the file <path> to <path>
        if (command.includes(RENAME_FILE)) {
            const path = (command.substring(RENAME_FILE.length + 1)).split(" to ");
            const oldPath = path[0];
            const newPath = path[1];

            renameFile(oldPath, newPath);
        };

        // delete the file <path>
        if (command.includes(DELETE_FILE)) {
            const path = command.substring(DELETE_FILE.length + 1);

            deleteFile(path);
        };

        // add to file <path> content:
        if (command.includes(ADD_TO_FILE)) {
            const string = (command.substring(ADD_TO_FILE.length + 1)).split(" content: ");
            const path = string[0];
            const content = string[1];

            addToFile(path, content);
        };
    })

    // Watch all of the changes in command.txt
    const watcher = fs.watch('./command.txt');

    for await (const changes of watcher) {
        if (changes.eventType === "change") {
            fileHandler.emit("changes")
        }
    };

})();
