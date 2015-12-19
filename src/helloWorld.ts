interface Person {
    firstName: string;
    lastName?: string;
}

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

interface StringArray {
    [index: number]: string;
}

function hello(whatever: string) {
    document.body.innerHTML = 'Hello ' + whatever;
}

function helloInterface(person: Person) {
    document.body.innerHTML = `Hello ${person.firstName} ${person.lastName}`;
}

function helloClass(student: Student) {
    document.body.innerHTML = `Hello ${student.fullName}`;
}

//hello('Simon Adcock');
//helloInterface({
//    firstName: 'Simon',
//    lastName: 'Adcock123'
//});
//const stud: Student = new Student('Simon', 'J', 'Adcock');
//helloClass(stud);
helloInterface({
    firstName: 'Simon'
});

var stringArray: StringArray = ['Simon', 'Adcock'];
console.log(stringArray[0]);
