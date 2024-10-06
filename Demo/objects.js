// #1 Object creation using literals method
let student = { studentName: "Sai Kiran" }
console.log(student);

// #2 Object using Object.create method
let person = Object.create({})
person.personName = "Sai Kiran"
console.log(student);


// #3 using functions are objects in Javascript
function Student() {
    return "Student";
}
let studentDetails = new Student();
studentDetails.name = "Sai"
studentDetails["age"] = 20
console.log(studentDetails);


// #4 creating object uisng class
class Student {

}
let studentDetails = new Student() //instance of class
studentDetails.Name = "Sai"
studentDetails["age"] = 20
console.log(studentDetails);


