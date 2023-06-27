import os from 'os'

async function OsCm(args) {
    switch (true) {
        case args === '--EOL':
            console.log(JSON.stringify(os.EOL))
            break;
        case args === '--cpus':
            const cpusInfo = os.cpus();
            cpusInfo.forEach((cpu, index) => {
                console.log(
                    'Core',
                    index + 1,
                    cpu.model.trim(),
                    cpu.speed ? cpu.speed / 1000 + ' MHz' : 'No data');
            })
            break;
        case args === '--homedir':
            console.log(os.homedir());
            break;
        case args === '--username':
            console.log(os.userInfo().username);
            break;
        case args === '--architecture':
            console.log(process.arch);
            break;
        default:
            console.log('Operation failed');
    }
}

export { OsCm }