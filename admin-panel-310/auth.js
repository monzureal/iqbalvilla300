function checkPassword() {
  const PASSWORD = "683958"; // change this
  const entered = document.getElementById("password").value;

  if (entered === PASSWORD) {
    sessionStorage.setItem("admin", "true");

    // Redirect on correct password (FILL PATH IF NEEDED)
    window.location.href = "in.html";

  } else {
    // Redirect on wrong password (YOU will fill this path)
    window.location.href = "reject.html";
  }
}
