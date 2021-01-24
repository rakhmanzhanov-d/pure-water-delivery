console.log("I am working");
const btnMinus = document.querySelector(".minus");
const btnPlus = document.querySelector(".plus");
let cost = 120;
let amount = 1;

function clearValues() {
	document.querySelector(".bottle_amount").value = "";
	document.querySelector(".bottle_cost").value = "";
}

btnMinus.addEventListener("click", function (e) {
	e.preventDefault();
	console.log("work - ");
	removeBottle();
});

btnPlus.addEventListener("click", function (e) {
	e.preventDefault();
	console.log("work + ");
	addBottle();
});

function addBottle() {
	clearValues();
	cost += 120;
	amount++;
	document.querySelector(".bottle_amount").value = amount;
	document.querySelector(".bottle_cost").value = cost;
}

function removeBottle() {
	if (cost > 120) {
		clearValues();
		cost -= 120;
		amount--;
		document.querySelector(".bottle_amount").value = amount;
		document.querySelector(".bottle_cost").value = cost;
	}
}
