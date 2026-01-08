function checkPassword() {
  const PASSWORD = "IqbalVilla310"; // change this
  const entered = document.getElementById("password").value;

  if (entered === PASSWORD) {
    // redirect to the REAL input page
    window.location.href = "index.html";
  } else {
    alert("Wrong password!");
  }
}
