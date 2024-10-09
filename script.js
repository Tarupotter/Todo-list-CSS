//deklarerar html element
const input = document.querySelector("#taskText");
const button = document.querySelector("#addButton");
const list = document.querySelector("ul");
const infoText = document.querySelector("#infoText");
const count = document.querySelector("#count");

//deklarerar variabler
let completedTask = 0;
const array = [];

// ger button en lyssnare
button.addEventListener("click", function () {
    //deklarerar text med användarens input som värde
    const text = input.value;
    // if sats för att ge meddelande om användare inte skriver något i input.
    if (text.length == 0) {
        infoText.classList.remove("hidden");
        infoText.classList.add("blink");
        infoText.innerText = "Input must not be empty!";
        setTimeout(function(){ infoText.classList.remove("blink")}, 1000); // timer till info texten så den blinkar 2 sek.
        return;
        
    }
    else {
        infoText.classList.add("hidden");
        infoText.classList.remove("blink");
        
    }

    //lägger till todos till listan
    const taskItem = document.createElement("li");
    list.appendChild(taskItem);

    

    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    taskItem.appendChild(itemLabel);
    itemLabel.classList.add("style");
    
    
    

    // Skapar en sopkorg
    const deleteTask = document.createElement("span");
    deleteTask.innerHTML = " 🗑️"; //sopkorgens look sätts in i texten
    deleteTask.setAttribute("class", "deleteTask");
    taskItem.appendChild(deleteTask);


    //lyssnare till task item, klicka på den så blir den struken samt ändrad till true.

    itemLabel.addEventListener("click", function () {

        if (taskItem.getAttribute("class") == "completed") {
            completedTask--;
            taskItem.setAttribute("class", "");
            todoObject.completed = false;

        }
        else {
            completedTask++;
            taskItem.setAttribute("class", "completed")
            todoObject.completed = true;

        }

        count.innerText = completedTask + " completed";

    });

    /* lyssnare till sopkorgen, ger den en funktion som ska:
     1. Radera när man trycker på papperskorgen. 
     2. Tömma arrayen med metoden splice.
    Börjar från indexplats 0 till arrayens slut.
    */
    deleteTask.addEventListener("click", function() {
        /* Så först måste du leta efter 
        den text som man har klickat på med en findIndex() metod. 
        Därefter kan du göra splice på rätt index.*/
        taskItem.remove();
        
    });


    

    //objekt som tar in texten och pushas in i min array.
    const todoObject = { text };
    todoObject.completed = false; // false som grund värde.
    array.push(todoObject);

    // input rutan till tomt efter varje task inskrivning.
    input.value = "";
}); 