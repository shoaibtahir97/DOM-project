function createTable(){
    var rows = parseInt(prompt("Enter number of rows"))
    var columns = parseInt(prompt("Enter number of columns"));
    
    var body = document.getElementsByName("body");

    var table = document.createElement("table")
    var tr = document.createElement("tr")  ;
    var td = docuement.createElement("td");

    body.append(table, tr, td);
}