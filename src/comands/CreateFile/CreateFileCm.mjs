import { getAbsFilePath } from "../../utils/utils.mjs"
import { writeFile } from 'fs/promises';


async function CreateFileCm(filePath, currentPath) {
    const absFilePath = getAbsFilePath(filePath, currentPath)

    writeFile(absFilePath, '')
        .catch((err) => {
            console.log('Operation failed');
        })
}

export { CreateFileCm }