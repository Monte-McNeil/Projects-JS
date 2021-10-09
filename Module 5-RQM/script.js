async function getQ(){
    //var api string 
    var apiString = "https://api.quotable.io/random";

    //var quote length input
    var apiQuote = document.getElementById("quote").value;

        apiString= apiString + "?minLength=" + String(apiQuote-15) +"&maxLength=" + String(apiQuote);
        var response = await fetch(apiString);
    
        //create JSON Object
        var jsonData = await response.json();
        document.getElementById("author").innerHTML = JSON.stringify(jsonData.author);
        document.getElementById("place").innerHTML = JSON.stringify(jsonData.content);
}