(function () {
  const PASSWORD = "683958"; // CHANGE THIS

  const entered = prompt("Enter access password:");

  if (entered === PASSWORD) {
    document.body.style.display = "block";
  } else {
    alert("Access denied!");
    document.body.innerHTML = "";
    window.location.href = "../input/index.html";
  }
})();
