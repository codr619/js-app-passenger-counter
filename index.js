// document.getElementById("count").innerText=2

let count=0,countDisp=document.getElementById("countDisp");

// console.log(countDisp);

function increment(){
console.log("click");
count=count+1;
countDisp.innerText=count;

// document.getElementById("count").innerText=count;
}
// save feature
let saveValue=document.getElementById("saveValue");
function save(){
    console.log(count);
    saveValue.textContent+=count+" - ";
    // inner text doesnt display non human readable things like spaces so use textContent
    count=0;
    countDisp.textContent=0

}

// let myName='codr',greeting='hi my name is',myGreeting=greeting+"," + myName;
// console.log(myGreeting)   strings

// let welcomeEl=document.getElementById("welcome-el");
// let myName='codr',greeting='welcome back,';
// welcomeEl.innerText=greeting+myName;
// welcomeEl.innerText+='👋';   adding to existinf=g strings

