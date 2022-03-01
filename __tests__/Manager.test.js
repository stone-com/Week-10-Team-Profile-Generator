// import Manager constructor
const Manager = require('../lib/Manager');

// testing creating manager object  , office number should be a number
test('creates an Manager object', () => {
    const manager = new Manager('Stone', 22, 'Stonecomstock@yahoo.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// should return Manager
test('gets role of employee', () => {
    const manager = new Manager('Stone', 22, 'Stonecomstock@yahoo.com');

    expect(manager.getRole()).toEqual("Manager");
}); 