const todoList=[]
function addToArray()
{
  const inputObject=document.querySelector('.js-input-value');
  const inputValue=inputObject.value;
  todoList.push(inputValue);
  console.log(todoList);
  inputObject.value='';
}
const toDoList=[];
function addTasks()
{
  const inputObject=document.querySelector('.js-input-content');
  const inputValue=inputObject.value;
  toDoList.push(inputValue);
  inputObject.value='';
}
function todoListHTML()
{
  const container=document.querySelector('.container');
  let HTML='';
  for(let i=0;i<toDoList.length;i++)
  {
    HTML+=`<p> ${toDoList[i]}`;
  }
  container.innerHTML=HTML;
}
const finalTodo=[];
function addFinalTodo()
{
  
}
