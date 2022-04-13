let addBtn = document.querySelector(".add-btn");

let modalCont = document.querySelector(".modal-cont");

let mainCont = document.querySelector(".main-cont");

let colors = ["lightpink", "lightgreen", "lightblue", "black"];

let modalPriorityColor = colors[colors.length - 1]; // black

let allPriorityColors = document.querySelectorAll(".priority-color");

let taskAreaCont = document.querySelector(".textarea-cont");

let removeBtn = document.querySelector(".remove-btn");

let addFlag = false;
let removeFlag = false;

let lockClass = 'fa-lock'
let unlockClass = 'fa-lock-open'

addBtn.addEventListener("click", function (e) {
    //display the modal
    //addFalg, true - modal display
    //addFlag, false = modal hide

    addFlag = !addFlag;
    if (addFlag == true) {
        modalCont.style.display = "flex";
    } else {
        modalCont.style.display = "none";
    }
});

//Changing Priority colors
allPriorityColors.forEach(function (colorElem) {
    colorElem.addEventListener("click", function (e) {
        allPriorityColors.forEach(function (priorityColorElem) {
            priorityColorElem.classList.remove("active");
        });
        colorElem.classList.add("active");
        modalPriorityColor = colorElem.classList[0]; //selecting the color
    });
});

//Generating a ticket

modalCont.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key == "Shift") {
        createTicket(modalPriorityColor, taskAreaCont.value, shortid()); //this function will generate the ticket
        modalCont.style.display = "none";
        addFlag = false;
        taskAreaCont.value = "";
    }
});

function createTicket(ticketKaColorClass, task, ticketId) {
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");

    ticketCont.innerHTML = `<div class="ticket-color ${ticketKaColorClass}"></div>
    <div class="ticket-id">#${ticketId}</div>
    <div class="task-area">${task}</div>
    <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
    </div>`;

    mainCont.appendChild(ticketCont);
    handleRemoval(ticketCont);

    handleLock(ticketCont)

    handleColor(ticketCont)
}

removeBtn.addEventListener("click", function () {
    removeFlag = !removeFlag;
    if (removeFlag == true) {
        removeBtn.style.color = "red";
    } else {
        removeBtn.style.color = "white";
    }
});

//Remove Ticket Function
function handleRemoval(ticket) {
    ticket.addEventListener("click", function () {
        if (removeFlag == true) {
            ticket.remove();
        }
    });
}

// Lock and Unlock Tickets
function handleLock(ticket){
    let ticketLockElem = ticket.querySelector('.ticket-lock')

    let ticketLock = ticketLockElem.children[0]
    let ticketTaskArea = ticket.querySelector('.task-area')

    ticketLock.addEventListener('click', function(e){
        if(ticketLock.classList.contains(lockClass)){
            ticketLock.classList.remove(lockClass)
            ticketLock.classList.add(unlockClass)
            ticketTaskArea.setAttribute('contenteditable', 'true')
        } else{
            ticketLock.classList.remove(unlockClass)
            ticketLock.classList.add(lockClass)
            ticketTaskArea.setAttribute('contenteditable', 'false')
        }
    })
}

function handleColor(ticket){
    let ticketColorBand = ticket.querySelector('.ticket-color')

    ticketColorBand.addEventListener('click', function(e){
        let currentTicketColor = ticketColorBand.classList[1]

        let currentTicketColoridx = colors.findIndex(function(color){
            return currentTicketColor === color
        })
        currentTicketColoridx++

        let newTicketColorIdx = currentTicketColoridx%colors.length
        let newTicketColor = colors[newTicketColorIdx]

        ticketColorBand.classList.remove(currentTicketColor)
        ticketColorBand.classList.add(newTicketColor)
    })
}





















