allNumbersArray = []; 
function buildArray(){
  var min = document.forms["myForm"]["min"].value; 
  var max = document.forms["myForm"]["max"].value; 
  var numberForArray = document.forms["myForm"]["newNumber"].value; 
   if (numberForArray == ""){
    alert("Enter number please"); 
    return false; 
  }
  else {
    if ((numberForArray >= min) || (numberForArray <= max)) { 
      allNumbersArray.push(numberForArray);
      document.getElementById("showArray").innerHTML = "Current Array is: [" + allNumbersArray + "]"; 
      document.forms["myForm"]["newNumber"].value = ""; }
  }
}

//finds the mean (average)!

function findMean() {
  var total = 0;
    for (var i  = 0; i < allNumbersArray.length; i++){
      total += parseInt(allNumbersArray[i]);
    }
  mean = total/allNumbersArray.length; 
  document.getElementById("mean").innerHTML = "mean is: " + mean;
}

//finds the median 
function findMedian() { 
  var sortedArray = allNumbersArray.sort(); 
  //will find the median IF the array count is Odd (ex. 3 items in array) - works 
  if (allNumbersArray.length % 2 == 1) { 
    var medianOddPosition = ((allNumbersArray.length+1)/2); //accounts for starting at 0
    var medianOdd = sortedArray[medianOddPosition-1]; //accounts for starting count at 0 
    document.getElementById("median").innerHTML = medianOdd;
  }
  //finds the median IF the array count is Even (ex. 4 items in the array) - unfinished
  else {
    //alert("Even!") //works - finds evens 
    var medianArrayCount = (sortedArray.length); //finds # of Items in Array
    var mid1 = sortedArray[(medianArrayCount / 2) -1 ];
    var mid2 = sortedArray[medianArrayCount / 2 ];
    medianOdd = ((parseInt(mid1) + parseInt(mid2))/2);
    document.getElementById("median").innerHTML = "median is: "+ medianOdd; 
    }
  }

//finds mode by creating dictionary (object) and then comparing for the highest Counts of Keys within the dictonary
function findMode() {
  var highestCount = 0; 
  var numberDictionary = {}; 
  var sortedArray = allNumbersArray.sort();

  sortedArray.forEach(number => {
    if (!numberDictionary[number]){
      numberDictionary[number] = 1; }
    else {
        numberDictionary[number] += 1; 
      }
    });

    console.log(numberDictionary); 
    for (var number in numberDictionary){
      var count = numberDictionary[number]; 
      if (count > highestCount){
        highestCount = count; 
        highestCountNumber = number; 
      }
    }
    var mode = highestCountNumber; 
    document.getElementById("mode").innerHTML = "mode is: " + mode; 
  }

  function clear() {
    document.getElementById("median").innerHTML = ""
  }