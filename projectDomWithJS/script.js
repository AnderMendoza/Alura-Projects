const btn = document.querySelector("[data-form-btn]");

//arrow functions o funciones anonimas
const createTask = ((evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    //backlist
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerHTML = value;
    taskContent.appendChild(titleTask);
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent);

    list.appendChild(task);

    console.log(content);
})

console.log(btn);

//listener de un evento
//insertamos la referencia de createTask
btn.addEventListener("click", createTask);
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    return i
}