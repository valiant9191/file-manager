import { ConsoleList } from '../comands/consoleList/ConsoleList.mjs';
import { NavigationCommands } from '../comands/NavigationCommands/NavigationCommands.mjs';
import { ReadFileCm } from '../comands/Readfile/index.mjs';

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

                rl.prompt()
                break;
            case 'rn':

                break;
            case 'cp':

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
                console.log('Invalid input: ' + argument)
                rl.prompt()
                break;
        }
    } catch (e) {
        console.log(e.message)
    }

}

export { CliRouter };