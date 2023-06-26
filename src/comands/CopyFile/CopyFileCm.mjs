import path from 'path';
import { cp } from 'fs/promises';
import { getAbsFilePath } from '../../utils/utils.mjs';


async function CopyFileCm(currentPath, filePathRename, newFileName) {
    const absFilePath = getAbsFilePath(filePathRename, currentPath)
    const copyPath = path.join(path.resolve(absFilePath, '..'), newFileName)


    cp(absFilePath, copyPath, { recursive: true })
        .then(() => console.log('successfully copied'))
        .catch(() => { console.log('Operation failed') })
}

export { CopyFileCm }