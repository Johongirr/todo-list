const form = document.querySelector('form');
const formInput = document.querySelector('.form-input');
const card = document.querySelector('.card');
const filter = document.querySelector('.user-input');
let placeholde;
function submitHandle(e) {  
 
e.preventDefault();    
const div = document.createElement("div");
div.classList.add("items__container")
div.classList.add("border-grey");
div.classList.add("row-cols-2");

const para = document.createElement("p");
para.classList.add("item__name");
para.textContent = formInput.value;
div.appendChild(para);

const removeBtn = document.createElement("span")
removeBtn.textContent = "X";
removeBtn.classList.add("item__remove");
div.appendChild(removeBtn);

card.appendChild(div)
formInput.value = "";
let removeBtns = document.querySelectorAll('.item__remove');
let paras= Array.from(document.querySelectorAll('.item__name'));
placeholde = paras
updateElements(removeBtns)
}

function removeElement(){
    this.parentElement.style.display = "none"
}
function updateElements(removeBtns) {
    
    removeBtns.forEach(removeBtn => removeBtn.addEventListener('click', removeElement))
}


function inputHandle (){
    
   filtered = placeholde.forEach(para =>{
     if(para.textContent.toLowerCase().includes(this.value.toLowerCase())){
        para.parentElement.style.display = "flex";
     } else {
        para.parentElement.style.display = "none";
     }
   })
   console.log(filtered)
}

form.addEventListener('submit', submitHandle);
filter.addEventListener('input', inputHandle)