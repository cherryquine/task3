function changing(){
	let numberField = document.getElementById('inputId');
	let currency = document.getElementById('selId');
	let kzt = document.getElementById('inputKZTId');
	let usd = document.getElementById('inputUSDId');
	let eur = document.getElementById('inputEURId');

	if (currency.value == "KZT") {
		kzt.value = '-';
		usd.value = (numberField.value / 431).toFixed(2);
		eur.value = (numberField.value / 509).toFixed(2);
	} else if (currency.value == "USD") {
		kzt.value = (numberField.value * 429).toFixed(2);
		usd.value = '-';
		eur.value = (numberField.value * (429/509)).toFixed(2);
	} else if (currency.value == "EUR") {
		kzt.value = (numberField.value * 507).toFixed(2);
		usd.value = (numberField.value * (507/431)).toFixed(2);
		eur.value = '-';
	}
}