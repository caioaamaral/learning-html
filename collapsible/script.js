const collapsibleItem = window.document.querySelector(".collapsible-item")


collapsibleItem.addEventListener("click", function () {
    this.classList.toggle("pressed")

    const content = window.document.querySelector(".collapsible-content")
    content.classList.toggle("hidden")
    console.log(content.scrollHeight)
})