document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete')) {
            event.target.parentElement.remove();
        } else if (event.target.type === 'checkbox') {
            const taskText = event.target.nextElementSibling;
            if (event.target.checked) {
                taskText.classList.add('completed');
            } else {
                taskText.classList.remove('completed');
            }
        }
    });
});
