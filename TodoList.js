let todoItems = []; // Array to store to-do items

// Function to add a new item to the list
function addItem() {
    let newItem = document.getElementById("todoInput").value;
    if (newItem.trim() !== "") { // Fix: Trim input to prevent blank entries with spaces
        todoItems.push(newItem);
        document.getElementById("todoInput").value = ""; // Clear input field
        updateList();
    } else {
        alert("Please enter a to-do item.");
    }
}

// Function to update the displayed list
function updateList() {
    let list = document.getElementById("todoList");
    list.innerHTML = ""; // Clear current list

    todoItems.forEach((item, index) => { // Fix: Changed loop to use forEach for cleaner syntax
        let listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.dataset.index = index; // Add data attribute for the index
        listItem.addEventListener("click", removeItem);
        list.appendChild(listItem);
    });
}

// Function to remove an item from the list
function removeItem(event) {
    let index = event.target.dataset.index; // Fix: Use dataset to get the correct index
    todoItems.splice(index, 1); 
    updateList();
}

// Add event listener after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addButton");
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");

    // Check if elements exist
    if (addButton && todoInput && todoList) {
        addButton.addEventListener("click", addItem);
    } else {
        console.error("Required elements not found in the DOM.");
    }
});