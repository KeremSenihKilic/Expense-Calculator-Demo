//! Eleman aktarma

const form = document.querySelector("#expense-form")
const nameInput = document.querySelector("#expense-name")
const valInput = document.querySelector("#expense-val")
const itemHTML = document.querySelector("#item")
const totalVal = document.querySelector(".total-val")

//console.log(form)


//console.log(totalVal)
//! Total Value
let TotalValueOfItems = 0;

let IPval;
let IPname;

form.addEventListener("submit", (e) => {
 e.preventDefault();

  IPval = parseInt(valInput.value)
  IPname = nameInput.value

 if (!IPval && !IPname ) {
    alert("Both of the inputs MUST have a value before being submitted!!")
    return;
 }
 
   // here loow
   TotalValueOfItems += IPval;
   totalVal.innerText = `Total Expenses: ${TotalValueOfItems} NOK`; 

   // creates a new div and adds an attriute called "expense-item" which already exists in style.css so that 
   // when the element is created it gets that attribute which will automatically give the stylings to it :D
 const itemDiv = document.createElement("div")
 itemDiv.classList.add("expense-item")
 console.log(itemDiv)

 //item sample
 itemDiv.innerHTML = `
              <h2>${IPname}</h2>
              <h3>${IPval} NOK</h3>
              <img src="trash.png" id ="del-ele" >
 
 `
 //visually creates the item sample
itemHTML.appendChild(itemDiv)

nameInput.value = "";
valInput.value = "";


})


//Removal of the items
itemHTML.addEventListener("click", (e) => {
 const ele = e.target;

 if (ele.id == "del-ele") {
    ele.parentElement.remove();
    console.log("element is successfully removed from HTML :D")
    TotalValueOfItems -= IPval;
   totalVal.innerText = `Total Expenses: ${TotalValueOfItems} NOK`; 
 }
})