const lastModifiedHTML = document.querySelector(".lastModified")
const currentYearHTML = document.querySelector(".currentYear")

const lastModifiedDate = new Date(document.lastModified)
const day = lastModifiedDate.getDate()
const month = lastModifiedDate.getMonth() + 1
const year = lastModifiedDate.getFullYear()
const hour = String(lastModifiedDate.getHours()).padStart(2, '0')
const minutes = String(lastModifiedDate.getMinutes()).padStart(2, '0')
const seconds = String(lastModifiedDate.getSeconds()).padStart(2, '0')


lastModifiedHTML.innerText = `Last Modification: ${month}/${day}/${year} ${hour}:${minutes}:${seconds}`
currentYearHTML.innerText = ` ${year}`