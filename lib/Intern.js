//import employee constructor
const Employee = require('./Employee');
//constructor/class for Intern job
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email)

        this.school = school;
    }
    //function to get school info
    getSchool() {
        return this.school;
    }
    //change get title to return intern instead of employee
    getTitle() {
        return 'Intern';
    }
}

//export Engineer class
module.exports = Intern;