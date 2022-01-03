

let printArr=JSON.parse(localStorage.getItem("mealData"));
let note=document.querySelector(".note");
let total=0;

for(let i=0 ; i<printArr.length ; i++){
       total=total+Number(printArr[i].MRP)
}

document.querySelector(".total").textContent=total


document.querySelector("form").addEventListener("submit",submitOn);


function submitOn(event){
    event.preventDefault()
    console.log("hello");

    let myPromise=new Promise(function(resolve,reject){

        setTimeout(function(){
           resolve("order is deliverd")
        },12000);
    })
 
  let p=document.createElement("h2");
  p.textContent="Your order is confitmed please wait for 12sec"
  note.append(p);
      
    myPromise.then(function(ele){
        console.log(ele);
        note.innerHTML="";
        p.textContent="Order delivered"
  note.append(p);
  alert("Order delivered")

    })

    
}

