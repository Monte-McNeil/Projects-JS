async function getBacon() {

  var url = '';


  if (document.getElementById('newMeat').value == 'allMeat') {
      url = 'https://baconipsum.com/api/?type=meat-and-filler'
  } else {
     url = 'https://baconipsum.com/api/?type=meat'
  }

 // alert(url);

  let newParagraphs = document.getElementById('newParagraphs').value
  url = url + "&paras=" + newParagraphs

  let response = await fetch(url)
      document.getElementById('myRawData').innerHTML = ""
      document.getElementById('myFormattedData').innerHTML = ""

  let jsonData = await response.json()
      document.getElementById('myRawData').innerHTML = JSON.stringify(jsonData);

  for (para in jsonData) {
      document.getElementById('myFormattedData').innerHTML += "<p>" + jsonData[para] + "</p>"
  }

  for (para in jsonData) {
      encrypt = document.getElementById('chooseAlgo').value
      if (encrypt == 'AlgoOne') {
          document.getElementById('myEncryptedData').innerHTML += "<p>" + encryptOne(jsonData[para],5) + "</p>"
      } else {
          document.getElementById('myEncryptedData').innerHTML += "<p>" + caesarShift(jsonData[para],5) + "</p>"
      }
  }
  return true;

}

var mode = "ceaser";
var shift;
function encryptOne(text, shift) {
  var result = "";
  if (mode == "ceaser"){

      //loop through each caharacter in the text
      for (var i = 0; i < text.length; i++) {
            
           //get the character code of each letter
          var c = text.charCodeAt(i);

          // handle uppercase letters
          if(c >= 65 && c <=  90) {
             result += String.fromCharCode((c - 65 + shift) % 26 + 65); 

          // handle lowercase letters
          }else if(c >= 97 && c <= 122){
              result += String.fromCharCode((c - 97 + shift) % 26 + 97);

          // its not a letter, let it through
          }else {
              result += text.charAt(i);
          }
      }
  }
  return result;
}

function decrypt(text,shift){
  var result = "";
  shift = (26 - shift) % 26;
  result = encrypt(text,shift);
  return result;
}   


function caesarShift(str, amount) {
  // Wrap the amount
  if (amount < 0) {
    return caesarShift(str, amount + 26);
  }

  // Make an output variable
  var output = "";

  // Go through each character
  for (var i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    // Append
    output += c;
  }

  // All done!
  return output;
};