document.getElementById("amountSelect").addEventListener("change", function () {
    var customAmountInput = document.getElementById("customAmount");
    if (this.value === "custom") {
      customAmountInput.style.display = "block";
    } else {
      customAmountInput.style.display = "none";
    }
  });