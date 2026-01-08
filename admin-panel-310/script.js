document.getElementById("payment-form").addEventListener("submit", function(e){
  e.preventDefault();

  const payment = {
    roomNo: document.getElementById("roomNo").value.trim(),
    memberName: document.getElementById("memberName").value.trim(),
    whatsapp: document.getElementById("whatsapp").value.trim(),
    paymentNo: document.getElementById("paymentNo").value.trim(),
    paymentMethod: document.getElementById("paymentMethod").value,
    paidAmount: parseFloat(document.getElementById("paidAmount").value),
    trxID: document.getElementById("trxID").value.trim(),
    receipt: document.getElementById("receipt").value.trim(),
    status: document.getElementById("status").value,
    dateTime: document.getElementById("dateTime").value,
    comment: document.getElementById("comment").value.trim()
  };

  let jsonData;
  const existingData = document.getElementById("jsonOutput").value;

  if (existingData) {
    try {
      jsonData = JSON.parse(existingData);
    } catch {
      alert("Invalid JSON. Resetting.");
      jsonData = [];
    }
  } else {
    jsonData = [];
  }

  jsonData.push(payment);
  document.getElementById("jsonOutput").value =
    JSON.stringify(jsonData, null, 2);

  this.reset();
});
