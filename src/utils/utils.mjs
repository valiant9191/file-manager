import fs from 'fs'
import path from 'path'

function getUserName() {
    const cliArguments = process.env
    if (cliArguments.npm_config_username) {
        return (cliArguments.npm_config_username)
    } else {
        false
    }
}

async function isDirectory(path) {
    return fs.statSync(path).isDirectory()
}

const comparePathDir = (currPath, homeDirPath) => {
    const currPathLength = currPath.slice('/').length
    const homeDirectoryLength = homeDirPath.slice('/').length
    return (currPathLength === homeDirectoryLength)
}

function getAbsFilePath(filePath, currentPath) {
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
    return absFilePath
}

export {
    getUserName,
    isDirectory,
    comparePathDir,
    getAbsFilePath
}