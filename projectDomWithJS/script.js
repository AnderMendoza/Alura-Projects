const btn = document.querySelector("[data-form-btn]");

//arrow functions o funciones anonimas
const createTask = ((evento) => {
    evento.preventDefault();
    
    const input = document.querySelector("[data-form-input]");

    console.log(input.value);
})

console.log(btn);

//listener de un evento
//insertamos la referencia de createTask
btn.addEventListener("click", createTask);