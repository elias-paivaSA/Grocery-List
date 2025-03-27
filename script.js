const input = document.getElementById("grocery");
const submitBtn = document.getElementById("btn");
const main = document.getElementById("main");
const clearButton = document.getElementById("clear");
const form = document.getElementById("form")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = input.value;
    const newP = document.createElement("p");
    const newButton1 = document.createElement("button");
    const newButton2 = document.createElement("button");
    const textValue = newP.innerHTML = inputValue;
    const wrapP = document.createElement("")
    main.appendChild(newP);
    main.appendChild(newButton1);
    main.appendChild(newButton2);
    newButton1.id = "button1";
    newButton2.id = "button2";
    newButton1.innerHTML = "Edit";
    newButton2.innerHTML = "Delete";
    form.reset();
});

clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    main.remove(); 
});