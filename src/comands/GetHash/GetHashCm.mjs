import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { getAbsFilePath } from '../../utils/utils.mjs';

async function GetHash(currentDirectory, file) {
    const absFilePath = getAbsFilePath(file, currentDirectory)

    const data = await readFile(absFilePath, { encoding: 'utf-8' })
        .catch(err => console.log('Operation failed ', err.message))

    const hash = createHash('sha256')
    const resultHash = hash.update(data)
    const resultHashAsHex = resultHash.digest('hex')

    return console.log(resultHashAsHex)
}

export { GetHash }