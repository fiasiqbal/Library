function validateForm(){
    let x = document.getElementById("exampleInputEmail1");
    let y = document.getElementById("exampleInputPassword1");
    if (x.value == "" || y.value == ""){
        alert("Empty field");
        return false;
    }
}