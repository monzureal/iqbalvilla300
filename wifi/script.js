document.addEventListener("DOMContentLoaded", function() {
  const rows = document.querySelectorAll("#payments-table tbody tr");
  
  // Highlight unpaid rows
  rows.forEach(row => {
    const status = row.cells[8]?.textContent.trim(); // Payment Status column
    if(status === "Unpaid") {
      row.style.backgroundColor = "#ffcccc"; // light red
    }
  });

  // Optional: automatically calculate total Paid Amount
  let total = 0;
  rows.forEach(row => {
    const amount = parseFloat(row.cells[5]?.textContent);
    if(!isNaN(amount)) total += amount;
  });
  const footer = document.querySelector("#payments-table tfoot td:nth-child(2)");
  if(footer) footer.textContent = total;

  // Optional: adjust table responsiveness on resize (not necessary with CSS overflow-x)
  window.addEventListener("resize", () => {
    const table = document.getElementById("payments-table");
    if(window.innerWidth < 768){
      table.style.fontSize = "12px";
    } else {
      table.style.fontSize = "14px";
    }
  });
});
