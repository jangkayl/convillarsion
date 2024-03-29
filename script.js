let numInp = document.getElementById("frominput");
let numOut = document.getElementById("output");
let typeInp = document.getElementById("from");
let typeOut = document.getElementById("to");
let errorMsg = document.getElementById("errorMsg");

function convertNumber() {
	let numValue = parseInt(numInp.value, getTypeBase(typeInp.value));
	numOut.value = numValue.toString(getTypeBase(typeOut.value));
}

function getTypeBase(type) {
	switch (type) {
		case "fromBin":
		case "toBin":
			return 2;
		case "fromDec":
		case "toDec":
			return 10;
		case "fromOct":
		case "toOct":
			return 8;
		case "fromHex":
		case "toHex":
			return 16;
		default:
			return 10;
	}
}

function isBinary(str) {
	return /^[01]+$/.test(str);
}

function isOctal(str) {
	return /^[0-7]+$/.test(str);
}

function isDecimal(str) {
	return /^\d+$/.test(str);
}

function isHexadecimal(str) {
	return /^[0-9A-Fa-f]+$/.test(str);
}

function setInputType(element, type) {
	element.type = type;
}

function handleInputType() {
	if (typeInp.value === "fromHex") {
		setInputType(numInp, "text");
	} else {
		setInputType(numInp, "number");
	}
	if (typeOut.value === "toHex") {
		setInputType(numOut, "text");
	} else {
		setInputType(numOut, "number");
	}
}

numInp.addEventListener("input", function () {
	if (typeInp.value === "fromBin") {
		if (!isBinary(numInp.value)) {
			errorMsg.textContent = "Please enter a valid binary input";
			return;
		}
	} else if (typeInp.value === "fromOct") {
		if (!isOctal(numInp.value)) {
			errorMsg.textContent = "Please enter a valid octal input";
			return;
		}
	} else if (typeInp.value === "fromDec") {
		if (!isDecimal(numInp.value)) {
			errorMsg.textContent = "Please enter a valid decimal input";
			return;
		}
	} else if (typeInp.value === "fromHex") {
		if (!isHexadecimal(numInp.value)) {
			errorMsg.textContent = "Please enter a valid hexadecimal input";
			return;
		}
	}
	errorMsg.textContent = "";
	convertNumber();
});

typeInp.addEventListener("change", function () {
	handleInputType();
	convertNumber();
});

typeOut.addEventListener("change", function () {
	handleInputType();
	convertNumber();
});

handleInputType();
