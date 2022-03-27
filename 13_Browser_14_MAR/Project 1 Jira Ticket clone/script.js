let addBtn = document.querySelector(".add-btn")

let modalCont = document.querySelector(".modal-cont")

let addFlag = false
addBtn.addEventListener("click", function(e){
    //display the modal
    //addFalg, true - modal display
    //addFlag, false = modal hide

    addFlag = !addFlag
    if(addFlag == true){
        modalCont.style.display = 'flex'
    } else{
        modalCont.style.display= 'none'
    }

});