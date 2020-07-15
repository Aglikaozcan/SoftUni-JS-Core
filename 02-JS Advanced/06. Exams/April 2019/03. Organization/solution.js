class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.employees = [];
        this.budgets = {
            marketing: this.budget * 0.4,
            finance: this.budget * 0.25,
            production: this.budget * 0.35
        };
    }

    get departmentsBudget() {
        return {
            marketing: this.budgets.marketing,
            finance: this.budgets.finance,
            production: this.budgets.production
        };
    }

    add(employeeName, department, salary) {

        if (this.departmentsBudget[department] >= salary) {
            let currentEmployee = { employeeName, department, salary };
            this.employees.push(currentEmployee);
            this.budgets[department] -= salary;

            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
        }

        return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is ${this.departmentsBudget[department]}.`;
    }

    employeeExists(employeeName) {
        for (let employee of this.employees) {
            if (employee.employeeName === employeeName) {
                return `Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`;
            }
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }

    leaveOrganization(employeeName) {
        for (let employee of this.employees) {
            if (employee.employeeName === employeeName) {
                let index = this.employees.indexOf(employee);
                this.employees.splice(index, 1);
                this.budgets[employee.department] += employee.salary;

                return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
            }

            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }
    }

    status() {
        let output = `${this.name.toUpperCase()} DEPARTMENTS:`;

        let marketingEmployeees = this.employees.filter(x => x.department === 'marketing').sort((a, b) => b.salary - a.salary).map(x => x.employeeName);
        let financeEmployeees = this.employees.filter(x => x.department === 'finance').sort((a, b) => b.salary - a.salary).map(x => x.employeeName);
        let productionEmployeees = this.employees.filter(x => x.department === 'production').sort((a, b) => b.salary - a.salary).map(x => x.employeeName);

        output += `\nMarketing | Employees: ${marketingEmployeees.length}: ${marketingEmployeees.join(', ')} | Remaining Budget: ${this.budgets.marketing}`;
        output += `\nFinance  | Employees: ${financeEmployeees.length}: ${financeEmployeees.join(', ')} | Remaining Budget: ${this.budgets.finance}`;
        output += `\nProduction  | Employees: ${productionEmployeees.length}: ${productionEmployeees.join(', ')} | Remaining Budget: ${this.budgets.production}`;

        return output;
    }
}

let organization = new Organization('SoftUni', 20000);

console.log(organization.add('Peter', 'marketing', 1200));
console.log(organization.add('Pemer', 'marketing', 1400));
console.log(organization.add('Cetver', 'marketing', 1600));
console.log(organization.add('Robert', 'production', 1000));
console.log(organization.add('Robrrert', 'production', 1200));
console.log(organization.add('Bobrrert', 'production', 2000));
//console.log(organization.add('Kaka', 'finance', 2000));
//console.log(organization.add('Baba', 'finance', 2000));
console.log(organization.employeeExists('Peter'));
console.log(organization.employeeExists('Veter'));
console.log(organization.leaveOrganization('Peter'));
console.log(organization.leaveOrganization('Veter'));
console.log(organization.status());
