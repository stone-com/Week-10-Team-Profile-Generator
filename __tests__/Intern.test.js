// import intern constructor
const Intern = require('../lib/Intern');

// testting creating an intern object, intern.school should be a string from user
test('creates an Intern object', () => {
    const intern = new Intern('Stone', 7, 'Stonecomstock@yahoo.com', 'UW');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// testing getSchool(), should return intern.school
test('gets employee school', () => {
    const intern = new Intern('Stone', 7, 'Stonecomstock@yahoo.com', 'UW');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// testing getrole(), should return intern
test('gets role of employee', () => {
    const intern = new Intern('Stone', 7, 'Stonecomstock@yahoo.com.com', 'UW');

    expect(intern.getRole()).toEqual("Intern");
}); 