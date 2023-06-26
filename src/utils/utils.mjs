import fs from 'fs'

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

export {
    getUserName,
    isDirectory,
    comparePathDir
}