// constructor/class for employees

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // functions to get name, id, email, and job title

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getTitle() {
        return 'Employee';
    }
}

//export

module.exports = Employee;