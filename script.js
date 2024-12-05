document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskValue = taskInput.value.trim();

  if (taskValue === '') return;

  const taskList = document.getElementById('task-list');

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.textContent = taskValue;

  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(removeBtn);
  taskList.appendChild(taskItem);

  taskInput.value = '';
}
