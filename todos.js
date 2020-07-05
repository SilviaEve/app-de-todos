var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos() {

    listElement.innerHTML = '';
    for (todo of todos) {
        var todosElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todosElement.appendChild(todoText);
        listElement.appendChild(todosElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;
