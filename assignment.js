// ===============================
// Heart Click Functionality
// ===============================
let heartCount = 0;
function clickAndIncreaseHeart(id) {
  heartCount++;
  document.getElementById('heart-increasing-para').innerText = heartCount;
}

// add event listeners for all heart icons
document.querySelectorAll("[id^='heart-picture']").forEach(item => {
  item.addEventListener("click", () => clickAndIncreaseHeart(item.id));
});


// ===============================
// Call Button Functionality
// ===============================
function clickAndCall(callButton) {
  const coinElement = parseInt(document.getElementById('coin-para').innerText);
  const perClickReduce = 20;

  // not enough coin
  if (coinElement < perClickReduce) {
    alert(' You do not have enough coins to make a call.');
    return;
  }

  // reduce coins
  const coinAfterOneClick = coinElement - perClickReduce;
  document.getElementById('coin-para').innerText = coinAfterOneClick;

  // get service name & number
  const serviceName = callButton.parentNode.parentNode.children[1].innerText;
  const serviceNumber = callButton.parentNode.parentNode.children[3].innerText;

  // show alert
  alert(` Calling ${serviceName} (${serviceNumber})`);

  // get current time
  const currentTime = new Date().toLocaleTimeString();

  // add to call history
  const historyCart = document.getElementById('history-container');
  const historyCartDiv = document.createElement('div');
  historyCartDiv.classList.add("border-b", "p-2", "flex", "justify-between");
  historyCartDiv.innerHTML = `
      <span><b>${serviceName}</b> - ${serviceNumber}</span>
      <span class="text-gray-500 text-sm">${currentTime}</span>
  `;
  historyCart.appendChild(historyCartDiv);
}


// ===============================
// Copy Button Functionality
// ===============================
let copyCount = 0;

function clickAndCopy(copyButton) {
  // get service number (same row এর number)
  const serviceNumber = copyButton.parentNode.parentNode.children[3].innerText;

  // copy to clipboard
  navigator.clipboard.writeText(serviceNumber).then(() => {
    // increase copy count
    copyCount++;
    document.getElementById("copy-increasing-para").innerText = copyCount;

    // alert message
    alert(` Copied: ${serviceNumber}`);
  });
}


// ===============================
// Clear History Functionality
// ===============================
document.getElementById('clear-btn').addEventListener('click', function () {
  document.getElementById('history-container').innerHTML = "";
});


// ===============================
// Add Events to Call & Copy Buttons
// ===============================
document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    clickAndCall(btn);
  });
});

document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    clickAndCopy(btn);
  });
});
