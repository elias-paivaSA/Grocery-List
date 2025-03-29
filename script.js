const submitBtn = document.getElementById("submitBtn");
const main = document.getElementById("main");
const textInput = document.getElementById("textInput");
const clearButton = document.getElementById("clear");
const mainWrapper = document.getElementById("mainWrapper");


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
   const divWrapper = document.createElement("div");
   divWrapper.id = "main-wrapper";
   main.appendChild(divWrapper);
   const pWrapper = document.createElement("p");
   pWrapper.id = "mainP"
   pWrapper.innerHTML = textInput.value;
   divWrapper.appendChild(pWrapper);
   const btnWrappe1r = document.createElement("button");
   btnWrappe1r.id = "mainBtn1";
   btnWrappe1r.innerHTML = "Edit";
   divWrapper.appendChild(btnWrappe1r);
   const btnWrappe2r = document.createElement("button");
   btnWrappe2r.id = "mainBtn2";
   btnWrappe2r.innerHTML = "Delete";
   divWrapper.appendChild(btnWrappe2r);
   form.reset();

   btnWrappe1r.addEventListener("click", function() {
    const editInput = btnWrappe1r.previousSibling.innerHTML;
    const inputLine = textInput.value = editInput;
    btnWrappe1r.parentElement.remove();
});

btnWrappe2r.addEventListener("click", function() {
    btnWrappe2r.parentElement.remove();
});

});


clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    main.remove(); 
});
