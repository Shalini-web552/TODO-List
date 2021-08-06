
const addForm=document.querySelector(".add");
const list=document.querySelector(".todos");
const search=document.querySelector(".search input");


 const generateTemplate = todo =>{
       
    const html= `
                 <li class="list-group-item d-flex justify-content-between align-item-center">
                   <span>${todo}</span>
                   <i class="fas fa-trash-alt delete"></i>
                 </li>
    `
    list.innerHTML += html;
};

//adding todos

addForm.addEventListener("submit", e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
      
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
}
);



//delete todos
 
list.addEventListener("click", e =>{
    
    if(e.target.classList.contains('delete'))
         e.target.parentElement.remove();

});

//searching and filtering todos

const filterTodos= (term) =>{
      
    Array.from(list.children)
      .filter((todo) => !todo.textContent.includes(term))
      .forEach((todo) => todo.classList.add('filtered') );

    Array.from(list.children) 
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));

    
}

search.addEventListener("keyup",() =>{
    let term=search.value.trim().toLowerCase();
    filterTodos(term);
})






