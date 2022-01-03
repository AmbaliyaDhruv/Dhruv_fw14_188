

let printArr=JSON.parse(localStorage.getItem("mealData"));

let mainbox=document.querySelector(".mainbox");
console.log(printArr);

display(printArr)

function display(data){
    mainbox.innerHTML="";
    data.map(function(ele,index){
       
        let outer=document.createElement("div")
        outer.className="outer";
        let img=document.createElement("img");
         img.src=ele.img
        let des=document.createElement("div");

        let Name=document.createElement("h2");
        Name.innerText=ele.Name
        let MRP=document.createElement("h3");
       
        MRP.innerText=ele.MRP;
        let cart=document.createElement("button");
        cart.innerText="Remove"
        cart.addEventListener("click",function(){
            clickOn(ele,index);
        })

        


        mainbox.append(outer);

        outer.append(img,des);

        des.append(Name,MRP,cart);

    })


 
}


function clickOn(ele,index){
       printArr.splice(index,1);
       localStorage.setItem("mealData",JSON.stringify(printArr));
       display(printArr);
}