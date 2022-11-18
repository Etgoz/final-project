const firstCell = document.querySelector(".input-zone .input");
const allInputs = document.querySelectorAll(".input-zone .input");

document.addEventListener("DOMContentLoaded", () => {
	firstCell.focus();
});

function contains_heb(str) {
	return /[\u0590-\u05FF]/.test(str);
}

document.addEventListener("keydown", (ev) => {
	const key = ev.key;
	if (contains_heb(key)) {
		document.querySelector(":focus").innerHTML = key;
		document.querySelector(":focus").nextElementSibling.focus();
	} else if (key === "Backspace" || key === "Delete") {
		if (document.querySelector(":focus").innerHTML !== "") {
			document.querySelector(":focus").innerHTML = "";
		} else {
			document.querySelector(":focus").previousElementSibling.focus();
			document.querySelector(":focus").innerHTML = "";
		}
	}
});
