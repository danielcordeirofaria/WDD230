const linksURL = "data/links.json"
let lessonListVar = document.querySelector(".lessonList")

async function getLinks() {
    const response = await fetch(linksURL)
    const data = await response.json()
    displayLessons(data.weeks)
}

getLinks();

const displayLessons = (weeks) => {
    weeks.forEach((week) => {
        let li = document.createElement("li")
        let p = document.createElement('p')
        p.innerText = `${week.week}:`

        week.links.forEach((link, linkIndex) => {
            let a = document.createElement('a')
            a.href = link.url
            a.textContent = `${link.title}`

            li.appendChild(a);

            if (linkIndex < week.links.length - 1) {
                let pSeparator = document.createElement('p')
                pSeparator.innerHTML = ' | '
                li.appendChild(pSeparator)
            }
        });

        li.insertBefore(p, li.firstChild)
        lessonListVar.appendChild(li)
    });
};



