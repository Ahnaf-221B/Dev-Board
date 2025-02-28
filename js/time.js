const button = document.getElementById("theme-controller");
const body = document.body;


function randomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 24)];
	}
	return color;
}

button.addEventListener("click", function () {
	body.style.backgroundColor = randomColor();
});
