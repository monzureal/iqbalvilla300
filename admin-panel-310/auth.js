function checkPassword() {
  const PASSWORD = "amiroshu@68662"; // change this
  const entered = document.getElementById("password").value;

  if (entered === PASSWORD) {
    sessionStorage.setItem("admin", "true");
    window.location.href = "index.html";
  } else {
    alert("Wrong password");
  }
}
