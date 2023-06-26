import { readFile } from 'fs/promises';
import path from 'path'



async function ReadFileCm(filePath, currentPath) {

    let absFilePath;
    if (!path.isAbsolute(filePath)) {
        if (filePath.includes('./') || filePath.includes('../')) {
            absFilePath = path.resolve(currentPath, filePath);
        } else {
            absFilePath = path.join(currentPath, filePath);
        };
    } else {
        absFilePath = filePath;
    };


    const fileData = await readFile(absFilePath, 'utf-8')
        .then(data => data)
        .catch((_) => {
            console.log('Operation failed');
        })
    console.log(fileData)
}

export { ReadFileCm };