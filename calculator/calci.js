// this will clear the screen
function clearScreen() {
    document.getElementById("result").value = "";
    }
//to delete a element
function erase(value){
    var p = document.getElementById("result").value;
    let q=p.substring(0,p.length-1);
    document.getElementById("result").value=q;
}
//this will display the  expression on screen
function display(data) {
    document.getElementById("result").value += data;
    }
    
// This will evaluate the expression and return the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }
    