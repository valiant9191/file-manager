import { getAbsFilePath } from '../../utils/utils.mjs';
import { rm } from 'fs/promises';


async function DeleteFileCm(currentPath, filePathTodelete) {
    const absFilePath = getAbsFilePath(filePathTodelete, currentPath)

    rm(absFilePath)
        .catch((e) => console.log('Operation failed ', e.message))
}

export { DeleteFileCm }