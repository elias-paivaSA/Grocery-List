const input = document.getElementById("grocery");
const submitBtn = document.getElementById("btn");
const main = document.getElementById("main");
const clearButton = document.getElementById("clear");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = input.value;
    const newP = document.createElement("p");
    const textValue = newP.innerHTML = inputValue;
    main.appendChild(newP);
    console.log(inputValue.length);
    console.log(inputValue);
});

clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    main.remove(); 
});