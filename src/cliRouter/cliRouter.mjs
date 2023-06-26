import { ConsoleList } from '../comands/consoleList/ConsoleList.mjs';
import { NavigationCommands } from '../comands/NavigationCommands/NavigationCommands.mjs';
import { CreateFileCm } from '../comands/CreateFile/CreateFileCm.mjs';
import { ReadFileCm } from '../comands/Readfile/ReadFileCm.mjs';
import { RenameCm } from '../comands/Rename/RenameCm.mjs';
import { CopyFileCm } from '../comands/CopyFile/CopyFile.mjs';

async function CliRouter(argument, rl, currentDirectory, changeCurrentDir) {
    const argumentArray = argument.split(' ')

    try {
        switch (argumentArray[0]) {
            case '.exit':
                rl.close()
                break;
            case 'up':
                NavigationCommands(argumentArray, currentDirectory, changeCurrentDir, rl)
                break;
            case 'cd':
                NavigationCommands(argumentArray, currentDirectory, changeCurrentDir, rl)
                break;
            case 'ls':
                await ConsoleList(currentDirectory)
                rl.prompt()
                break;
            case 'cat':
                await ReadFileCm(argumentArray[1], currentDirectory)
                rl.prompt()
                break;
            case 'add':
                await CreateFileCm(argumentArray[1], currentDirectory)
                rl.prompt()
                break;
            case 'rn':
                await RenameCm(currentDirectory, argumentArray[1], argumentArray[2])
                rl.prompt()
                break;
            case 'cp':
                CopyFileCm(currentDirectory, argumentArray[1], argumentArray[2])
                rl.prompt()
                break;
            case 'mv':

                break;
            case 'rm':

                break;
            case 'os':

                break;
            case 'hash':

                break;
            case 'compress':

                break;
            case 'decompress':

                break;
            default:
                console.log('Unknown command: ' + argument)
                rl.prompt()
                break;
        }
    } catch (e) {
        console.log(e.message)
    }

}

export { CliRouter };