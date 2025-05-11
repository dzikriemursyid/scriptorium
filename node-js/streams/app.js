const fs = require('node:fs/promises');

(async () => {
    console.time('benchmark');

    //Exc Time: 670ms
    //Mem: 81mb
    //CPU: 100%

    const fileHandler = await fs.open('./text.txt', 'w');
    const stream = fileHandler.createWriteStream();

    let input = 0;
    const finish = 1000000;

    const writeTheFile = () => {
        while (input < finish) {
            const buff = Buffer.from(` ${input} `);

            stream.write(buff);

            if (input === finish - 1) {
                return stream.end(buff);
            }

            if (!stream.write(buff)) {
                input++
                break;
            }

            input++;
        }

    }

    writeTheFile();

    stream.on('drain', () => {
        writeTheFile();
    });

    stream.on('finish', () => {
        console.timeEnd('benchmark');
        fileHandler.close();
    })

})();

    // Exc Time: 57s
    // CPU: 100%
    // Mem: 84Mb
    //const fileHandler = await fs.open("./text.txt", 'w');
    //
    //for (let input = 0; input < 1000000; input++) {
    //    await fileHandler.write(` ${input} `);
    //}
    //
    //fileHandler.close();


    // Exc Time: 760ms
    // CPU: 100%
    // Mem: 306Mb
    //const fileHandler = await fs.open('./text.txt', 'w');
    //const stream = fileHandler.createWriteStream();
    //
    //for (let input = 0; input < 1000000; input++) {
    //
    //    const buff = Buffer.from(` ${input} `);
    //    stream.write(buff);
    //
    //}
    //
    //fileHandler.close();

