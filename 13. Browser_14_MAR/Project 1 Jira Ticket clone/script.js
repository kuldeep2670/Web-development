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

let ticketsArr = []
let toolBoxColors = document.querySelectorAll('.color')

//gel all tickets form local storage

if(localStorage.getItem('tickets')){
    ticketsArr = JSON.parse(localStorage.getItem('tickets'))
    ticketsArr.forEach(function(ticket){
        createTicket(ticket.ticketColor, ticket.ticketTask, ticket.ticketID)
    })
}

//Filter tickets with respect to colors
for(let i = 0; i < toolBoxColors.length; i++){
    toolBoxColors[i].addEventListener('click', function(e){
        let currentToolBoxColor = toolBoxColors[i].classList[0]
        //console.log(currentToolBoxColor)

        let filteredTickets = ticketsArr.filter(function(ticketobj){
            return currentToolBoxColor === ticketobj.ticketColor
        })

        //remove previous tickets
        let allTickets = document.querySelectorAll('.ticket-cont')
        for(let i = 0; i < allTickets.length; i++){
            allTickets[i].remove()
        }


        filteredTickets.forEach(function(filteredObj){
            createTicket(filteredObj.ticketColor, filteredObj.ticketTask, filteredObj.ticketID)
            
        })
    });

    toolBoxColors[i].addEventListener('dblclick', function(e){
        let allTickets = document.querySelectorAll('.ticket-cont')
        for(let i = 0; i < allTickets.length; i++){
            allTickets[i].remove()
        }

        ticketsArr.forEach(function(ticketobj){
            createTicket(ticketobj.ticketColor, ticketobj.ticketTask, ticketobj.ticketID)
        })
    })

}



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
        createTicket(modalPriorityColor, taskAreaCont.value); //this function will generate the ticket
        modalCont.style.display = "none";
        addFlag = false;
        taskAreaCont.value = "";
    }
});

function createTicket(ticketColor, ticketTask, ticketID) {
    let id = ticketID || shortid()
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");

    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">#${id}</div>
    <div class="task-area">${ticketTask}</div>
    <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
    </div>`;

    mainCont.appendChild(ticketCont);
    handleRemoval(ticketCont, id);

    handleLock(ticketCont, id)

    handleColor(ticketCont, id)

    if(!ticketID){
        ticketsArr.push({ticketColor, ticketTask, ticketID:id})
        localStorage.setItem('tickets', JSON.stringify(ticketsArr))
    }
    
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
function handleRemoval(ticket, id) {
    ticket.addEventListener("click", function () {
        if (!removeFlag) return
        
        let idx = getTicketIdx(id)  //idx

        //local storage removal of ticket
        ticketsArr.splice(idx, 1)

        let strTicketArray = JSON.stringify(ticketsArr)
        localStorage.setItem('tickets', strTicketArray)
        ticket.remove();
        
    });
}

// Lock and Unlock Tickets
function handleLock(ticket, id){
    let ticketLockElem = ticket.querySelector('.ticket-lock')

    let ticketLock = ticketLockElem.children[0]
    let ticketTaskArea = ticket.querySelector('.task-area')

    ticketLock.addEventListener('click', function(e){
        let ticketIdx = getTicketIdx(id)
        if(ticketLock.classList.contains(lockClass)){
            ticketLock.classList.remove(lockClass)
            ticketLock.classList.add(unlockClass)
            ticketTaskArea.setAttribute('contenteditable', 'true')
        } else{
            ticketLock.classList.remove(unlockClass)
            ticketLock.classList.add(lockClass)
            ticketTaskArea.setAttribute('contenteditable', 'false')
        }

        ticketsArr[ticketIdx].ticketTask = ticketTaskArea .innerText
        localStorage.setItem('tickets' , JSON.stringify(ticketsArr))

    })
}

function handleColor(ticket, id){
    let ticketColorBand = ticket.querySelector('.ticket-color')

    ticketColorBand.addEventListener('click', function(e){
        let currentTicketColor = ticketColorBand.classList[1]

        let ticketIdx = getTicketIdx(id)

        let currentTicketColoridx = colors.findIndex(function(color){
            return currentTicketColor === color
        })
        currentTicketColoridx++

        let newTicketColorIdx = currentTicketColoridx%colors.length
        let newTicketColor = colors[newTicketColorIdx]

        ticketColorBand.classList.remove(currentTicketColor)
        ticketColorBand.classList.add(newTicketColor)

         // modify with new color

        ticketsArr[ticketIdx].ticketColor = newTicketColor
        localStorage.setItem('tickets' , JSON.stringify(ticketsArr))
    })
}

function getTicketIdx(id){
    let ticketIdx = ticketsArr.findIndex(function(ticketObj){
        return ticketObj.ticketID == id
    })
    return ticketIdx
}



















