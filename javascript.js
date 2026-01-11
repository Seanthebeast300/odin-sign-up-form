const form = document.getElementById("real-form")
const passwordInput = document.getElementById("password")
const confirmPasswordInput = document.getElementById("confirm-password")

form.addEventListener("submit", event => {
    if (passwordInput.value != confirmPasswordInput.value)
    {
        alert("passwords don't match")
        event.preventDefault()
    }
})
