import path from 'path'
import { getAbsFilePath } from "../../utils/utils.mjs"
import { rename } from 'fs/promises'



async function RenameCm(currentPath, filePathRename, newFileName) {
    const absFilePath = getAbsFilePath(filePathRename, currentPath)
    const filePathToRename = path.join(path.resolve(absFilePath, '..'), newFileName)

    if (!newFileName) {
        console.log('empty fileName' + newFileName)
        return
    }

    await rename(absFilePath, filePathToRename)
        .then(() => console.log('successfully renamed'))
        .catch((err) => {
            console.log('Operation Failed');
            console.log(err.message)
        });
}

export { RenameCm } 