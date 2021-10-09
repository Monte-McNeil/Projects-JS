function validateThenAdd() {
    var newWord = document.forms["theForm"]["word"].value
    var newNumber = document.forms["theForm"]["number"].value

    if (newWord == "") {
        alert("Enter a word to check")
        return false
    }

    else if 
        ((newNumber != 1) && (newNumber != 2)) {
            alert("Enter a 1 or 2")
        document.forms["theForm"]["newNumber"].value = ""
        return false
    }
    else {

        if(newNumber == 1) {
            var tableRef = document.getElementById("list1");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = newWord;

        }

            else {
                var tableRef = document.getElementById("list2");
                (tableRef.insertRow(tableRef.rows.length)).innerHTML = newWord;

                document.forms["theForm"]["newWord"].value = "";
                document.forms["theForm"]["newNumber"].value = "";
                return true;
            }

        }
}

function clearList1() {
    var tableRef = document.getElementById("list1")
    tableRef.innerHTML = " ";
}

function clearList2() {
    var tableRef = document.getElementById("list2")
    tableRef.innerHTML = " ";
}