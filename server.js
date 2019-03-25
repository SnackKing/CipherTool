const express = require('express')
const app = express()
var CryptoJS = require("crypto-js");

app.get('/', function (req, res) {
	var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
 
	// Decrypt
	var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
	var plaintext = bytes.toString(CryptoJS.enc.Utf8);
 	res.send(ciphertext.toString());
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})