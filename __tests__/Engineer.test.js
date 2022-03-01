// import engineer constructor
const Engineer = require('../lib/Engineer');

// test creating new engineer object,  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Stone', 90, 'Stone.comstock@yahoo.com', 'Stone-com');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// tests getGithub function. should return value of engineer.github
test('gets engineer github value', () => {
    const engineer = new Engineer('Stone', 90, 'Stone.comstock@yahoo.com', 'Stone-com');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// test getrole() function, should return engineer
test('gets role of employee', () => {
    const engineer = new Engineer('Stone', 90, 'Stone.comstock@yahoo.com', 'Stone-com');

    expect(engineer.getRole()).toEqual("Engineer");
});