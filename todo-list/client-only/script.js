const list = document.querySelector(".list ul")
list.addEventListener("click", (event) => {
    const target = event.target

    // item toggle behavior for '.list ul li' tags when clicked 
    if (target.tagName === "LI") {
        target.classList.toggle("clicked")
    }

    //  item removal behavior for '.list ul li span.closeButton' when clicked
    if (target.className === "closeButton") {
        listItem = target.parentElement
        list.removeChild(listItem)
    }
})


// add a close button for each list item
document.querySelectorAll(".list ul li").forEach(listItem => {
    const closebutton = makeCloseButton()
    listItem.appendChild(closebutton)
})

function makeCloseButton() {
    const closeSign = document.createTextNode("×")

    const closebutton = document.createElement("SPAN")
    closebutton.appendChild(closeSign)
    closebutton.className = "closeButton"

    return closebutton
}


function addTask(listElement = list) {
    const textInputElement = document.querySelector(".form .text-input")
    const taskName = textInputElement.value

    if (!taskName) return

    textInputElement.value = ""

    const closebutton = makeCloseButton()
    
    const newTask = document.createElement("LI")
    newTask.textContent = taskName

    newTask.appendChild(closebutton)

    listElement.appendChild(newTask)
}
