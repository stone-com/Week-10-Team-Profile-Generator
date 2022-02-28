//bring in other JS files
const createHTML = require('./src/createHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//node modules fs and inquirer
const fs = require('fs');
const inquirer = require('inquirer');

//initialize empty array, will push each employee into array from user input(inquirer), then call createHTML function passing in the array data.
const teamArray = [];

//function to add manager based off user input from prompt(inquirer)

const addManager = () => {
  return (
    inquirer
      //prompt user for info about manager name, id, email, and office number
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
        },
        {
          type: 'input',
          name: 'email',
          message: "Please enter the manager's email.",
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: "Please enter the manager's office number",
        },
      ])
      //destructure results into variables, then create a new manager using class and passing in results.
      .then((promptResults) => {
        const { name, id, email, officeNumber } = promptResults;
        const manager = new Manager(name, id, email, officeNumber);
        //push new created manager object into the teamArray
        teamArray.push(manager);
        //console log newly created manager object to make sure it is correct.
        console.log(manager);
      })
  );
};
