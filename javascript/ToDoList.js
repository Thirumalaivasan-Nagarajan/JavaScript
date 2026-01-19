const todoList=[]
function addToArray()
{
  const inputObject=document.querySelector('.js-input-value');
  const inputValue=inputObject.value;
  todoList.push(inputValue);
  console.log(todoList);
  inputObject.value='';
}