/*
  1. Todo list с массивом даных todos: []
  2. Реализуем параметр done у объекта todo
  3. Удаляем todo через метод filter
  4. Добавим время выполнения задачи
  5. Сортировка asc, desc
  6. Общее время открытых задач с помощью reduce
*/

document.addEventListener("DOMContentLoaded", function () {
  const createTaskButton = document.querySelector(".todo__create-button"); //вместо кнопки будем использовать submit формы
  const sortByDoneButton = document.querySelector(".todo__sort-button.done"); 
  const sortByTimeButton = document.querySelector(".todo__sort-button.time"); 
  const todoTextInput = document.querySelector(".todo__text-input");
  const todoTimeInput = document.querySelector(".todo__time-input");
  const todoList = document.querySelector(".todo__list");
  const todoForm = document.querySelector(".todo__form");
  const timeValue = document.querySelector(".todo__time-value");

  const SORT_TYPES = {
    asc: 'asc',
    desc: 'desc',
  }


  let todos = [];
  let sortType = null;

  function renderTodos() {
    const todeNodes = todos.map(createTodo);
    todoList.innerHTML = "";
    todeNodes.forEach(function(todoNode) {
      todoList.appendChild(todoNode);
    });

    const timeSumCompleted = todos.reduce(function(acc,curr,idx){
      if (!curr.done) {
        acc += Number(curr.time);
      }
      return acc;
    },0);

    
    timeValue.textContent = timeSumCompleted;

    saveToLocalStorage();
  }

  function checkLocalStorage() {
    const todosFromLocalStorage = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todosFromLocalStorage);
    //if (parsedTodos && parsedTodos.length >0) {
    if (parsedTodos?.length >0){ //? проверяет parsedTodos на null
      todos = parsedTodos;
    }
    renderTodos();
  }

  checkLocalStorage();

  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function todoItemListener(event) {
    const current = event.target; // Свойство target интерфейса Event является ссылкой на объект, который был инициатором события. 
    const parentNode = current.closest("li"); //Метод Element.closest() возвращает ближайший родительский элемент 
    const isDeleteButton = event.target.closest(".todo__remove-button");
    const isDoneButton = event.target.closest(".todo__done-button");
    const parentNodeId = parentNode.id;
 
    if (isDeleteButton) {
      todos = todos.filter(function (todo) {
        return todo.id !== Number(parentNodeId)
      });
    } else if (isDoneButton) {
      todos.forEach(function (todo) {
        if (todo.id === Number(parentNodeId)) {
          todo.done = !todo.done;
        }
      });
    }
    renderTodos();
  }

  function createTodo(todo) {
    const liElement = document.createElement("li");
    liElement.id = todo.id;
    liElement.classList.add("todo__item");

    const todoTemplate = `
      <span class="todo__item-text">${todo.text}</span>
      ${todo.time ? `<span class="todo__item-time">${todo.time}</span>`:''}
      <div class="todo__controls">
        <button class="todo__done-button">Выполнено</button>
        <button class="todo__remove-button">Удалить</button>
      </div>
    `;

    liElement.innerHTML = todoTemplate;

    if (todo.done) {
      liElement.classList.add("done");
    }

    liElement.addEventListener("click", todoItemListener);
    return liElement;    

  }

   //  Подписываемся на submit формы
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = todoTextInput.value;
    const todoTime = todoTimeInput.value;
    const trimmedText = todoText.trim();
    const todo = {
        id: Date.now()+1,
        text: trimmedText,
        done: false,
        time: todoTime
      };
    // debugger;
    if (trimmedText) {
      todos.push(todo);
      renderTodos();
      todoTextInput.value = "";
      todoTimeInput.value = "";
      todoTextInput.focus(); //установка фокуса
    }
  });

  function sortByKey(key) {
    if (!sortType || sortType === SORT_TYPES.desc) {
      todos.sort(function(a,b) {
        return Number(a[key]) -Number(b[key]);
      });
      sortType = SORT_TYPES.asc;

    } else {
      todos.sort(function(a,b) {
        return Number(b[key]) - Number(a[key]);
      });
      sortType = SORT_TYPES.desc;
    }

    renderTodos();
  }

  sortByDoneButton.addEventListener('click',function(){
    sortByKey('done');
  });
  sortByTimeButton.addEventListener('click',function(){
    sortByKey('time');
  });


});