var billAmt = document.querySelector("#input-bill");
var nextBtn = document.querySelector("#btn-next");
var cashAmt = document.querySelector("#input-cash");
var calculateBtn = document.querySelector("#btn-calculate");
var cashSection = document.querySelector(".cash-section");
var balanceDisplay = document.querySelector("#output-balance");
var noteCount = document.querySelector(".note-count");
var outputSection = document.querySelector(".output-section");

const notesAvailable = [2000, 500, 100, 20, 10, 5, 1]; 

function nextBtnHandler(){
    if(parseInt(billAmt.value, 10)>0){
        nextBtn.style.display = "none";
        cashSection.style.display = "block";
    }
    else{
        alert("Enter Valid Bill Amount!");
    }    
}
nextBtn.addEventListener("click", nextBtnHandler);

function calculateBtnHandler(){ 
    var bill = parseInt(billAmt.value, 10);
    var cash = parseInt(cashAmt.value, 10);
    var balance = cash - bill;
    if(balance >= 0){
        balanceDisplay.innerText = "₹" + balance;
        outputSection.style.display = "block";
    }
    else{
        alert("Insufficient Cash!")
    }   
        
}
calculateBtn.addEventListener("click", calculateBtnHandler);