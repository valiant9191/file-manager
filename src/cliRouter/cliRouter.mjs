import { ConsoleList } from '../comands/consoleList/ConsoleList.mjs';
import { NavigationCommands } from '../comands/NavigationCommands/NavigationCommands.mjs';
import { CreateFileCm } from '../comands/CreateFile/CreateFileCm.mjs';
import { ReadFileCm } from '../comands/Readfile/ReadFileCm.mjs';
import { RenameCm } from '../comands/Rename/RenameCm.mjs';
import { CopyFileCm } from '../comands/CopyFile/CopyFileCm.mjs';
import { MoveFileCm } from '../comands/MoveFile/MoveFileCm.mjs';
import { DeleteFileCm } from '../comands/DeleteFile/DeleteFileCm.mjs';
import { GetHash } from '../comands/GetHash/GetHashCm.mjs';
import { CompressCm } from '../comands/Compress/CompressCm.mjs';
import { DecompressCm } from '../comands/Decompress/DecompressCm.mjs';

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
                await CopyFileCm(currentDirectory, argumentArray[1], argumentArray[2])
                rl.prompt()
                break;
            case 'mv':
                console.log(currentDirectory, argumentArray[1], argumentArray[2])
                await MoveFileCm(currentDirectory, argumentArray[1], argumentArray[2])
                rl.prompt()
                break;
            case 'rm':
                await DeleteFileCm(currentDirectory, argumentArray[1])
                rl.prompt()
                break;
            case 'os':

                break;
            case 'hash':
                GetHash(currentDirectory, argumentArray[1])
                rl.prompt()
                break;
            case 'compress':
                CompressCm(currentDirectory, argumentArray[1], argumentArray[2])
                rl.prompt()
                break;
            case 'decompress':
                DecompressCm(currentDirectory, argumentArray[1], argumentArray[2])
                rl.prompt()
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