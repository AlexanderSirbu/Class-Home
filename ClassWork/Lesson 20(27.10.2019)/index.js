const addButton = document.getElementById("todo-add");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

function addToDo() {
    if (!todoInput.value) { //мы добавсли что input.value ресетиться после добавления , todoInput.value = "";, но теперь нужно сделать так что если пустое место нельзя добавить в todoList,и для этого и есть этот if
        return;
    }


    const todoValue = todoInput.value; //записываем в переменную value todoInputa
    const liElement = document.createElement("li"); //Записываем в перем. что она будет создавать li

    liElement.classList.add("list-group-item"); //add class in teg li
    liElement.innerText = todoValue; //показываем что значения в созданом теге ли будет с todoInputa.value

    const closeIcon = document.createElement("span"); //это переменная овтечает за то что будет создавать тег span в li
    closeIcon.innerText = "X";
    closeIcon.classList.add("close-icon") //в Spane будет прописанно X


    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    todoCheckbox.classList.add("todo-checkbox")

    liElement.prepend(todoCheckbox); //создаем input c type checkbox
    liElement.appendChild(closeIcon); // создаем спан елемент в ли 
    todoList.appendChild(liElement); //создает li емент в todoliste

    todoInput.value = ""; //ресэтит валуе в инпуте после того как добавили 

}



function removeTodo(event) {
    if (event.target.classList.contains("close-icon")) { // при нажатиия на класс-икон, который X , будет вывведен eventlist,у которого в списке есть target и в targete есть  class close-icon
        console.log(event);
        event.target.closest("li").remove(); //remove
        console.log(todoList);
    }
};

function completeTodo(event) {
    if (event.target.classList.contains("todo-checkbox")) {
        if (event.target.checked) {
            event.target.closest("li").classList.add("todo-done");
        } else {
            event.target.closest("li").classList.remove("todo-done")
        }
    }
}



todoList.addEventListener('click', removeTodo);
todoList.addEventListener('click', completeTodo);
addButton.addEventListener('click', addToDo); //функция add в список todo   