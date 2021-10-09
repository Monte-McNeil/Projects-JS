function validateANDadd() {

  var newWord = document.forms["theForm"]["word"].value;
  var newNumber = document.forms["theForm"]["number"].value;

  if (newWord == "") {
      alert("Please enter a word to check");
      return false;
  }

  else if ((newNumber != 1) && (newNumber != 2)) {
      alert("Please enter a 1 or 2 for the Algorithm.");
      document.forms["theForm"]["newNumber"].value = "";
      return false;
  }

  else {
      if (newNumber==1) {
          var tableRef = document.getElementById("list1");
          (tableRef.insertRow(tableRef.rows.length)).innerHTML = newWord + ': ' + Palindrome1(newWord);
      } else {
          var tableRef = document.getElementById("list2");
          (tableRef.insertRow(tableRef.rows.length)).innerHTML = newWord + ': ' + palindrome2(newWord);

         document.forms["theForm"]["newWord"].value = "";
         document.forms["theForm"]["newNumber"].value = "";
         return true;
      }
  }

}

// Using Recursion
function Palindrome1(newWord) {
  var strLen = newWord.length;
  string = newWord.toLocaleLowerCase(); // Returns the string converted to lowercase

  if (strLen === 0 || strLen === 1) { // using === to explicitly check the values of similiar type
    return true;
  }
  if (newWord[0] === newWord[strLen - 1]) {
    return Palindrome1(string.slice(1, strLen - 1) );
  }  
  return false;
}

function palindrome2(newWord) {
    str = newWord.toLowerCase().replace(/[^a-z0-9]/g, "");
    for(var i = 0; i < newWord.length/2; ++i) {
      if(str[i] !== str[newWord.length-i-1]) {
        return false;
      } 
    }
    return true;
  }

  function clearList1() {
    var tableRef = document.getElementById("list1");
    tableRef.innerHTML = " ";
  }
  
  function clearList2() {
    var tableRef = document.getElementById("list2");
    tableRef.innerHTML = " ";
  }