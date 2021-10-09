async function bacon() {
    let url = 'https://baconipsum.com/api/?type=meat-and-filler';

    let newParagraphs = document.getElementById('numOfParas').value
    url = url + "?type-meat-and-filler&paras=" + newParagraphs

    let response = await fetch(url)
    document.getElementById('rawData').innerHTML = ""
    document.getElementById('formattedData').innerHTML = ""

    let jsonData = await response.json()
    document.getElementById('rawData').innerHTML = JSON.stringify(jsonData);

    for(para in jsonData) {
        document.getElementById('formattedData').innerHTML += "<p>" + jsonData[para] + "</p>"
    }
}
    return true;