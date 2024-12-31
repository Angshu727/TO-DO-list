const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const headerTitle = document.querySelector('.header-title');
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const taskDate = document.getElementById('task-date');
const taskTime = document.getElementById('task-time');

// Theme Toggle
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        themeIcon.src = 'https://cdn-icons-png.freepik.com/512/5976/5976747.png?ga=GA1.1.634825733.1725980049'; 
        themeIcon.alt = 'Dark Mode';
        headerTitle.style.color = '#ffffff';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        themeIcon.src = 'https://cdn-icons-png.freepik.com/512/2689/2689567.png?ga=GA1.1.634825733.1725980049';
        themeIcon.alt = 'Light Mode';
        headerTitle.style.color = '#000000';
    }
});

// Add Task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const date = taskDate.value;
    const time = taskTime.value;

    if (taskText && date && time) {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <span>(${date} ${time})</span> <button>Delete</button>`;
        li.querySelector('button').addEventListener('click', () => li.remove());
        taskList.appendChild(li);
        taskInput.value = '';
        taskDate.value = '';
        taskTime.value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
