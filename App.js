// BY AYUSH PANDEY 

// Selecting the Element in the HTML Document 

let btn = document.querySelector("button");
let ul=document.querySelector("ul");
let inp = document.querySelector("input");


// Adding event to add button  

btn.addEventListener("click", ()=>{

    if(inp.value==""){
        alert("Please Enter Your Task Frist")
    }else{
         // Creating Element

    let li = document.createElement("li");
    let div = document.createElement("div")
    let btn1 = document.createElement("button");
    btn1.innerText="Delete";

    li.innerText=inp.value;

    // Showing Element To The Page

    div.append(li);
    div.append(btn1);
    div.classList.add("OutPut");
    ul.prepend(div);

    // Resetting the input

    inp.value=""
    }

   

});

// Deleting the element 

ul.addEventListener("click", (event)=>{
     if(event.target.nodeName=="BUTTON"){
        let  Item = event.target.parentElement;
        Item.remove();
     }
});