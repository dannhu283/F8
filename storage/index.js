let msg = localStorage.getItem("msg");
console.log(msg);

localStorage.setItem("username", "dannhu");

localStorage.removeItem("msg");

let user = { id: 1, name: "nhu" };

localStorage.setItem("user", user);

let userjson = JSON.stringify(user);
localStorage.setItem("userJson", userjson);

let userStorageJson = localStorage.getItem("userjson");
let userObject = JSON.parse(userStorageJson);
console.log("userObject:", userObject);
