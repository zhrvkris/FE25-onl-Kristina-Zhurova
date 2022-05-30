const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

// 1 задание - создать строку из названий предметов написаных через запятую

const subjectNames = Object.keys(subjects);
const subjectNamesString = subjectNames.join(", ")
console.log(subjectNamesString);


// 2 задание - посчитать общее кол-во студентов и учителей на всех предметах

let normArray = Object.values(subjects);

console.log(normArray);
const sumOfStudents = normArray.reduce((acc, subject) => acc + subject.students, 0)
console.log(sumOfStudents);
const sumOfTeachers = normArray.reduce((acc, subject) => acc + subject.teachers, 0)
console.log(sumOfTeachers);
const sumOfPeople = sumOfStudents + sumOfTeachers;
console.log(sumOfPeople);


// 3 задание - получить среднее кол-во студентов на всех предметах
const averageStudent = sumOfStudents / normArray.length;
console.log(averageStudent);


// 4 задание - создать массив из объектов предметов
const subjectMassive = Object.entries(subjects);
console.log(subjectMassive);


// 5 задание - получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const teachersSort = normArray.sort((a, b) => b.teachers - a.teachers);
console.log(teachersSort);


