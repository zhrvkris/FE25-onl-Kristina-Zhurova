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

interface IUser {
    name:  string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean
}

const users: Array<IUser> = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

// Task 1 - Создать строку из имен пользователей через запятую done

const getListOfUsers: string = users.map((elem: IUser): IUser["name"] => elem.name).join(", ");
console.log(getListOfUsers);


// Task 2 - Посчитать общее количнство машин у пользователей

const getArrayOfCars: string = users.map((elem: IUser): IUser["cars"] => elem.cars?.join(", "));
// console.log(getArrayOfCars);
const getSumOfCars: number = getArrayOfCars.length;
console.log(getSumOfCars);


// Task 3 - Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

// const isEducated = users.filter(user => user.hasEducation === true);
const isEducated = users.filter(user => user.hasEducation === true);
console.log(isEducated);


// Task 4 - Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
const hasAnimals = users.filter(user => user.animals != undefined);
console.log(hasAnimals);


// Task 5 - Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
const getArrayOfCars2: string = users.map((elem: IUser): IUser["cars"] => elem.cars?.join(", "));
const makeArrayToString: string = getArrayOfCars2.toString()
console.log(makeArrayToString);

