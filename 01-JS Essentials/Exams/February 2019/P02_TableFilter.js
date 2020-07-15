function tableFilter(table, commandLine) {

    let command = commandLine.split(' ')[0];
    let header = commandLine.split(' ')[1];
    let headerRow = table[0];
    let headerIndex = headerRow.indexOf(header);

    if (command === 'hide' && headerRow.includes(header)) {
        let newArr = [];

        for (let row of table) {
            newArr += row.splice(headerIndex, 1);
        }
        table.forEach(x => console.log(x.join(' | ')));

    } else if (command === 'sort' && headerRow.includes(header)) {
        headerRow = table.shift();
        table.sort((a, b) => a[headerIndex].localeCompare(b[headerIndex]));
        table.unshift(headerRow);

        table.forEach(x => console.log(x.join(' | ')));

    } else if (command === 'filter' && headerRow.includes(header)) {

        let value = commandLine.split(' ')[2];
        console.log(headerRow.join(' | '));
        
        for (let row of table) {
            if (row.includes(value)) {
                console.log(row.join(' | '));
            }
        }
    }
}

tableFilter([['firstName', 'age', 'grade', 'course'],
['Peter', '25', '5.00', 'JS-Core'],
['George', '34', '6.00', 'Tech'],
['Marry', '28', '5.49', 'Ruby']],
    'filter firstName Marry');