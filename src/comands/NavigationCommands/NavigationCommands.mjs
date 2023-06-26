import os from 'node:os'
import path from 'node:path';
import { access } from 'node:fs/promises';
import { comparePathDir } from '../../utils/utils.mjs';

async function NavigationCommands(arg, currentDirectory, changeCurrentDir, rl) {
    const homedir = os.homedir()

    // up 
    if (arg[0] === 'up') {
        if (comparePathDir(currentDirectory, homedir)) {
            console.log("You are currently in home dir, and can't go to upper folder")
            rl.prompt()
            return
        } else {
            const newLocation = path.join(...currentDirectory.split(path.sep).slice(0, -1))
            changeCurrentDir(newLocation)
            rl.setPrompt('\nYou are currently in ' + newLocation + '> ')
            rl.prompt()
        }
    }

    // cd 
    if (arg[0] === 'cd') {
        if (arg.length < 2) {
            console.log('path argument is empty ...')
            rl.prompt()
            return
        }
        const folder = arg[1]
        access(path.join(currentDirectory, folder))
            .then(
                () => {
                    const newLocation = path.join(currentDirectory, folder)
                    changeCurrentDir(newLocation)
                    rl.setPrompt('\nYou are currently in ' + newLocation + '> ')
                    rl.prompt()
                }
            )
            .catch((_) => {
                console.log(`does folder exists?`)
                console.log(_.message)
                rl.prompt()
            })

    }
}


export { NavigationCommands };