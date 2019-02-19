function calcTip() {
	var amount = document.getElementById("billAmount").value;
	var service = document.getElementById("dropdownService").value;
	var partySize = document.getElementById("partyNum").value;
	var serviceQuality = 0;

	if (service == "outstanding"){
		serviceQuality = ".3";
	}  else if (service=="good"){
		serviceQuality = .25;
	}  else if (service=="ok"){
		serviceQuality = .2;
	}  else if (service=="bad"){
		serviceQuality = .12;
	}  else if (service=="terrible"){
		serviceQuality = .1;
	}
	var tipAmount = amount * serviceQuality;
	var total = parseFloat(tipAmount) + parseFloat(amount);
	var perPerson = total/partySize;

	var tipUI = document.getElementById("tipTotal");
		tipUI.innerHTML += " $" + tipAmount.toFixed(2);
	var totalUI = document.getElementById("billTotal");
		totalUI.innerHTML += " $" + total.toFixed(2);
	var perPersonUI = document.getElementById("amountPerPerson");
		perPersonUI.innerHTML = " $" + perPerson.toFixed(2);

		event.preventDefault();
};