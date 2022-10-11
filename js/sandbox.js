var attempt = 3
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("Password").value;
  if (username =="Formget" && password =="formget#123")
 {
    alert("Login Successfully");
    window.location = "success.html";
    return false;
 }
 else {
    attempt --;
    alert("You have left"+"attempt;");
    if (attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("Password").disabled = true;
        document.getElementById("submit").disabled = true;
         return false;
    }
 }
}
