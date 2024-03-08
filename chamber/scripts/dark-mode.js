const modeButton = document.querySelector(".switch");
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const liElements = document.querySelectorAll(".li-hover");
const menu = document.querySelector("#menu");
const events = document.querySelector(".events");
const weatherCard = document.querySelector(".weatherCard");
const memberSpotlights = document.querySelectorAll(".memberSpotlights");
const companyNameClass = document.querySelector(".companyNameClass")

const footer = document.querySelector(".footer");
const joinUs = document.querySelector(".joinUs");
const joinUsH2 = document.querySelector(".joinUs h2");


modeButton.addEventListener("click", () => {
    if (modeButton.querySelector("input").checked) {
        body.style.background = "#000";
        body.style.color = "#fff";
        header.style.background = "#000";
        header.style.color = "#fff";
        header.style.border = "3px solid var(--llGren)";
        nav.style.background = "#000";
        nav.style.color = "#fff";

        liElements.forEach(liElement => {
            liElement.classList.add("hover-dark");
        });

        menu.style.background = "#000";
        menu.style.color = "#fff";
        events.style.background = "#000";
        events.style.color = "#fff";
        weatherCard.style.background = "#000";
        weatherCard.style.color = "#fff";
        memberSpotlights.forEach(memberSpotlight => {
            memberSpotlight.style.background = "#000";
            memberSpotlight.style.color = "#fff";
        });
        footer.style.background = "#000";
        footer.style.color = "#fff";
        joinUs.style.background = "#000";
        joinUs.style.color = "#fff";
        joinUsH2.style.background = "#000";
        joinUsH2.style.color = "#fff";
        memberSpotlights.style.background = "#000";
        memberSpotlights.style.color = "#fff";
        companyNameClass.style.background = "#000";
        companyNameClass.style.color = "#fff";
        


    } else {
        body.style.background = "";
        body.style.color = "";
        header.style.background = "";
        header.style.color = "";
        header.style.border = "";
        nav.style.background = "";
        nav.style.color = "";

        liElements.forEach(liElement => {
            liElement.classList.remove("hover-dark");
        });

        menu.style.background = "";
        menu.style.color = "";
        events.style.background = "";
        events.style.color = "";
        weatherCard.style.background = "";
        weatherCard.style.color = "";
        memberSpotlights.forEach(memberSpotlight => {
            memberSpotlight.style.background = "";
            memberSpotlight.style.color = "";
        });
        footer.style.background = "";
        footer.style.color = "";
        joinUs.style.background = "";
        joinUs.style.color = "";
        joinUsH2.style.background = "";
        joinUsH2.style.color = "";
        memberSpotlight.style.background = "";
        memberSpotlight.style.color = "";
        companyNameClass.style.background = "";
        companyNameClass.style.color = "";
    }
});
