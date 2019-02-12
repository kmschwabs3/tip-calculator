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
	 
};