 


 function changeForm(){
	var encipherForm = document.getElementById("encipherForm");
	var decipherForm = document.getElementById("decipherForm");
	if (encipherForm.style.display === "none") {
    	encipherForm.style.display = "block";
  	} else {
    	encipherForm.style.display = "none";
  	}

  	if (decipherForm.style.display === "none") {
    	decipherForm.style.display = "block";
  	} else {
    	decipherForm.style.display = "none";
  	}

 }
 function encipher(){
 	var form = document.getElementById("encipherForm");
 	var pt = form.elements.namedItem("pt").value;
 	var key = form.elements.namedItem("key").value;
 	var ciphertext = CryptoJS.AES.encrypt(pt, key);

 	var result = document.getElementById("result");
 	result.innerHTML = ciphertext;
 	return false;


 }
 function decipher(){
 	var form = document.getElementById("decipherForm");
 	var ct = form.elements.namedItem("ct").value;
 	var key = form.elements.namedItem("key").value;
 	var bytes  = CryptoJS.AES.decrypt(ct, key);
	var plaintext = bytes.toString(CryptoJS.enc.Utf8);

	var result = document.getElementById("result");
	result.innerHTML = plaintext;
	return false;

 }