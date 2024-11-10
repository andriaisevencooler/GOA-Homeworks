const bgValue = document.querySelector("#color")
const addBox = document.querySelector("#container label")
const mainContainer = document.querySelector("#textAreaBox")


addBox.addEventListener("click", (e) => {
    e.preventDefault()
    const newElement = document.createElement("div")
    newElement.innerHTML = `
    <div id="crossDiv">
        <span>&Cross;</span>
    </div>
    <textarea name="box" id="box" placeholder="Enter text here..."></textarea>`

    mainContainer.appendChild(newElement)
    const box = document.querySelector("#box")
    box.style.background = bgValue.value
})