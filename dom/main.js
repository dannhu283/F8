const h1DOM = document.createElement("h1");

h1DOM.title = "Hello";
h1DOM.className = "heading";

h1DOM.innerText = "Hello guys";

document.body.appendChild(h1DOM);

//react

//React.createElement(type,props,chidlen,n)

const h1React = React.createElement(
  "h1",
  {
    title: "Hello",
    className: "heading",
  },
  "hello guys"
);

//bt2

const ulDOM = document.createElement("ul");
ulDOM.id = "ul-id";
ulDOM.style = "color:red;font-size:100px";

const liDOM1 = document.createElement("li");
liDOM1.innerText = "javascript";

const liDOM2 = document.createElement("li");
liDOM2.innerText = "Reacjs";

ulDOM.appendChild(liDOM1);
ulDOM.appendChild(liDOM2);

document.body.appendChild(ulDOM);

//react
const ulReact = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "javascript"),
  React.createElement("li", null, "React")
);

console.log(ulReact);

//bt3

const divReact = React.createElement(
  "div",
  { className: "post-item" },
  React.createElement("h2", { title: "học React tại F8" }, "học ReactJs"),
  React.createElement("p", null, "Học react từ cơ bản đến nâng cao")
);

const container = document.getElementById("root");
///react-dom-> render UI version 17
ReactDOM.render(divReact, root);
ReactDOM.render(ulReact, root);
