//  bring in other JS files
const createHTML = require('./src/createHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//  node modules fs and inquirer
const fs = require('fs');
const inquirer = require('inquirer');

//  initialize empty array, will push each employee into array from user input(inquirer), then call createHTML function passing in the array data.
const teamArray = [];

//  function to add manager based off user input from prompt(inquirer)

const addManager = () => {
  return (
    inquirer
      //    prompt user for info about manager name, id, email, and office number
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Who is the manager of this team?',
        },
        {
          type: 'input',
          name: 'id',
          message: "Please enter the manager's ID.",
          validate: (idInput) => {
            if (isNaN(idInput)) {
              // checking to see if ID is  number, if not, tell user in console
              console.log("Please enter the manager's ID!");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: 'input',
          name: 'email',
          message: "Please enter the manager's email.",
          validate: (email) => {
            //   checking for valid characters in email
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
              return true;
            } else {
              console.log('Please enter an email!');
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: "Please enter the manager's office number",
          validate: officeNumberInput => {
            //   checking to see if input number is a number, return false if NaN
            if  (isNaN(officeNumberInput)) {
                console.log ('Please enter an office number!')
                return false; 
            } else {
                return true;
            }
        }
        },
      ])
      .then((promptResults) => {
        //  destructure results into variables, then create a new manager using class and passing in results.
        const { name, id, email, officeNumber } = promptResults;
        const manager = new Manager(name, id, email, officeNumber);
        //  push new created manager object into the teamArray
        teamArray.push(manager);
        //  console log newly created manager object to make sure it is correct.
        console.log(manager);
      })
  );
};
//  function to add employee (engineer or intern). will be called after add manager function
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: "Please choose your employee's role",
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: "What's the name of the employee?",
      },
      {
        type: 'input',
        name: 'id',
        message: "Please enter the employee's ID.",
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter the employee's email.",
      },
      {
        type: 'input',
        name: 'github',
        message: "Please enter the employee's github username.",
        //  will only ask for github when the role is engineer
        when: (input) => input.role === 'Engineer',
      },
      {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school",
        //  will only ask for school when the role is intern
        when: (input) => input.role === 'Intern',
      },
      {
        type: 'confirm',
        name: 'addAnother',
        message: 'Would you like to add more team members?',
        default: false,
      },
    ])
    .then((data) => {
      // destructure all user input employee data into variables.
      let { name, id, email, role, github, school, addAnother } = data;
      // initialize new employee variable
      let employee;
      // if role is engineer, create new Engineer object passing in all employee  data from user input
      if (role === 'Engineer') {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
        // if role is intern, create new Intern object passing in all employee data from user input
      } else if (role === 'Intern') {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      //    push the new created empoyee object to teamArray
      teamArray.push(employee);

      if (addAnother) {
        //   if addAnother is true (user selected yes they want to add another employee), then run the function again
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

//  function to use fs to create html page,

const writeFile = (data) => {
  fs.writeFile('./dist/index.html', data, (err) => {
    if (err) {
      // if there is an error, console log it and return
      console.log(err);
      return;
    } else {
      // if theres not an error, console log that it has successfully created the file
      console.log(
        'Your team profile has been created at index.html in the dist folder.'
      );
    }
  });
};

// initialize the app by calling addManager function

addManager()
  // call addEmployee function after addmanager runs
  .then(addEmployee)
  // call createHTML function passing in the teamArray as argument
  // teamArray was populated by addManager and addEmployee functions
  .then((teamArray) => {
    return createHTML(teamArray);
  })
  // call writeFile function passing in the created HTML from previous createHTML call
  .then((html) => {
    return writeFile(html);
  })
  // catch any errors and console log them
  .catch((err) => {
    console.log(err);
  });
