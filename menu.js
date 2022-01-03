async function manu(){
    try{
        
         let res= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
         let data= await res.json()
         console.log(data.meals);
         display(data.meals);
    }
    catch(error){
         console.log(error)
    }
}

manu();
let mainbox=document.querySelector(".mainbox");
function display(data){
    data.map(function(ele){
       
        let outer=document.createElement("div")

        let img=document.createElement("img");
         img.src=ele.strMealThumb
        let des=document.createElement("div");

        let Name=document.createElement("h2");
        Name.innerText=ele.strMeal
        let MRP=document.createElement("h3");
        let price=Math.floor(Math.random()*50+100)
        MRP.innerText=price;
        let cart=document.createElement("button");
        cart.innerText="Add to cart"
        cart.addEventListener("click",function(){
            clickOn(ele,price);
        })

        


        mainbox.append(outer);

        outer.append(img,des);

        des.append(Name,MRP,cart);

    })


 
}

let dataArr=JSON.parse(localStorage.getItem("mealData")) || []
document.querySelector("#count").textContent=dataArr.length
function clickOn(ele,price){
    let dataObj={
        img:ele.strMealThumb,
        Name:ele.strMeal,
        MRP:price,
    }

    dataArr.push(dataObj);
    localStorage.setItem("mealData",JSON.stringify(dataArr));
    document.querySelector("#count").textContent=dataArr.length
}