const todos = 
[
    {
        text: 'Estudiar ingles',
        completed: true
    },
    {
        text: 'Estudiar Javascript',
        completed: true
    },
    {
        text: 'Estudiar Matematicas',
        completed: false
    },
    {
        text: 'Limpiar el perro',
        completed: false
    }
];

const insertTodos = (todos) => {
    const ul = document.createElement('ul');
    todos.forEach((todo) => {
        const li = document.createElement('li');
        const pText = document.createElement('p');
        const pCompleted = document.createElement('p');

        pText.textContent = todo.text;
        pCompleted.textContent = todo.completed ? 'Completada: Sí' : 'Completada: No';

        const classForCompleted = todo.completed ? 'completed' : 'notCompleted';

        pCompleted.classList.add(classForCompleted);
        pText.classList.add('text');

        li.appendChild(pText);
        li.appendChild(pCompleted);
        ul.appendChild(li);
        document.querySelector('#divTodo').appendChild(ul);
    });
}

const removeTodos = () =>{
    const lis = document.querySelectorAll('#divTodo li');
    lis.forEach((li)=>{
        li.remove();
    });
}

const addTodo = (text,completed) =>{
    const todo = {text,completed};
    todos.push(todo);
    removeTodos();
    insertTodos(todos);
}

const renderFilteredTodos = (todos,filters) => {
    const filteredTodos = todos.filter((todo)=>{
        const textToFilter = todo.text.toLowerCase();
        return textToFilter.includes(filters.toLowerCase());
    });
    removeTodos();
    insertTodos(filteredTodos);
}


insertTodos(todos);

document.querySelector('#divSearch').addEventListener('input',(e)=>{
    renderFilteredTodos(todos,e.target.value);
});

document.querySelector('#buttonAdd').addEventListener('click',() => {
    const text = document.querySelector('#inputAdd').value;
    const isCompleted = document.querySelector('#inputIsCompleted').value === 'true';
    console.log(isCompleted);
    addTodo(text,isCompleted);
});




