function checkPassword() {
  const PASSWORD = "IqbalVilla310"; // change this
  const entered = document.getElementById("password").value;

  if (entered === PASSWORD) {
    sessionStorage.setItem("admin", "true");

    // Redirect on correct password (FILL PATH IF NEEDED)
    window.location.href = "./login.html";

  } else {
    alert("Wrong password!");

    // Redirect on wrong password (YOU will fill this path)
    window.location.href = "./reject.html";
  }
}
