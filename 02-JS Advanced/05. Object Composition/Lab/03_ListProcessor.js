const list = function () {
    let commands = [];
    const add = (command) => commands.push(command);
    const remove = (command) => {
        commands = commands.filter(c => c !== command);
    };
    const print = () => console.log(commands.join(', '));

    return {add, remove, print};
}();

list.add('hello');
list.add('again');
list.remove('again');
list.print();