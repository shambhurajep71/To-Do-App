const createNewTask = document.querySelector(".create_new_task_btn");
const createNewTicket = document.querySelector(".create_new_ticket");
const cancelNewTask = document.querySelector(".cancel");
const mainCretatedTicketContainer = document.querySelector(".main_created_ticket_container");
const create = document.querySelector(".create");
const ticketTextarea = document.querySelector(".ticket_textarea");
const ticketStatusContainer=document.querySelectorAll(".ticket_status_conatiner");
//default value of newly created ticket
 let ticketStatusColor="black";
 let ticketStatus="";
// creating New task using Nav bar button;
createNewTask.addEventListener("click", (event) => {
    createNewTicket.style.display = "flex";
});
// cancel creation of new task
cancelNewTask.addEventListener("click", () => {
    createNewTicket.style.display = "none";
});

//creating tickets dynamically

function newTicket(ticketInfo) {
    const newTicket = document.createElement("div");
    newTicket.setAttribute("class", "created_ticket");
    newTicket.innerHTML = ` <div class="created_ticket_status ${ticketStatusColor}">${ticketStatus} </div>
            <div class="created_ticket_id">${shortid()}</div>
            <div class="created_ticket_textarea">
            ${ticketInfo}
            </div>
            <div class="created_ticket_edit">Edit</div>
         <div class="created_ticket_delete">Delete</div>`
    mainCretatedTicketContainer.appendChild(newTicket);
}

create.addEventListener("click", (event) => {
    newTicket(ticketTextarea.value);// passing the task info entered by user
    createNewTicket.style.display = "none";
    //clearing the text area of new task that we are creating from navbar
    ticketTextarea.value = "";
});

//getting access to ticket status color and ticket status of a ticket getting created from
//navbar

ticketStatusContainer.forEach((ticketElem)=> {
    ticketElem.addEventListener("click",(event)=> {
        console.log(event);
        ticketStatusColor=event.target.classList[0];
        ticketStatus=event.target.innerText;  
    })
})