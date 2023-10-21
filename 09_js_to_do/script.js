document.addEventListener("DOMContentLoaded", function () {
  const createTaskButton = document.querySelector(".todo__create-button"); //вместо кнопки будем использовать submit формы
  const todoTextInput = document.querySelector(".todo__text-input");
  const todoList = document.querySelector(".todo__list");
  const todoForm = document.querySelector(".todo__form");

  let todos = [
    {
      id: Date.now(),
      text: "",
      done: false,
    },
  ];

  function checkLocalStorage() {
    const todos = localStorage.getItem("todos");

    if (todos) {
      todoList.innerHTML = todos;
      const todosArr = todoList.querySelectorAll(".todo__item");

      todosArr.forEach(function (todo) {
        todo.addEventListener("click", todoItemListener);
      });
    }
  }

  checkLocalStorage();

  function saveToLocalStorage() {
    localStorage.setItem("todos", todoList.innerHTML);
  }

  function todoItemListener(event) {
    const current = event.target; // Свойство target интерфейса Event является ссылкой на объект, который был инициатором события. 
    const parentNode = current.closest("li"); //Метод Element.closest() возвращает ближайший родительский элемент 
    const isDeleteButton = event.target.closest(".todo__remove-button");
    const isDoneButton = event.target.closest(".todo__done-button");
 
    if (isDeleteButton) {
      parentNode.remove();
    } else if (isDoneButton) {
      parentNode.classList.toggle("done"); //Если заданный класс у элемента отсутствует, то он добавляется, если такой класс есть, то класс удаляется. 
    }
  }

  function createTodo(text) {
    const liElement = document.createElement("li");

    liElement.classList.add("todo__item");

    const todoTemplate = `
      <span class="todo__item-text">${text}</span>
      <div class="todo__controls">
        <button class="todo__done-button">Выполнено</button>
        <button class="todo__remove-button">Удалить</button>
      </div>
    `;

    liElement.innerHTML = todoTemplate;

    liElement.addEventListener("click", todoItemListener);

    todoList.appendChild(liElement);
  }

   //  Подписываемся на submit формы
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = todoTextInput.value;
    const trimmedText = todoText.trim();

    if (trimmedText) {
      createTodo(todoText);
      todoTextInput.value = "";
      todoTextInput.focus(); //установка фокуса

      saveToLocalStorage();
    }
  });
});

/*
  1. Добавить задачу
  2. Очистить поле ввода
  3. Обработка блока - нет задач
  4. Удаляем задачу
  5. Задача выполнена
*/
