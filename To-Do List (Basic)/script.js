let input = document.getElementById('taskInput');
let addButton = document.getElementById('addTaskButton');
let taskList = document.getElementById('taskList');

addButton.addEventListener('click', function () {
    let taskText = input.value.trim();
    if (taskText !== '') {
        let taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(taskItem);
        input.value = '';
        let deleteButton = taskItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(taskItem);
        });
    }
});