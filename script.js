const createNewTask = document.querySelector(".create_new_task_btn");
const createNewTicket = document.querySelector(".create_new_ticket");
const cancelNewTask = document.querySelector(".cancel");
const mainCreatedTicketContainer = document.querySelector(".main_created_ticket_container");
const create = document.querySelector(".create");
const ticketTextarea = document.querySelector(".ticket_textarea");
const ticketStatusContainer = document.querySelectorAll(".new_ticket");
const deleteTicket = document.querySelector(".created_ticket_delete");

//default value of newly created ticket
let ticketStatusColor = "done";
let ticketStatus = "Done";
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
    newTicket.innerHTML = ` <div class="status ${ticketStatusColor}">${ticketStatus} </div>
            <div class="id">${shortid()}</div>
            <div class="textarea">
            ${ticketInfo}
            </div>
            <div class="edit">Edit</div>
         <div class="delete">Delete</div>`
    mainCreatedTicketContainer.appendChild(newTicket);
    //calling the delete function
    deleteTask(newTicket);
    //calling the update functionalty
    updateTask(newTicket);
    //enableUpdate button
    enableUpdate(newTicket);
    //canceling the edit 
    cancelEdit(newTicket);

}

create.addEventListener("click", (event) => {
    newTicket(ticketTextarea.value);// passing the task info entered by user
    createNewTicket.style.display = "none";
    //clearing the text area of new task that we are creating from navbar
    ticketTextarea.value = "";
    cleanupStatus();
});

//getting access to ticket status color and ticket status of a ticket getting created from
//navbar

const cleanupStatus = () => ticketStatusContainer.forEach((statuselem) => {
    statuselem.classList.remove("active_ticket_status");
})
ticketStatusContainer.forEach((ticketElem) => {
    ticketElem.addEventListener("click", (event) => {

        //to clear the existing ticket status
        cleanupStatus();
        // console.log(event);
        ticketStatusColor = event.target.classList[0];
        ticketElem.classList.add("active_ticket_status");
        ticketStatus = event.target.innerText;
    })
})

// delete functionalty for each ticket

const deleteTask = (newTicket) => {
    newTicket.addEventListener("click", (event) => {
        if (event.target.classList[0] == "delete") {
            newTicket.remove();
        }
    })
}
// update the ticket functionlaty
const updateTask = (newTicket) => {
    newTicket.addEventListener("click", (event) => {
        console.log(event);
        if (event.target.classList[0] == "update") {
            event.target.offsetParent.children[2].contentEditable = "inherit";
            const updatebtn = event.target.offsetParent.children[3];
            const cancelbtn = event.target.offsetParent.children[4];
            const editbtn = document.createElement("div");
            const deletebtn = document.createElement("div");
            editbtn.setAttribute("class", "edit");
            deletebtn.setAttribute("class", "delete");
            editbtn.innerText = "Edit";
            deletebtn.innerText = "Delete";
            newTicket.appendChild(editbtn);
            newTicket.appendChild(deletebtn);
            updatebtn.remove();
            cancelbtn.remove();
        }
    })
}
// changing edit button to update after clicking on edit 
const enableUpdate = (newTicket) => {
    newTicket.addEventListener("click", (event) => {
        if (event.target.classList[0] == "edit") {
            event.target.offsetParent.children[2].contentEditable = "true";
            const editbtn = event.target.offsetParent.children[3];
            const deletebtn = event.target.offsetParent.children[4];
            const updatebtn = document.createElement("div");
            const cancelbtn = document.createElement("div");
            updatebtn.setAttribute("class", "update");
            cancelbtn.setAttribute("class", "cancel_edit");
            updatebtn.innerText = "Update";
            cancelbtn.innerText = "Cancel";
            newTicket.appendChild(updatebtn);
            newTicket.appendChild(cancelbtn);
            editbtn.remove();
            deletebtn.remove();
        }
    })
}
//If user dont want to edit the task/ticket
const cancelEdit = (newTicket) => {
    newTicket.addEventListener("click", (event) => {
        if (event.target.classList[0] == "cancel_edit") {
            event.target.offsetParent.children[2].contentEditable = "inherit";
            const updatebtn = event.target.offsetParent.children[3];
            const cancelbtn = event.target.offsetParent.children[4];
            const editbtn = document.createElement("div");
            const deletebtn = document.createElement("div");
            editbtn.setAttribute("class", "edit");
            deletebtn.setAttribute("class", "delete");
            editbtn.innerText = "Edit";
            deletebtn.innerText = "Delete";
            newTicket.appendChild(editbtn);
            newTicket.appendChild(deletebtn);
            updatebtn.remove();
            cancelbtn.remove();
        }
    })
}