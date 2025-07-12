
document.title="Headache diary";

if (window.innerWidth <= 768) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${yyyy}-${mm}-${dd}`;
  document.getElementById("date").value = formattedDate;
}

document.getElementById("submit").addEventListener("click", function () {
  const data = {
    date: document.getElementById("date").value,
    startTime: document.getElementById("start-time").value,
    endTime: document.getElementById("end-time").value,
    painLevel: document.getElementById("pain_level").value,
    medicine: document.getElementById("medicine").value,
    notes: document.getElementById("notes").value
  };

  console.log("Submitting data:", data); 

  fetch("https://script.google.com/macros/s/AKfycbwnzGNUUAFDx9utupLhaMIVoAogJzvCxgx8u2r0PCuLCU2wbmS3M3A8L_mKKBzI9BbZOQ/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(() => {
    alert("Submitted successfully!");
    console.log("Submission sent");

    // Clear form fields after submission
    document.getElementById("date").value = "";
    document.getElementById("start-time").value = "";
    document.getElementById("end-time").value = "";
    document.getElementById("pain_level").value = "Select pain level";
    document.getElementById("medicine").value = "";
    document.getElementById("notes").value = "";
  })
  .catch(err => {
    console.error("Error submitting form:", err.message);
    alert("Error submitting!\n" + err.message);
  });
});
