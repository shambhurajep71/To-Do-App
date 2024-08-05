const createNewTask = document.querySelector(".create_new_task_btn");
const createNewTicket = document.querySelector(".create_new_ticket");
const cancelNewTask= document.querySelector(".cancel");
// creating New task using Nav bar button;
createNewTask.addEventListener("click", () => {
    createNewTicket.style.display = "flex";
});
// cancel creation for ne task
cancelNewTask.addEventListener("click", () => {
    createNewTicket.style.display = "none";
});
