document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");

  const priorityDropdown = document.createElement("select");
  priorityDropdown.id = "dropdown";
  priorityDropdown.innerHTML = `
    <option value="outing">Outing</option>
    <option value="studies">Studies</option>
    <option value="indoors">Indoors</option>
  `;
  form.insertBefore(priorityDropdown, form.lastElementChild);

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const taskDescription = document.getElementById("new-task-description").value;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    document.getElementById("new-task-description").value = "";
  });
});
