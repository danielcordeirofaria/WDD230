const modeButton = document.querySelector(".switch")
const body = document.querySelector("body")
const header = document.querySelector("header")
const nav = document.querySelector("nav")
const liElements = document.querySelectorAll(".li-hover")
const menu = document.querySelector("#menu")
const divCompanyGrid = document.querySelectorAll(".divCompanyGrid")
const divCompany = document.querySelectorAll(".divCompany")
const footer = document.querySelector("footer")

modeButton.addEventListener("click", () => {
    if (modeButton.querySelector("input").checked) {
        // Modo escuro
        body.style.background = "#000"
        body.style.color = "#fff"
        header.style.background = "#000"
        header.style.color = "#fff"
        header.style.border = "3px solid var(--llGren)"
        nav.style.background = "#000"
        nav.style.color = "#fff"

        divCompanyGrid.forEach(divCompanyGrid => {
            divCompanyGrid.style.backgroundColor = "#000"
        })

        divCompany.forEach(divCompany => {
            divCompany.style.background = "#000"
        })

        liElements.forEach(liElement => {
            liElement.classList.add("hover-dark")
        });

        menu.style.background = "#000"
        menu.style.color = "#fff"
        footer.style.background = "#000"
        footer.style.color = "#fff"
    } else {
        // Modo claro
        body.style.background = ""
        body.style.color = ""
        header.style.background = ""
        header.style.color = ""
        header.style.border = ""
        nav.style.background = ""
        nav.style.color = ""

        liElements.forEach(liElement => {
            liElement.classList.remove("hover-dark")
        });

        menu.style.background = ""
        menu.style.color = ""
        footer.style.background = ""
        footer.style.color = ""

        divCompanyGrid.forEach(divCompanyGrid => {
            divCompanyGrid.style.backgroundColor = ""
        })

        divCompany.forEach(divCompany => {
            divCompany.style.background = ""
        })
    }
})
