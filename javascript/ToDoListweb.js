const todoList=[];
function addTask()
{
  const inputObject=document.querySelector('.js-input');
  const dateObject=document.querySelector('.js-date-time');
  let task=inputObject.value ;
  let date=dateObject.value ;
  inputObject.value='';
  dateObject.value='';
  todoList.push({task,date});
}
function display()
{
  let HTML='';
 for(let i=0;i<todoList.length;i++)
 {
  let {task,date}=todoList[i];
  let todo=`<p>${task}    ${date} <button class="delete-button" onclick="todoList.splice(${i},1);display();">Delete</button> </p> `;
  HTML+=todo;
 }
 console.log(HTML);
 document.querySelector('.container').innerHTML=HTML;
}