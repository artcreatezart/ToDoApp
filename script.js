function addTodo() {
    // Get the input element and its value
    const input = document.getElementById("todoInput");
    // Get value and trim whitespace from start/end
    const inputValue = input.value.trim();

    // Check to se eif the input value isnt empty
    if (inputValue !== "") {
        // Create a new list item
        // Get the unorder list:
        const todoList = document.getElementById("todoList");
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

// Add event listener to the "Add button" to add new item:
document.getElementById('addButton').addEventListener("click", addTodo);

// Event listener to mark todo items as completed

// onchange event on the todo-list item:
document.getElementById("todoList").addEventListener("change", function(event) {
    // check if the event trigger was a checkbox 
    if (event.target.type === "checkbox") {
        // Get the parent list item of the checkbox
        const listItem = event.target.parentNode;
        // check if the checkbox is checked or not:
        if (event.target.checked) {
            // Apply line-through style when the checkbox is checked:
            listItem.style.textDecoration = "line-through";
        } else {
            // Remove the line-through when unchecked:
            listItem.style.textDecoration = "none";
        }
    }
})