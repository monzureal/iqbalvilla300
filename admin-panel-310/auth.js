function checkPassword() {
  const PASSWORD = "IqbalVilla310"; // change this
  const entered = document.getElementById("password").value;

  if (entered === PASSWORD) {
    sessionStorage.setItem("admin", "true");
    window.location.href = "index.html";
  } else {
    alert("Wrong password");
  }
}
