import { createBrotliCompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'fs'
import { getAbsFilePath } from '../../utils/utils.mjs';
import { access } from 'node:fs/promises';
import path from 'node:path';

async function CompressCm(currentPath, pathToFile, pathDestination) {
    const fileName = path.basename(pathToFile) + '.br'

    const absFilePathFrom = getAbsFilePath(pathToFile, currentPath)
    const absFolderPathTo = getAbsFilePath(pathDestination, currentPath)
    const absFilePathTo = path.join(absFolderPathTo, fileName)

    access(absFilePathFrom)
        .then(() => {
            access(absFolderPathTo)
                .then(() => {
                    const readStream = createReadStream(absFilePathFrom);
                    const writeStream = createWriteStream(absFilePathTo);

                    const brotli = createBrotliCompress();
                    const stream = readStream.pipe(brotli).pipe(writeStream);

                    stream.on('finish', () => {
                        console.log('Done compressing 😎');
                    })
                })
                .catch((err) => console.log('Operation failed ', err.message))
        })
}

export { CompressCm }