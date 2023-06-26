import { getAbsFilePath } from '../../utils/utils.mjs';
import { rename } from 'fs/promises';
import path from 'path'

async function MoveFileCm(currentPath, filePathFrom, filePathTo) {
    const absFilePathFrom = getAbsFilePath(filePathFrom, currentPath)
    const fileName = path.basename(filePathFrom)
    const absFilePathTo = path.join(path.resolve(absFilePathFrom, '..'), filePathTo, fileName)

    await rename(absFilePathFrom, absFilePathTo)
        .catch(err => console.log(err.message))

}

export { MoveFileCm }