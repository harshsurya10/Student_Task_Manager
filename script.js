function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    const date = document.getElementById("dateInput").value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText} - Due: ${date}</span>
        <button class="delete-btn" onclick="deleteTask(this)">
            Delete
        </button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}
