const submitBtn = document.getElementById("submitBtn");
const main = document.getElementById("main");
const textInput = document.getElementById("textInput");
const clearButton = document.getElementById("clear");


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
    console.log(btnWrappe1r.previousSibling.innerHTML);
});
});


clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    main.remove(); 
});
