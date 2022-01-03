

var title=document.createElement('H1')
title.setAttribute('id', 'title')
title.setAttribute('class', 'text-center')
title.innerText=("PHONE")
document.body.appendChild(title)

let cont=document.createElement("div");
cont.setAttribute("class", "container");
document.body.append(cont);


let row = document.createElement("div")
row.setAttribute("class", "row");
cont.appendChild(row);




fetch("https://api-mobilespecs.azharimm.site/v2/brands")
.then((d)=>d.json())
.then((data)=>{
    console.log(data);
   console.log(data.data.length);

    
    for(let i=0;i<9; i++){
      
        a=data.data[i]
        row.innerHTML+=` 
        
        <div class="col-lg-4 col-md-4 col-sm-6 col-xl-4 p-3">
        <div  class="card border text-black  h-100 m-3" style="width: 18rem;">
            <div class="card-header text-center "> ${a.brand_id}<div>
                
                <div> <div class="card-body "> 
                <div class="card-text"> Brand Name:${a.brand_name}<br>
                 Brand Slug:${a.brand_slug}<br>
                 Device Count:${a.device_count}</div>
                 <button onclick="Check('${a.detail}','ans${a.brand_slug}')">More Details</button>
<div id="ans${a.brand_slug}"></div>
   </div>
   <div>
    
    </div>
    `
    
    }
})

.catch((er)=>{
    console.log("er")
})

function Check(a,m){
    
    document.getElementById(m).innerHTML=a

}






















































    












