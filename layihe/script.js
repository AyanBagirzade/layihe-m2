const input = document.querySelector(".comment")
// make to do list
document.querySelector('.add-btn').onclick = function(){
    if(document.querySelector('.input').value.length == 0){
        alert("Please enter something")
    }

    else{  
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <label>
            <input type="checkbox">
                <span id="taskname">
                    ${document.querySelector('.input').value}
                </span>
                </label>
                <button class="delete">x</button>
            </div>
        `;

        document.querySelector('.input').value=""
       let cancel = document.querySelectorAll(".delete");
        for(let i=0; i<cancel.length; i++){
            cancel[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
    
// remove and add of items
let delet=document.querySelector(".x")
delet.addEventListener("click",()=>{
    input.classList.add("hide")
})

let add=document.querySelector(".plus")
add.addEventListener("click",()=>{
   if(input.classList.contains("hide")){
      input.classList.remove("hide")
   }
})



// sort
let sort=document.querySelectorAll('.sort')
let down=document.querySelector(".down")
const tasks = document.querySelector("#tasks")

down.addEventListener('click', () => {
 down.style.display="none" 
 up.style.display="block" 
 
let task=document.querySelectorAll('.task')
let x = [];

task.forEach(ele =>{
    x.push(ele.firstElementChild.innerText)
})

tasks.innerHTML=""
x.sort()

x.forEach(item=>{
    
   tasks.innerHTML+= `<div class="task">
   <label>
        <input type="checkbox">
    <span id="taskname">
        ${item}
    </span>
    </label>
    <button class="delete">x</button>
</div>`

document.querySelector('.input').value=""
let cancel = document.querySelectorAll(".delete");
 for(let i=0; i<cancel.length; i++){
     cancel[i].onclick = function(){
         this.parentNode.remove();
     }}


})
});

// reverse sort
let up =document.querySelector(".up")
up.style.display="none"


up.addEventListener('click', () => {
    down.style.display="block" 
    up.style.display="none" 
    let task=document.querySelectorAll('.task')
    let y = [];
    
    task.forEach(ele =>{
        y.push(ele.firstElementChild.innerText)
    })
    
    tasks.innerHTML=""
    y.reverse()
    
    y.forEach(item=>{
        
       tasks.innerHTML+= `<div class="task">
       <label>
        <input type="checkbox">
        <span id="taskname">
            ${item}
        </span>
        </label>
        <button class="delete">x</button>
    </div>`
document.querySelector('.input').value=""
let cancel = document.querySelectorAll(".delete");
 for(let i=0; i<cancel.length; i++){
     cancel[i].onclick = function(){
         this.parentNode.remove();
     }}
    
    })
    })
