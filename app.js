document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("addTask");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", () => {
    const task = taskInput.value;
    if (task) {
      const listItem = document.createElement("li");
      const taskText = document.createElement("span");
      taskText.textContent = task;
      listItem.appendChild(taskText);

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className =
        "bg-blue-700 text-white font-bold py-1 px-2 ml-2 rounded cursor-pointer";
      listItem.appendChild(editButton);

      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.className =
        "bg-green-700 text-white font-bold py-1 px-2 ml-2 rounded cursor-pointer";
      listItem.appendChild(completeButton);

      completeButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
      });

      editButton.addEventListener("click", () => {
        const newTask = prompt("Edit your task:", taskText.textContent);
        if (newTask !== null) {
          taskText.textContent = newTask;
        }
      });

      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  });
});
