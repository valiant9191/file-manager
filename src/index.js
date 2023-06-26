import os from 'node:os'
import { createInterface, } from 'readline';
import { getUserName } from "./utils/utils.mjs";
import { CliRouter } from './cliRouter/cliRouter.mjs';


const userName = getUserName()
const homeDirectory = os.homedir();
let currentDirectory = homeDirectory;
const changeCurrentDir = (arg) => currentDirectory = arg

try {

    if (userName) {
        const readline = createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: '\nYou are currently in ' + currentDirectory + '> '
        })

        console.log(`Welcome to the File Manager, ${userName}!`)
        readline.prompt()


        readline.addListener('close', () => console.log(`\nThank you for using File Manager, ${userName}, goodbye!`))

        readline.on('line', (data) => { CliRouter(data, readline, currentDirectory, changeCurrentDir) })
    } else {
        console.log('you forget to provide username as argument')
    }
} catch (err) {
    console.log(err.message)
}

