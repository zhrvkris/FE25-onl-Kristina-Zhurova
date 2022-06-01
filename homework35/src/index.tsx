import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ####  Homework 35
// ============
//
//
// #### Задачи:
//
//     С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//
// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количнство машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

// interface IUser {
//     name:  string;
//     phone: string;
//     email: string;
//     animals?: string[];
//     cars?: string[];
//     hasChildren: boolean;
//     hasEducation: boolean
// }
//
// const users: Array<IUser> = [
//     {
//         name: "Harry Felton",
//         phone: "(09) 897 33 33",
//         email: "felton@gmail.com",
//         animals: ["cat"],
//         cars: ["bmw"],
//         hasChildren: false,
//         hasEducation: true
//     },
//     {
//         name: "May Sender",
//         phone: "(09) 117 33 33",
//         email: "sender22@gmail.com",
//         hasChildren: true,
//         hasEducation: true
//     },
//     {
//         name: "Henry Ford",
//         phone: "(09) 999 93 23",
//         email: "ford0@gmail.com",
//         cars: ["bmw", "audi"],
//         hasChildren: true,
//         hasEducation: false
//     }
// ]
//
// // Task 1 - Создать строку из имен пользователей через запятую done
//
// const getListOfUsers: string = users.map((elem: IUser): IUser["name"] => elem.name).join(", ");
// console.log(getListOfUsers);
//
//
// // Task 2 - Посчитать общее количнство машин у пользователей
//
// const getArrayOfCars: string = users.map((elem: IUser): IUser["cars"] => elem.cars?.join(", "));
// // console.log(getArrayOfCars);
// const getSumOfCars: number = getArrayOfCars.length;
// console.log(getSumOfCars);
//
// // const getArrayOfCars: number = users.reduce((acc: number, user: IUser) => user.cars ? acc + user.cars.length : acc);
// // // console.log(getArrayOfCars);
// // const getSumOfCars: number = getArrayOfCars.length;
// // console.log(getSumOfCars);
//
//
// // Task 3 - Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//
//
// // const getEducatedUsers = (arr: IUser[]) => {
// //     const newArray = arr.filter((user: IUser) => {
// //     return user.hasEducation === true
// //     })
// //     return newArray;
// // }
// // console.log(getEducatedUsers(users));
//
// const getEducatedUsers = (arr: IUser[]) => arr.filter((user: IUser) => user.hasEducation);
//
// const isEducated = users.filter(user => user.hasEducation === true);
// console.log(isEducated);
//
//
// // Task 4 - Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
// const hasAnimals = users.filter((user: IUser) => user.animals != undefined);
// console.log(hasAnimals);
//
//
// // Task 5 - Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
// const getArrayOfCars2: string = users.map((elem: IUser): IUser["cars"] => elem.cars?.join(", "));
// const makeArrayToString: string = getArrayOfCars2.toString()
// console.log(makeArrayToString);



interface IUser {
        id: number,
        email: string,
        first_name: string,
        last_name: string,
        avatar: string,
        age: number
    }

const users: Array<IUser> = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg",
        "age": 40
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
        "age": 36
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
        "age": 70
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
        "age": 45
    }
];

// 1. Получить строку с именами и фамилиями всех пользователей через запятую.

const getNamesInLine = (users: Array<IUser>) => users.map((user: IUser) => `${user.first_name} ${user.last_name}`).join(", ");
console.log(getNamesInLine(users));

// 2. Создать массив из emails по алфавиту.
const getEmails = (users: Array<IUser>) => users.map((user: IUser) => user.email).sort((a: string, b: string) => a.localeCompare(b));
console.log(getEmails(users));


// 3. Создать новый массив пользователей, где объект пользователя должен содержать только id и поле, отвечающее за имя пользователя(например username), которое должно содержать имя и фамилию.
const getUserIdCard = (users: Array<IUser>) => {
    return users.map((user: IUser) => {
        return {
            id: user.id,
            fullName: `${user.first_name} ${user.last_name}`
        }
    })
}
console.log(getUserIdCard(users));


// 4. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.
const sortUsersByAge = (users: Array<IUser>) => {
    const filteredUsers = users.filter((user: IUser) => user.age < 40);
    const sortedUsers = filteredUsers.sort(function compare(a: IUser,b: IUser) {
        if (a.age < b.age) {
            return -1;
        }
        if (a.age > b.age) {
            return 1;
        }
        return 0;
    })
    return sortedUsers;
}
console.log(sortUsersByAge(users));

// 5. Получить объект, где были бы
// a) данные о среднем возрасте пользователей
// b) количество пользователей старше 30
// c) количество пользователей старше 40
// d) количество пользователей старше 18

const getFilteredUsers = (age: number) => users.filter(user => user.age > age);
const getAverageAge = () => users.reduce((acc: number, user) => acc + user.age, 0) / users.length;

interface ICreatedObj {
    a: number;
    b: [IUser];
    c: [IUser];
    d: [IUser];
}



const createObject = (users: Array<IUser>): ICreatedObj => {
    return {
        a: getAverageAge(),
        b: getFilteredUsers(30),
        c: getFilteredUsers(40),
        d: getFilteredUsers(18),
    }
}
console.log(createObject(users));

// 6. Создать объект, где ключ, это первая буква фамилии, а значение - массив из фамилий пользователей начинающихся на эту букву. Объект должен состоять только из ключей существующих фамилий в этом массиве. Например в этом массиве нет фамилии с букву Y, а значит и такого поля не должно быть в объекте. Пример того, что надо получить, когда пользователи имеют следующие фамилии Snow, Felton , Ford, Ferdinand:
// { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }