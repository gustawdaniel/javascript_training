import $ from 'jquery';
import Employee from "./Employee.js";

let employee1 = new Employee("Jan", "Kowalski", "programista");

console.log( employee1.sayHello() );

$('body').append(`<pre>${employee1.sayHello()}</pre>`);