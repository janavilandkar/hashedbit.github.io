
const students = [
    { name: "radha", scores: [70 ,70, 90] },
    { name: "Mohini", scores: [80, 70, 90] },
    { name: "Sayali", scores: [60, 70, 80] },
    { name: "Shreya", scores: [90, 90, 80, 80] },
];

const res = students.map(student => {
    let average = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    return { name: student.name, average: average };
});

console.log(res);
