const shareBox = document.querySelector(".share-box")
const shareBtnOn = document.getElementById("btn-inactive")
const shareBtnOff = document.getElementById("btn-active")

shareBtnOn.addEventListener("click", () => {
    shareBox.classList.toggle("active")
})

shareBtnOff.addEventListener("click", () => {
    shareBox.classList.remove("active")
})