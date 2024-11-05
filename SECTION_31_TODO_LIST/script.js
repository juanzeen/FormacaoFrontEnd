//elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-inp");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseButton = document.querySelector(".erase-button");
const filterBtn = document.querySelector("#filter-select");

let oldInputValue;

//funções
//parametros usados para resgatar as tarefas do localstorage
//para a criação do usuário os parametros default sá o suficiente
const saveTodo = (text, done = false, save = 1) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;

  todo.appendChild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);

  //utilizando dados do local storage
  if (done) {
    todo.classList.add("done");
  }

  if (save) {
    //usamos a desestruturação no parâmetro dessa função abaixo
    //isso pois esse dado chega como objeto
    saveTodoLocalStorage({ text, done });
  }

  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput.focus();
};

const toggleForms = () => {
  editForm.classList.toggle("hiden");
  todoForm.classList.toggle("hiden");
  todoList.classList.toggle("hiden");
};

const updateTodo = (txt) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    let todoTtl = todo.querySelector("h3");

    //checa se o titulo da todo atual é igualk o antigo titulo dela
    if (todoTtl.innerText === oldInputValue) {
      todoTtl.innerText = txt;
      updateTodoLocalStorage(oldInputValue, txt);
    }
  });
};

const getSearchTodos = (searchP) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    let todoTtl = todo.querySelector("h3").innerText.toLowerCase();

    const normalizedSearch = searchP.toLowerCase();

    todo.style.display = "flex";

    todoTtl.includes(normalizedSearch)
      ? (todo.style.display = "flex")
      : (todo.style.display = "none");
  });
};

const filterTodos = (filter) => {
  const todos = document.querySelectorAll(".todo");

  switch (filter) {
    case "all":
      todos.forEach((todo) => {
        todo.style.display = "flex";
      });
      break;

    case "done":
      todos.forEach((todo) => {
        todo.classList.contains("done")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none");
      });
      break;

    case "todo":
      todos.forEach((todo) => {
        todo.classList.contains("done")
          ? (todo.style.display = "none")
          : (todo.style.display = "flex");
      });
      break;
  }
};

//eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    //nao precisamos de todos os parametros pois a função tem parametros default
    saveTodo(inputValue);
  }
});

// um evento de click em todo o documento, dentro do evento checaremos o elemento clicado
document.addEventListener("click", (e) => {
  // o próprio elemento clicado
  const targetEl = e.target;
  // as coisas são aplicadas no elemento pai, pois queremos modificar a tarefa concluída
  //o evento é passado no botão, que está dentro da div
  const parentEl = targetEl.closest("div");
  let todoTitle;

  if (parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerText;
  }

  // checa se o elemento tem determinada classe
  if (targetEl.classList.contains("finish-todo")) {
    // toggle -> se tem a classe tira, se não tem coloca.
    parentEl.classList.toggle("done");
    updateTodoStatusLocalStorage(todoTitle);
  }

  if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove();
    removeTodoLocalStorage(todoTitle);
  }

  if (targetEl.classList.contains("edit-todo")) {
    toggleForms();

    oldInputValue = todoTitle;
    editInput.value = oldInputValue;
    editInput.focus();
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();

  toggleForms();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    updateTodo(editInputValue);
  }

  toggleForms();
});

searchInput.addEventListener("keyup", (e) => {
  //como o alvo é um input, podemos pegar direto o value dentro do target
  const search = e.target.value;
  getSearchTodos(search);
});

eraseButton.addEventListener("click", (e) => {
  e.preventDefault();

  searchInput.value = "";
  //nossos todos só voltam com o evento de keyUp passada na função getSearch
  //para resolver isso disparamos nesse evento de click um evento de keyUp manualmente!
  searchInput.dispatchEvent(new Event("keyup"));
});

filterBtn.addEventListener("change", (e) => {
  const filterValue = e.target.value;
  filterTodos(filterValue);
});

//local storage
const getTodosLocalStorage = () => {
  //pra salvar na localStorage precisamos que esteja em JSON, inicialmente vinha como texto
  //usamos o || para que caso não tenha nenhum elemento, seja retornado um array vazio
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
};

const saveTodoLocalStorage = (todo) => {
  const todos = getTodosLocalStorage();

  //salvando dentro do array
  todos.push(todo);

  //setItem salva o item, precisamos fazer o stringify para que fique armazenado direito.
  localStorage.setItem("todos", JSON.stringify(todos));
};

const loadTodos = () => {
  const todos = getTodosLocalStorage();

  todos.forEach((todo) => {
    //passamos a mesma função que usamos para salvar as toDos, mas dessa vez usando os parâmetros
    //isso pois queremos que as tarfas sejam carregadas em seus estados corretos e
    //não queremos que elas sejam salvas novamente na localStorage
    saveTodo(todo.text, todo.done, 0);
  });
};

const removeTodoLocalStorage = (todoText) => {
  const todos = getTodosLocalStorage();

  const filteredTodos = todos.filter((todo) => todo.text !== todoText);
  localStorage.setItem("todos", JSON.stringify(filteredTodos));
};

const updateTodoStatusLocalStorage = (todoText) => {
  const todos = getTodosLocalStorage();

  todos.map((todo) =>
    todo.text === todoText ? (todo.done = !todo.done) : null
  );

  localStorage.setItem("todos", JSON.stringify(todos));
};

const updateTodoLocalStorage = (todoOldText, todoNewText) => {
  const todos = getTodosLocalStorage();

  todos.map((todo) =>
    todo.text === todoOldText ? (todo.text = todoNewText) : null
  );

  localStorage.setItem("todos", JSON.stringify(todos));
};

loadTodos();
