const list = document.getElementById("list");

const li = document.createElement("li");
li.textContent = "I'm a new element";

list.insertAdjacentElement("beforeend", li);
