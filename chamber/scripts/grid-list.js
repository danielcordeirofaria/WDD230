let membersList = "data/members.json"
let container = document.querySelector(".container")

const display = document.querySelector("divCompanies")


async function getCompanies() {
    const response = await fetch(membersList);
    const data = await response.json();
    displayCompanies(data.companies);
}

getCompanies();

const displayCompanies = (companies) => {
    var divCompanies = document.createElement("div")
    divCompanies.classList.add("divCompaniesGrid", "divCompanies");
    companies.forEach((company) => {

        var divCompany = document.createElement('div')
        divCompany.classList.add("divCompanyGrid", "divCompany")


        let imageCompany = document.createElement("img")
        imageCompany.src = company.image
        imageCompany.alt = "company photo"
        imageCompany.height = '150'
        imageCompany.width = '200'
        divCompany.appendChild(imageCompany)


        let h2 = document.createElement('h2')
        h2.textContent = company.name
        h2.classList.add("name")

        divCompany.appendChild(h2)

        let address = document.createElement("p")
        address.innerHTML = `${company.address}`
        divCompany.appendChild(address)
        address.classList.add("address")

        let telephoneNumber = document.createElement("p")
        telephoneNumber.innerHTML = `${company.phoneNumber}`
        divCompany.appendChild(telephoneNumber)
        telephoneNumber.classList.add("tel")

        let email = document.createElement("p")
        email.innerHTML = `${company.email}`
        divCompany.appendChild(email)
        email.classList.add("mail")
        let websiteLink = document.createElement("a")
        websiteLink.href = `${company.website}`;
        websiteLink.target = "_blank";
        websiteLink.innerHTML = `Website`
        divCompany.appendChild(websiteLink)
        websiteLink.classList.add("link")


        divCompanies.appendChild(divCompany)
        container.appendChild(divCompanies)


    })
}

document.getElementById("list").addEventListener("click", () => {
    let divCompaniesSelecting = document.querySelectorAll(".divCompanies")
    let divCompanySelecting = document.querySelectorAll(".divCompany")

    divCompanySelecting.forEach((div) => {
        div.classList.remove("divCompanyGrid")
        div.classList.add("divCompanyList")
    });

    divCompaniesSelecting.forEach((div) => {
        div.classList.remove("divCompaniesGrid")
        div.classList.add("divCompaniesList")
    });
});

document.getElementById("grid").addEventListener("click", () => {
    let divCompaniesSelecting = document.querySelectorAll(".divCompanies")
    let divCompanySelecting = document.querySelectorAll(".divCompany")

    divCompanySelecting.forEach((div) => {
        div.classList.remove("divCompanyList")
        div.classList.add("divCompanyGrid")
    });

    divCompaniesSelecting.forEach((div) => {
        div.classList.remove("divCompaniesList")
        div.classList.add("divCompaniesGrid")
    });
});
