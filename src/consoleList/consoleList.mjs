import os from 'node:os';
import path from 'path';
import { readdir } from 'fs/promises';
import { isDirectory } from '../utils/utils.mjs';


async function ConsoleList(pathLocation) {

    await readdir(pathLocation)
        .then(async (files) => {
            const filesArr = []
            const folderArr = []

            for (const file of files) {
                const filePath = path.join(pathLocation, file);
                const directory = await isDirectory(filePath);
                if (directory) {
                    folderArr.push({ name: file, type: 'folder' });
                } else {
                    filesArr.push({ name: file, type: 'file' });
                }
            };
            console.table([...folderArr, ...filesArr])
        })
        .catch((e) => {
            console.log('is it working?')
            console.log(e.message)
        })

}

export { ConsoleList }