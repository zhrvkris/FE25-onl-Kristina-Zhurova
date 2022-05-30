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

// // 1 task
// interface IUser {
//     id: number,
//     email: string,
//     first_name: string,
//     last_name: string,
//     avatar: string,
//     age: number,
// }
//
// const users: IUser[]= [
//     {
//         "id": 7,
//         "email": "michael.lawson@reqres.in",
//         "first_name": "Michael",
//         "last_name": "Lawson",
//         "avatar": "https://reqres.in/img/faces/7-image.jpg",
//         "age": 23
//     },
//     {
//         "id": 8,
//         "email": "lindsay.ferguson@reqres.in",
//         "first_name": "Lindsay",
//         "last_name": "Ferguson",
//         "avatar": "https://reqres.in/img/faces/8-image.jpg",
//         "age": 20
//     }
// ];

// // 2 task
//
// interface IProduct {
//     id: number
//     name: string
//     price: number
//     currency: string
//     ingredients: string[]
//     type: string
//     available: boolean
// }
//
// const products: IProduct[] = [
//     {
//         id: 1,
//         name: "Burger Premium",
//         price: 6,
//         currency: "euro",
//         ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
//         type: "burger",
//         available: true
//     },
//     {
//         id: 2,
//         name: "Burger Lite",
//         price: 2,
//         currency: "euro",
//         ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
//         type: "burger",
//         available: true
//     },
// ];

// // 3 task
//
// const getUser = (id: number, users: IUser[]) => {
//     return users.find((user: IUser) => user.id === id);
// };
// console.log(getUser(7, users));
//
// const arrayString: string[] = ["1", "2", "3"];
// const arrayNumbers: number[] = arrayString.map((elem: string) => +elem);
//
// console.log(arrayString);
// console.log(arrayNumbers);
//
// const getter = (data: any): any => data;
// console.log(getter(data: "hello").length);
//
// const baz = <T,>(dataL T): T => data;
// console.log(baz(data: "hello").length);


// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//     1. Создать строку из названий стран через запятую
// 2. Посчитать общее количнство людей в данном массиве стран.
// 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
// 4. Получить массив валют.
// 5. Получить массив городов, отсортированных в алвавитном порядке.
// 5. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

    interface ICountry {
    country: string;
    abbreviation: string;
    city: string;
    currency_name: string;
    population: number;
}

    const countries: Array<ICountry> = [
        {
            country: "United Arab Emirates",
            abbreviation: "AE",
            city: "Abu Dhabi",
            currency_name: "Arab Emirates Dirham",
            population: 9630959

        },
        {
            country: "Poland",
            abbreviation: "PL",
            city: "Warszawa",
            currency_name: "Polish Zloty",
            population: 37974750
        },
        {
            country: "Russian Federation",
            abbreviation: "RU",
            city: "Moscow",
            currency_name: "Russian Ruble",
            population: 144478050
        }
    ]

const countriesInline: string = countries.map((elem: ICountry): ICountry["country"] => elem.country).join(", ");
const allPeople: number = countries.reduce((acc: number, country: ICountry) => acc + country.population, 0);
console.log(allPeople);

const sortCountriesByName = (array: Array<ICountry>) => {
    return [...countries].sort((a: ICountry, b: ICountry) => {
        if (a.country < b.country) {
            return -1;
        }
        if (a.country > b.country) {
            return 1;
        }
        return 0;
    })
}
console.log(sortCountriesByName(countries));

// return […data].sort((a, b) => a.country.localCompare(b.country))