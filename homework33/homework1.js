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

const listOfSubjects = Object.keys(subjects).join(", ");
// console.log(listOfSubjects);
// const stringOfSubjects = listOfSubjects.join(", ");
console.log(listOfSubjects);

const normArray = Object.values(subjects);

// 3 задание - получить среднее кол-во студентов на всех предметах

const totalStudents = normArray.reduce((acc, subject) => acc + subject.students, 0);
const averageAmountOfStudents = totalStudents / normArray.length;
console.log(averageAmountOfStudents);
