function addTodo() {
    // Get the input element and its value
    const input = document.getElementById("todo-input");
    // Get value and trim whitespace from start/end
    const inputValue = input.value.trim();

    // Check to se eif the input value isnt empty
    if (inputValue !== "") {
        // Create a new list item
        // Get the unorder list:
        const todoList = document.getElementById("todo-list");
        // Create a list item using createElement:
        const li = document.createElement("li");
        // Create a checkbox using createElement:
        const checkbox = document.createElement("input");
        // Set checkbox input to a checkbox:
        checkbox.type = "checkbox";
        // Create a textNode that uses the inputvalue
        const textNode = document.createTextNode(inputValue);

        // Append checkbox and text to the list item:
        li.appendChild(checkbox);
        li.appendChild(textNode);
        // Append the list item to the ul of todo list:
        todoList.appendChild(li);
    } else {
        // Alert user if value is empty
        alert("Please enter a valid todo item");
    }
}