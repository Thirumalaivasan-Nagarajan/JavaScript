const todoList = [];
function addTask() {
  const inputObject = document.querySelector('.js-input');
  const dateObject = document.querySelector('.js-date-time');
  let task = inputObject.value;
  let date = dateObject.value;
  inputObject.value = '';
  dateObject.value = '';
  todoList.push({ task, date }); /*Passing object an value into an array using shorthand property*/
}
function display() {
  let HTML = '';
  todoList.forEach((eachObject,index)=>
{
    let { task, date } =eachObject;
    let todo = `
  <div>
  ${task}
  </div>
  <div>
   ${date}
   </div>
  <button  class="delete-button js-delete-button" >Delete</button>
  `;
    HTML += todo;
  });
  
  document.querySelector('.container').innerHTML = HTML;
  document.querySelectorAll('.js-delete-button').forEach((element,index)=>
{
  console.log(element);
  element.addEventListener('click',()=>{
    todoList.splice(index,1);
    display();
  }
);
});
}
document.querySelector('.js-add-button').addEventListener('click',()=>
{
  addTask();
   display();
});


