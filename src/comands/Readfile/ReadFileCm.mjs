import { readFile } from 'fs/promises';
import { getAbsFilePath } from '../../utils/utils.mjs';



async function ReadFileCm(filePath, currentPath) {

    const absFilePath = getAbsFilePath(filePath, currentPath)

    const fileData = await readFile(absFilePath, 'utf-8')
        .then(data => data)
        .catch((_) => {
            console.log('Operation failed');
        })
    console.log('data from file: ' + absFilePath)
    console.log(fileData)
}

export { ReadFileCm };