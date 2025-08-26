console.log("file connected");
// heart icon functionalitis
let heartCount = Number(document.getElementById("heart-count").innerText);
const hearts = document.getElementsByClassName("heartIcon");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
  });
}

// call function
function calling(alertMessage) {
  const coin = Number(document.getElementById("coin").innerText);
  const callingtCost = 20;

  if (coin < callingtCost) {
    alert("Your Coin is Low");
    return;
  }
  alert(alertMessage);
  const afterCallCoin = coin - callingtCost;
  document.getElementById("coin").innerText = afterCallCoin;
  return;
}


// event listener add
document.getElementById("emergencycall").addEventListener("click", function () {
  calling("📞 Calling National Emergency Number 999.....");
});
document
  .getElementById("policeCallButton")
  .addEventListener("click", function () {
    calling("📞 Calling Police Helpline Number 999 .....");
  });

document.getElementById("fireServiceCall").addEventListener("click", function () {
  calling("📞 Calling Fire Service Number 999.....");
});
document.getElementById("ambulanceCallButton").addEventListener("click", function () {
  calling("📞 Calling Ambulance Service 1994-999999...");
});
document.getElementById("womenChildhelp").addEventListener("click", function () {
  calling("📞 Calling Women & Child Helpline 109...");
});
document.getElementById("AntiCorruptioncall").addEventListener("click", function () {
  calling("📞 Calling Anti-Corruption Helpline 106.....");
});
document.getElementById("ElectricityCall").addEventListener("click", function () {
  calling("📞 Calling Electricity Helpline 16216....");
});
document.getElementById("bracCall").addEventListener("click", function () {
  calling("📞 Calling Brac Helpline 16445.....");
});
document.getElementById("relwayCall").addEventListener("click", function () {
  calling("📞 Calling Bangladesh Railway Helpline 163.....");
});