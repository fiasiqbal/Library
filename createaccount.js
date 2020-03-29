function validate(){
    let a = document.getElementById("nam1");
    let b = document.getElementById("nam2");
    let c = document.getElementById("mail");
    let d = document.getElementById("pwd");
    let e = document.getElementById("cpwd");

    if (a.value == "" || b.value == "" || c.value == "" || d.value == "" || e.value == ""){
        alert("All fields are required");
        return false;
    }
    else if (d.value.length<8){
        alert("Password must be atleast 8 characters long");
        return false;
    }
    else if (pwd.value |= cpwd.value){
        alert("Passwords do not match");
        return false;
    }
}