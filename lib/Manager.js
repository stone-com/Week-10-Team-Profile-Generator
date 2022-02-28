//import employee constructor
const Employee = require('./Employee');
//constructor/class for Manager job
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
  //function to get officeNumber info
  getOfficeNumber() {
    return this.officeNumber;
  }
  //change get Role to return manager instead of employee
  getRole() {
    return 'Manager';
  }
}

//export Manager class
module.exports = Manager;
