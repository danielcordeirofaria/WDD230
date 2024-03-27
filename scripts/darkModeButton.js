const modeButton = document.querySelector("#mode");
const pageInformation = document.querySelector('.pageInformation')
let lessonList = document.querySelector('.lessonList')
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		pageInformation.style.color = "#fff"
		lessonList.style.color = "#fff"
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		lessonList.style.color = "var(--blue)"
		pageInformation.style.color = "var(--blue)"
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});
