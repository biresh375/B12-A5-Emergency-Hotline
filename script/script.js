
// heart icon functionalitis
let heartCount = Number(document.getElementById("heart-count").innerText);
const hearts = document.getElementsByClassName("heartIcon");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
  });
}
// get innertext function


function getInnerText(id){
 const text= document.getElementById(id).innerText
  return text;
}

// call function
function calling(title,number) {
  const coin = Number(document.getElementById("coin").innerText);
  const callingtCost = 20;

  if (coin < callingtCost) {
    alert("Your Coin is Low. minimum 20 coins for call");
    return;
  }
  alert("📞 Calling " + title+ " "+ number + "....");
  const afterCallCoin = coin - callingtCost;
  document.getElementById("coin").innerText = afterCallCoin;
  
    const div = document.createElement('div');
div.innerHTML =`
  <div class="flex justify-between items-center mt-3 bg-[#FAFAFA] p-4 roounded-[8px]">
              <div >
                <h1 class="text-[18px] font-semibold">${title}</h1>
                <p class="text-[#5C5C5C]">${number}</p>
              </div>
              <p>${new Date().toLocaleTimeString()}</p>
            </div>
`

  document.getElementById('allHistorySection').appendChild(div)
  return;
}





// event listener add
document.getElementById("emergencycall").addEventListener("click", function () {
  
  const nationalEmergencyTitle = getInnerText("nationalEmergencyTitle")
const nationalEmergencyNumber= getInnerText('nationalEmergencyNumber')
calling(nationalEmergencyTitle,nationalEmergencyNumber);



});
document
  .getElementById("policeCallButton")
  .addEventListener("click", function () {
    const policeTitle = getInnerText("policeTitle")
    const policeNumber = getInnerText("policeNumber")

    calling(policeTitle,policeNumber);
  });

document.getElementById("fireServiceCall").addEventListener("click", function () {
  const fireSErviceTitle = getInnerText("fireSErviceTitle")
    const fireServiceNumber = getInnerText("fireServiceNumber")
  calling(fireSErviceTitle,fireServiceNumber);
});
document.getElementById("ambulanceCallButton").addEventListener("click", function () {
  const ambulanceTitle = getInnerText("ambulanceTitle")
    const ambulanceNumber = getInnerText("ambulanceNumber")
  calling(ambulanceTitle,ambulanceNumber);
});
document.getElementById("womenChildhelp").addEventListener("click", function () { const womenChildTitle = getInnerText("womenChildTitle")
    const womenChildNumber = getInnerText("womenChildNumber")
  calling(womenChildTitle,womenChildNumber);
});
document.getElementById("AntiCorruptioncall").addEventListener("click", function () { const antiCorruptionTitle = getInnerText("antiCorruptionTitle")
    const antiCorruptionNumber = getInnerText("antiCorruptionNumber")
  calling(antiCorruptionTitle,antiCorruptionNumber);
});
document.getElementById("ElectricityCall").addEventListener("click", function () { const electricityTitle = getInnerText("electricityTitle")
    const electricityNumber = getInnerText("electricityNumber")
  calling(electricityTitle,electricityNumber);
});
document.getElementById("bracCall").addEventListener("click", function () {
   const bracTitle = getInnerText("bracTitle")
    const bracNumber = getInnerText("bracNumber")
  calling(bracTitle,bracNumber);
});
document.getElementById("relwayCall").addEventListener("click", function () {
   const railwayTitle = getInnerText("railwayTitle")
    const railwayNumber = getInnerText("railwayNumber")
  calling(railwayTitle,railwayNumber);
});


// clear button feater
// document.getElementById('clearButton').addEventListener('click',function(){
//   const historyDiv = document.getElementById('allHistorySection')
  
//   const historyDivChild= historyDiv.children
//   for(const childDiv of historyDivChild){
//     childDiv.remove()
//   }
  
// })

document.getElementById('clearButton').addEventListener('click', function() {
  const historyDiv = document.getElementById('allHistorySection');
  const historyDivChild = historyDiv.children;
  
  
  for (let i = historyDivChild.length - 1; i >= 0; i--) {
    historyDivChild[i].remove();
  }
});

