const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
!function (){
  let topIndex = 0;
  function newTodo() {
    let newElement = document.createElement('li');
    newElement.setAttribute("id", "todo" + topIndex ++);
    newElement.innerHTML += "<input type=\"checkbox\"><input type=\"text\" value=\"todo\"><button class=\"button-delete\">&#10006;</button>";
    list.appendChild(newElement);
    uncheckedCountSpan.innerHTML = (parseInt(uncheckedCountSpan.innerHTML) + 1).toString();
    itemCountSpan.innerHTML = (parseInt(itemCountSpan.innerHTML) + 1).toString();
  }
  document.querySelector("#newTodo").addEventListener("click",newTodo);
  list.addEventListener("click",function(ev){
     let el = ev.target.closest("li > button");
     if(!el) return;
     if(!el.previousSibling.previousSibling.checked)
      uncheckedCountSpan.innerHTML = (parseInt(uncheckedCountSpan.innerHTML) - 1).toString();
    itemCountSpan.innerHTML = (parseInt(itemCountSpan.innerHTML) - 1).toString();
     el.parentNode.remove();
  });
  list.addEventListener("click",function(ev){
    let el = ev.target.closest("li > input[type=checkbox]");
    if(!el) return;
    let growth =  el.checked ? -1: 1;
    uncheckedCountSpan.innerHTML = (parseInt(uncheckedCountSpan.innerHTML) + growth).toString();
 });
}();
