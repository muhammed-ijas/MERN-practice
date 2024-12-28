// LocalStorage is a web storage API in JavaScript that allows you to store key-value pairs directly in a user's browser. The stored data has no expiration time, meaning it persists even after the browser is closed and reopened.

localStorage.setItem("userName","ijas");
const user = localStorage.getItem("userName")
console.log(user);