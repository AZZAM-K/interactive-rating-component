let ratingState = document.querySelector(".rating-state")
let thankState = document.querySelector(".thank-state")
let rates = document.querySelectorAll(".buttons button")
let submitButton = document.getElementById("submit-button")
let ratingSelected = document.getElementById("rating-selected")
let rating
function unselectOther() {
  rates.forEach(rate => {
    rate.classList.remove("selected")
  })
}
rates.forEach(rate => {
  rate.addEventListener("click", () => {
    let ratesArray = Array.from(rates)
    rating = ratesArray.indexOf(rate) + 1
    unselectOther()
    rate.classList.add("selected")
    submitButton.removeAttribute("disabled")
  })
})
submitButton.addEventListener("click", () => {
  ratingState.style.display = "none"
  thankState.style.display = "flex"
  ratingSelected.textContent = `You selected ${rating} out of 5`
})
