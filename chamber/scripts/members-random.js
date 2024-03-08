const membersList = [
    {
        id: 1,
        companyName: "Volvo do Brasil Veículos Ltda",
        cnpj: "43.999.424/0001-14",
        address: "Avenida Juscelino K. de Oliveira, 2600 - CIC, Curitiba/PR"
    },
    {
        id: 2,
        companyName: "Trox do Brasil Difusão de Ar, Acústica, Filtragem e Ventilação Ltda",
        cnpj: "76.881.093/0001-72",
        address: "Rua Cyro Correia Pereira, 300 - CIC, Curitiba/PR"
    },
    {
        id: 3,
        companyName: "CBB Indústria e Comércio de Asfaltos e Engenharia Ltda",
        cnpj: "82.381.815/0001-22",
        address: "Rua João Bettega, 3500 - CIC, Curitiba/PR"
    },
    {
        id: 4,
        companyName: "HCC Indústria e Comércio de Equipamentos Agrícolas Ltda",
        cnpj: "17.955.143/0001-50",
        address: "Rua do Semeador, 262 - CIC, Curitiba/PR"
    },
    {
        id: 5,
        companyName: "Sim Estearina Indústria e Comércio Ltda",
        cnpj: "04.942.328/0001-88",
        address: "Rua Emílio Romani, 1900 - CIC, Curitiba/PR"
    },
    {
        id: 6,
        companyName: "J.C.N. Indústria e Comércio de Embalagens Ltda",
        cnpj: "03.438.897/0001-28",
        address: "Rua José Antunes Ferreira, 184 - CIC, Curitiba/PR"
    },
    {
        id: 7,
        companyName: "Metalúrgica Angelin Ltda",
        cnpj: "82.054.701/0001-78",
        address: "Rua Francisco Sobania, 1235 - CIC, Curitiba/PR"
    },
];


function shuffleArray(arr, n) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, n);
}

const empresasSorteadas = shuffleArray(membersList, 3);

function createMemberDiv(company) {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("memberSpotlight");

    const companyName = document.createElement("h3");
    companyName.textContent = company.companyName;
    companyName.classList.add("companyNameClass");

    const cnpj = document.createElement("p");
    cnpj.textContent = `CNPJ: ${company.cnpj}`;
    cnpj.classList.add("cnpjClass"); 

    const address = document.createElement("p");
    address.textContent = `Address: ${company.address}`;
    address.classList.add("addressClass");

    memberDiv.appendChild(companyName);
    memberDiv.appendChild(cnpj);
    memberDiv.appendChild(address);

    return memberDiv;
}

function addMemberSpotlights() {
    const memberSpotlightList = document.querySelector(".memberSpotlightList");
    if (!memberSpotlightList) {
        console.error("Element with id 'memberSpotlightList' not found.");
        return;
    }

    const empresasSorteadas = shuffleArray(membersList, 3);

    empresasSorteadas.forEach(empresa => {
        const memberDiv = createMemberDiv(empresa);
        memberSpotlightList.appendChild(memberDiv);
    });
}

addMemberSpotlights();