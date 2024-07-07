let student = {
    name: "Prapa",
    age: 23,
    grade: "A+"
};
console.log("Before modification:", student);
student.major = "Computer Science & Engineering";
console.log("After adding 'major':", student);
delete student.grade;
console.log("After deleting 'grade':", student);