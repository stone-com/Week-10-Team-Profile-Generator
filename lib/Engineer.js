//import employee constructor
const Employee = require('./Employee');
//constructor/class for Engineer job
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email)

        this.github = github;
    }
    //function to get github info
    getGithub() {
        return this.github;
    }
    //change get title to return engineer instead of employee
    getTitle() {
        return 'Engineer';
    }
}

//export Engineer class
module.exports = Engineer;