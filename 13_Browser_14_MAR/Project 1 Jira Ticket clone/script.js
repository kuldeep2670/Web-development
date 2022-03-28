let addBtn = document.querySelector(".add-btn")

let modalCont = document.querySelector(".modal-cont")

let mainCont = document.querySelector(".main-cont")

let colors = ['lightpink', 'lightgreen', 'lightblue', 'black']

let modalPriorityColor = colors[colors.length - 1] // black

let allPriorityColors = document.querySelectorAll('.priority-color')

let taskAreaCont = document.querySelector('.textarea-cont')

let removeBtn = document.querySelector('.remove-btn')

let addFlag = false;
let removeFlag = false;

addBtn.addEventListener("click", function (e) {
    //display the modal
    //addFalg, true - modal display
    //addFlag, false = modal hide

    addFlag = !addFlag
    if (addFlag == true) {
        modalCont.style.display = 'flex'
    } else {
        modalCont.style.display = 'none'
    }

});

//Changing Priority colors
allPriorityColors.forEach(function(colorElem){
    colorElem.addEventListener('click', function(e){
        allPriorityColors.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove('active')
        })
        colorElem.classList.add('active')
        modalPriorityColor = colorElem.classList[0] //selecting the color 

    });
});

//Generating a ticket

modalCont.addEventListener('keydown', function (e) {
    let key = e.key;
    if (key == 'Shift') {
        createTicket(modalPriorityColor, taskAreaCont.value) //this function will generate the ticket
        modalCont.style.display = "none"
        addFlag = false
        taskAreaCont.value = ''
    }
});


function createTicket(ticketKaColorClass, task) {
    let ticketCont = document.createElement('div')
    ticketCont.setAttribute('class', 'ticket-cont')

    ticketCont.innerHTML = `<div class="ticket-color ${ticketKaColorClass}"></div>
    <div class="ticket-id">${'#Sample id'}</div>
    <div class="task-area">${task}</div>`

    mainCont.appendChild(ticketCont)
    handleRemoval(ticketCont)
}

removeBtn.addEventListener('click', function(){
    removeFlag = !removeFlag
    if(removeFlag==true){
      removeBtn.style.color = 'red'
    }
    else{
       removeBtn.style.color = 'white'
    }
})

function handleRemoval(ticket){
    ticket.addEventListener('click',function(){
        if(removeFlag == true){
            ticket.remove()
        }
    })
}