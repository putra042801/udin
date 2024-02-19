
function validateForm() {
    var password = document.getElementById("otp-6").value;

    if (password === "") {
        alert("Maaf, password tidak boleh kosong");
        event.preventDefault();
    } 
}
  