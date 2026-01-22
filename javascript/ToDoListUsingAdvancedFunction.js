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
  <button onclick="todoList.splice(${index},1);display();" class="delete-button" >Delete</button>
  `;
    HTML += todo;
  });
  
  console.log(HTML);
  document.querySelector('.container').innerHTML = HTML;
}