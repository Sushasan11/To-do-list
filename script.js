document.addEventListener("DOMContentLoaded", () => {
  // Select input field and add button
  const inputField = document.getElementById("inputfield");
  const addButton = document.getElementById("addbtn");
  const todoApp = document.getElementById("todoapp");
  const chime = document.getElementById("chime");
  const remove = document.getElementById("delete");

  // Function to add a new to-do item
  const addTodo = () => {
    const inputValue = inputField.value.trim();
    if (inputValue) {
      // Create a new div for the to-do item
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo-item");

      // Create a new paragraph element for the to-do text
      const todoText = document.createElement("p");
      todoText.classList.add("paragraph-styling");
      todoText.innerText = inputValue;

      // Add event listener for marking the item as completed
      todoText.addEventListener("click", () => {
        todoText.style.textDecoration = "line-through";
        chime.play();
      });

      // Create a remove button
      const removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.classList.add("remove-btn");

      // Add event listener for the remove button
      removeButton.addEventListener("click", () => {
        todoApp.removeChild(todoItem);
        remove.play();
        setTimeout(() => {
            todoApp.removeChild(todoItem);
        }, remove.duration * 2000)
      });

      // Append the text and remove button to the todo item
      todoItem.appendChild(todoText);
      todoItem.appendChild(removeButton);

      // Append the new to-do item to the to-do list
      todoApp.appendChild(todoItem);

      // Clear the input field
      inputField.value = "";
    }
  };

  // Add event listener for the add button
  addButton.addEventListener("click", addTodo);

  // Add event listener for pressing the 'Enter' key to add a to-do item
  inputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") addTodo();
  });
});
