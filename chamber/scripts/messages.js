function displayMessage() {
    const storedDate = localStorage.getItem('myDate')
    const newMessage = document.createElement("p")
    const fatherElement = document.querySelector(".message")

    if (storedDate === null) {
        newMessage.textContent = "Welcome! Let us know if you have any questions."
        fatherElement.appendChild(newMessage)
    } else {
        const lastVisitDate = new Date(storedDate)
        const currentDate = new Date();

        const timeDifference = currentDate - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

        if (daysDifference < 1) {
            newMessage.textContent = "Back so soon! Awesome!"
        } else if (daysDifference === 1) {
            newMessage.textContent = "You last visited 1 day ago."
        } else {
            newMessage.textContent = "You last visited " + daysDifference + " days ago."
        }
        fatherElement.appendChild(newMessage)
    }

    const currentDate = new Date();
    localStorage.setItem('myDate', currentDate.toISOString())
}

document.addEventListener("DOMContentLoaded", displayMessage)