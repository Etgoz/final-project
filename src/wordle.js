const firstCell = document.querySelector(".input-zone .input");
const allInputs = document.querySelectorAll(".input-zone .input");

document.addEventListener("DOMContentLoaded", () => {
	firstCell.focus();
});

function focusFirstEmpty() {
	for (cell of Array.from(allInputs)) {
		if (cell.textContent === "") {
			cell.focus();
			return cell;
		}
	}
}

function contains_heb(str) {
	return /[\u0590-\u05FF]/.test(str);
}

function inputLetter(key) {
	if (contains_heb(key)) {
		document.querySelector(":focus").textContent = key;
		try {
			document.querySelector(":focus").nextElementSibling.focus();
		} catch (TypeError) {
			alert("done");
		}
	} else if (key === "Backspace" || key === "Delete" || key === "del") {
		if (document.querySelector(":focus").textContent !== "") {
			document.querySelector(":focus").textContent = "";
		} else {
			try {
				document.querySelector(":focus").previousElementSibling.focus();
				document.querySelector(":focus").textContent = "";
			} catch (TypeError) {}
		}
	}
}

document.addEventListener("keydown", (ev) => {
	const key = ev.key;
	inputLetter(key);
});

const allButtons = document.querySelectorAll(".keyboard > button");

Array.from(allButtons).forEach((button) => {
	button.tabIndex = "-1";
	button.addEventListener("click", function (e) {
		e.preventDefault();
		button.blur();
		focusFirstEmpty();
		if (button.id !== "submit") {
			inputLetter(button.textContent);
		}
	});
});

const lastCells = document.querySelectorAll(".last");

lastCells.forEach((cell) => {
	if (cell.textContent !== "" && "כמנפצ".includes(cell.textContent)) {
		alert("כמנפצ");
		// switch (cell.textContent) {
		// 	case "כ":
		// 		cell.textContent = "ך";
		// 		break;
		// 	case "מ":
		// 		cell.textContent = "מ";
		// 		break;
		// }
	}
});
