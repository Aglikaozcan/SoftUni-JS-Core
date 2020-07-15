function createPerson(name, age) {
    return {
        getName: () => name,
        getAge: () => age, 
        setName: (value) => name = value,
        setAge: (value) => age = value
    };
}

const per = createPerson('Pesho', 5);

console.log(per.getName());
per.setAge(21);
console.log(per.getAge());