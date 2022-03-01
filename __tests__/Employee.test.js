// import the employee constructor
const Employee = require('../lib/Employee');

// test to see if it creates a new objec with correct values
test('creates an employee object', () => {
  const employee = new Employee('Stone', 51, 'Stonecomstock@yahoo.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// test getname() function,should return employee.name
test('gets employee name', () => {
  const employee = new Employee('Stone', 51, 'Stonecomstock@yahoo.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

// test getId() function,should return employee.ID
test('gets employee ID', () => {
  const employee = new Employee('Stone', 51, 'Stonecomstock@yahoo.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

// test getemail() function,should return employee.email
test('gets employee email', () => {
  const employee = new Employee('Stone', 51, 'Stonecomstock@yahoo.com');

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// test getRole() function, should return Employee
test('gets role of employee', () => {
  const employee = new Employee('Stone', 51, 'Stonecomstock@yahoo.com');

  expect(employee.getRole()).toEqual('Employee');
});
