class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
        this.totalRamUsage = 0;
        this.totalCpuUsage = 0;
    }

    installAProgram(name, requiredSpace) {
        if (this.hddMemory < requiredSpace) {
            throw new Error('There is not enough space on the hard drive');
        }

        let programm = {
            name,
            requiredSpace
        };

        this.installedPrograms.push(programm);
        this.hddMemory -= requiredSpace;

        return programm;
    }

    uninstallAProgram(name) {
        if (!this.installedPrograms.find(x => x.name === name)) {
            throw new Error('Control panel is not responding');
        }

        for (let program of this.installedPrograms) {
            if (program.name === name) {
                let index = this.installedPrograms.indexOf(program);
                this.installedPrograms.splice(index, 1);
                this.hddMemory += program.requiredSpace;
            }
        }

        return this.installedPrograms;
    }

    openAProgram(name) {
        if (!this.installedPrograms.find(x => x.name === name)) {
            throw new Error(`The ${name} is not recognized`);
        }
        if (this.taskManager.find(x => x.name === name)) {
            throw new Error(`The ${name} is already open`);
        }

        for (let program of this.installedPrograms) {
            if (program.name === name) {

                let ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
                let cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

                this.totalRamUsage += ramUsage;
                this.totalCpuUsage += cpuUsage;

                if (this.totalRamUsage >= 100) {
                    throw new Error(`${program.name} caused out of memory exception`);
                }
                if (this.totalCpuUsage >= 100) {
                    throw new Error(`${program.name} caused out of cpu exception`);
                }
                if (this.totalRamUsage >= 100 && this.totalCpuUsage >= 100) {
                    throw new Error(`${program.name} caused out of memory exception`);
                }

                let newProgramm = { name, ramUsage, cpuUsage };
                this.taskManager.push(newProgramm);
            }
        }

        for (let program of this.taskManager) {
            if (program.name === name) {
                return program;
            }
        }
    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            return 'All running smooth so far';
        }

        let output = [];

        for (let program of this.taskManager) {
            output.push(`Name - ${program.name} | Usage - CPU: ${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%`);
        }

        return output.join('\n');
    }
}


let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());


