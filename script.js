let kirbyImage = document.getElementById("kirby-image");

kirbyImage.onclick = function() {
    kirbyImage.src = "images/i dont think thats kirby.jpg";
}


let coinButton = document.getElementById("coin");
let coinNum = 0;

coinButton.onclick = function() {
    //console.log("Test Message.")
    coinNum += 1;
    let marioDivider = document.getElementById("Mario");
    let coinCount = document.createElement("h1");
    coinCount.innerHTML = "Coins: " + coinNum;
    marioDivider.appendChild(coinCount);
}